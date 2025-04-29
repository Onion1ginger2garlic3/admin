
<template>
    <div class="not-found">
      <h1>404</h1>
      <p>抱歉，您访问的页面不存在。</p>
      <router-link to="/" class="back-home">返回首页</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  
  .not-found h1 {
    font-size: 6rem;
    margin: 0;
    color: #ff6b6b;
  }
  
  .not-found p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  
  .back-home {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .back-home:hover {
    background-color: #0056b3;
  }
  </style>