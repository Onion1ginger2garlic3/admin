<script setup>
  import AppHeader from "@/components/AppHeader.vue"
  import AppNavbar from "@/components/AppNavbar.vue"
  
</script>

<template>
  <div>
    
      <div class="header">
        <app-header></app-header>
      </div>
      <div class="navbar">
        <app-navbar></app-navbar>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
  </div>
</template>

<style scoped>
  /* 头部样式 */
  .header {
    position: absolute;
    line-height: 50px;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: #575e6b;
  }
  
  /* 左侧样式 */
  .navbar {
    position: absolute;
    width: 230px;
    top: 50px;  /* 距离上面50像素 */
    left: 0px;
    bottom: 0px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    background-color: white;
  }
  
  /* 主区域 */
  .main {
    position: absolute;
    top: 50px;
    left: 230px;
    bottom: 0px;
    right: 0px;  /* 距离右边0像素 */
    padding: 10px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    /* background-color: red; */
  }

  </style>