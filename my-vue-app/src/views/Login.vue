<template>
    <div class="container">
        <div class="left">
            <h2>欢迎登录教务系统</h2>
        </div>
        <div class="right">   
            <div v-if="isAccount">
                <div class="tittle">
                    <h2>登录</h2>
                    <span>--</span>
                    <span>账号密码登录</span>
                    <span>--</span>
                </div>
                <div class="form">
                    <input class="item" v-model="loginInfo.username" placeholder="请输入用户名"/>
                    <input class="item" v-model="loginInfo.email" placeholder="请输入邮箱"/>
                    <input class="item" v-model="loginInfo.password" placeholder="请输入密码"/>
                    <button class="login-btn" @click="login">登 录</button>
                    <a href="#" @click.prevent="isAccount=false">没有账号，请注册</a>
                </div>
            </div>

            <div v-else>
                <div class="tittle">
                    <h2>注册</h2>
                </div>
                <div class="form">
                    <input class="item" v-model="register.username" placeholder="请输入用户名"/>
                    <input class="item" v-model="register.email" placeholder="请输入用户名"/>
                    <input class="item" v-model="register.password" placeholder="请输入密码"/>
                    <button class="login-btn" @click="register">注 册</button>
                    <a href="#" @click.prevent="isAccount=true">已有账号，去登录</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Msg } from '@/utils/msg'
    import {ref,reactive,onMounted,onBeforeMount} from 'vue'
    import { useRouter } from 'vue-router'
    import { useTestStore } from '../store'

    const router = useRouter();
    const isAccount = ref(true)
    const store = useTestStore()
    //输入格式
    // 邮箱格式正则
    let emailReg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
    // 密码格式验证
    // 至少八个字符，至少一个字母和一个数字：
    let passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    // 用户名格式验证
    // 用户名 2-20位，只能包含汉字/数字/字母和下划线
    let usernameReg = /^[\w\u4E00-\u9FA5]{4,20}$/;


    //登陆事件
    const loginInfo = reactive({
        username: "",
        email: "",
        password: ""
    })

function login() {
  if (!loginInfo.username) {
    return Msg('用户名不能为空', 'error');
  }
  if (!usernameReg.test(loginInfo.username)) {
    return Msg('用户名 2-20位，只能包含汉字/数字/字母和下划线', 'error');
  } else if (!emailReg.test(loginInfo.email)) {
    return Msg('请输入有效的邮箱地址', 'error');
  } else if (!passReg.test(loginInfo.password)) {
    return Msg('至少八个字符，至少一个字母和一个数字', 'error');
  } else {
    store.loginApi(loginInfo).then(res=>{
      Msg("登录成功")
      router.push("/")
    })
    .catch((err) => {
        Msg(err.message || '登录失败，请重试', 'error');
      });
  }
}
  function onkeyup(e){
    if(e.key=="Enter"){
      login()
    }
  }
  onMounted(()=>{
    document.addEventListener("keyup",onkeyup)
  })
  onBeforeMount(()=>{
    document.removeEventListener("keyup",onkeyup)
  })

  //注册事件
  const register = reactive({
  username: '',
  email: '',
  password: '',
});
</script>

<style scoped>
/* 容器布局 */
.container {
  display: flex;
  height: 100vh; /* 占满整个视口高度 */
}

/* 左侧纯色背景 */
.left {
  flex: 1; /* 左侧占据 50% 宽度 */
  background: rgb(165, 211, 229); /* 纯色背景 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  color: white;
  font-size: 24px;
  font-weight: bold;
}
/* 右侧登录界面 */
.right {
  flex: 1; /* 右侧占据 50% 宽度 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  padding: 20px;
  background: #f9f9f9; /* 浅灰色背景 */
}
.right span{
    color: #ccc;
}

/* 输入框样式 */
.item {
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* 登录按钮样式 */
.login-btn {
  width: 80%;
  padding: 10px;
  background-color: rgb(33, 150, 243); /* 按钮背景色 */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.login-btn:hover {
  background-color: rgb(30, 136, 229); /* 按钮悬停效果 */
}

</style>