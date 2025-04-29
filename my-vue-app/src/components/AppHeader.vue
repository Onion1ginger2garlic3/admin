<script setup>
  import { inject,ref,reactive } from 'vue';
  import {logoutApi,updatepassword} from '@/api/manager'
  import {useRouter} from 'vue-router'
  import { useTestStore } from '@/store';
  import {Msg} from "@/utils/msg"
  import { useFullscreen } from '@vueuse/core'
  import FormList from "@/components/ofenComponents/FormList.vue"

  const {toggle } = useFullscreen()
  const  {
      changePassword,
      form,
      formListRef,
      onSubmit
    } = useRepassword()

  // 获取 showDialog 方法
  const showDialog = inject('showDialog');
  const router = useRouter()
  const store = useTestStore()

  // 控制下拉框的显示状态
  const dropdownVisible = ref(false);

  function toggleDropdown() {
    dropdownVisible.value = !dropdownVisible.value
  }

  const refresh = ()=>location.reload()

  function logout() {
    showDialog("用户点击了退出登录按钮","确定吗")
    // 在这里添加退出登录的逻辑
    .then(()=>{
      logoutApi()
      .finally(()=>{
        //移除token
        store.logoutApi()
        //跳回登录页
        router.push("/login")
        //提示退出登录成功
        Msg("退出登录成功",'success')
      })
    })
    .catch(()=>{

    })
  }
    //修改密码
  function useRepassword() {
    function changePassword() {
      formListRef.value.open()
    }
    const formListRef = ref(null)
    const form = reactive({
      oldpassword:"",
      newpassword:"",
      repassword:""
    })

    function onSubmit(){

      updatepassword(form)

      .then(res=>{
        Msg("修改密码成功请 重新登录",'success')
        store.logoutApi()
        router.push("/login")
      })
      formListRef.value.close()
    }

    return {
      changePassword,
      form,
      formListRef,
      onSubmit
    }
  }

</script>
<template>
  <div class="header">
    <div class="bread">
      <div class="title">教务系统</div>
      <div class="item">
        <a href="#">首页</a>
        <a href="#">用户管理</a>
      </div>
      <span class="refresh-btn" @click="refresh">↻刷新</span>
      <!-- 全屏 -->
      <span class="refresh-btn" @click="toggle">▣全屏</span>
    </div>
    <div class="info">
      <div class="userinfo">
        <div class="userimg">
          <img :src="store.user.avater">
        </div>
        <!-- 刷新当前页面 -->
        <span class="username" @click="toggleDropdown">{{ store.user.username }}  ▼</span>

        <!-- 下拉框 -->
        <div v-if="dropdownVisible" class="dropdown" @click="toggleDropdown">
          <div class="dropdown-item" @click="logout">退出登录</div>
          <div class="dropdown-item" @click="changePassword">修改密码</div>
        </div>
      </div>
    </div>
  </div>

  <form-list ref="formListRef"
    title="修改密码"
    size="50%"
    destoryOnClose
    @submit="onSubmit"
  >
    <div class="form">
      <div class="item">
        <label for="oldpassword">旧密码：</label>
        <input id="oldpassword" v-model="form.oldpassword" type="password" placeholder="请输入旧密码">
      </div>
      <div class="item">
        <label for="newpassword">新密码：</label>
        <input id="newpassword" v-model="form.newpassword" type="password" placeholder="请输入新密码">
      </div>
      <div class="item">
        <label for="repassword">确认密码：</label>
        <input id="repassword" v-model="form.repassword" type="password" placeholder="请再次输入新密码">
      </div>
    </div>
  </form-list>

</template>

<style scoped>
.header {
  color: aliceblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #575e6b;
  height: 50px;
}
.bread {
  display: flex;
  align-items: center;
}
.bread .title {
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}
.bread .item a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}
.bread .item a:hover {
  color: #00bcd4;
}
.info {
  position: relative;
}
.userinfo {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.userimg img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.username {
  color: #ffffff; /* 保持白色字体 */
  font-size: 15px; /* 增大字体 */
  font-family: 'Arial', 'Helvetica', sans-serif; /* 使用更现代的字体 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* 添加文字阴影 */
  cursor: pointer; /* 鼠标悬停时显示手型 */
  transition: color 0.3s ease; /* 添加颜色过渡效果 */
}

.username:hover {
  color: #00bcd4; /* 鼠标悬停时改变字体颜色 */
}
.dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  width: 100px;
}
.dropdown-item {
  height: 20px;
  padding: 10px;
  cursor: pointer;
  color: #333;
  text-align: center;
  line-height: 20px;
}
.dropdown-item:hover {
  background-color: #f5f5f5;
}
.refresh-btn {
  font-size: 20px;
  color: white;
  cursor: pointer;
  margin-left: 70px;
  transition: transform 0.2s ease, color 0.2s ease;
}

.refresh-btn:hover {
  color: #00bcd4; /* 鼠标悬停时改变颜色 */
}

.refresh-btn:active {
  transform: scale(0.9); /* 点击时缩小 */
  color: #ff9800; /* 点击时改变颜色 */
}


</style>