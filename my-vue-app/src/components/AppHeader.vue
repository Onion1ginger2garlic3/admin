<script setup>
import { inject } from 'vue';

// 获取 showDialog 方法
const showDialog = inject('showDialog');

function logout() {
  showDialog('是否要退出登录', '确认后将退出当前账号')
    .then(() => {
      console.log('确认退出登录');
      // 执行退出登录的逻辑
    })
    .catch(() => {
      console.log('取消退出登录');
    });
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
    </div>
    <div class="info">
      <div>
        <button @click="logout">退出登录</button>
      </div>
    </div>
  </div>
</template>
  
  
  <style scoped>
  .header{
    color: aliceblue;
  }
  .bread{
    margin-left: 50px;
    display: flex;
    width: 600px;
    align-items: center;
    height: 50px;
    line-height: 50px;
  }
  .item{
    margin-left: 70px;
  }
  .bread a{
    text-decoration: none;
    color: white;
    padding: 0 10px;
  }
  .bread a+a::before{
    content: '/';
    padding-right: 10px;
    color: white;
  }
  .bread a:hover{
    color: blue;
  }
  .title{
  color: white;
  font-weight: bolder;
  font-size: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加文字阴影 */
}
  </style>