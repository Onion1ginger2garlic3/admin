<template>
    <div class="head">
      <span>用户名：</span>
      <input type="text">
      <button>查询</button>
      <button @click="addManager">添加</button>
    </div>
    <div class="container">
      <table class="list">
        <List
        :names="['账号', '姓名', '操作']"
        :items="managers"
        ></List>
      </table>
    </div>
    <!-- 添加学生页面 -->
     <div v-if="isAddManager" class="modal">
        <div class="modal-content">
            <h2>添加管理员</h2>
            <div class="item">
                <label for="userName">账号：</label>
                <input id="userName">
            </div>
            <div class="item">
                <label for="realName">真实姓名：</label>
                <input id="realName">
            </div>
            <div>
                <button type="submit" @click="saveManager">提交</button>
            </div>
        </div>
     </div>
</template>

<script setup>
import List from '@/components/ofenComponents/List.vue'
import {ref,reactive} from 'vue'
const isAddManager = ref(false)
const managers = ref([
 {
    userName: "",
    realName: "",
    password: ""
 }
])
const addManager = ()=>{
    isAddManager.value = true
}
const deleteManager = (manager)=>{

}
const resetPassword = (manager)=>{

}
const saveManager = ()=>{
    isAddManager.value = false
}

</script>

<style scoped>
span {
  display: inline-block; /* 确保 span 是行内块元素 */
  margin-left: 0; /* 去掉可能的外边距 */
}
.container {
  margin: 20px 0; /* 上下间距 */
  padding: 10px; /* 内边距 */
  background-color: #f9f9f9; /* 背景颜色 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 阴影 */
}

/* list样式 */
.list {
  width: 100%; /* 表格宽度占满容器 */
  border-collapse: collapse; /* 合并单元格边框 */
}
.list button{
  background-color: white;
  margin: 5px;
  border: 1px solid #ddd; /* 表头边框 */
}
.list button:hover {
  background: rgb(158, 154, 154);
}
.list th,td{
  padding: 10px; /* 表头内边距 */
  text-align: center; /* 表头文字左对齐 */
  border: 1px solid #ddd; /* 表头边框 */
}
.head{

  text-align: left; /* 让文字左对齐 */
  margin-left: 0; /* 去掉可能的外边距 */
  background-color: #f9f9f9; /* 背景颜色 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 阴影 */

}
.head span,input{
  margin: 20px;
}
.head button{
  margin: 5px;
  background: rgb(39, 159, 206);
  color: #f9f9f9;
  border: none; /* 去掉默认边框 */
  padding: 10px 15px; /* 调整按钮内边距 */
  border-radius: 5px; /* 添加圆角 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 添加阴影 */
  transition: all 0.3s ease; /* 添加过渡效果 */
}
.head button:hover {
  background: rgb(19, 89, 118); /* 鼠标悬停时改变背景颜色 */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* 鼠标悬停时增强阴影 */
}
.modal {
  justify-content: center; /* 水平居中 */
  display: flex; /* 使用 Flexbox 布局 */
  align-items: flex-start; /* 垂直居中 */
  height: 100%; /* 设置高度为视口高度 */
}
.modal-content {
  background-color: #fff;
  width: 800px;
  height: 300px;
  padding: 40px; /* 添加内边距 */
  border-radius: 10px; /* 圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}
.content span{
  margin-bottom: 30px;
}
  /* 表单项样式 */
.item {
  margin-bottom: 20px; /* 每个表单项之间的间距 */
  display: flex; /* 使用 flex 布局 */
  align-items: center; /* 垂直居中 */
}

/* 标签样式 */
.item label {
  width: 120px; /* 固定宽度 */
  font-weight: bold; /* 加粗文字 */
  color: #333; /* 字体颜色 */
  margin-right: 5px; /* 与输入框的间距 */
}

/* 输入框样式 */
.item input{
  padding: 10px; 
  border: 1px solid #ccc; /* 边框 */
  border-radius: 5px; /* 圆角 */
  font-size: 14px; /* 字体大小 */
  background-color: #f9f9f9; /* 背景颜色 */
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* 过渡效果 */
  width: 500px;
  margin-right: 100px;
  margin-top: 0px;
  margin-bottom: 0px;
}
/* 输入框聚焦样式 */
.item input:focus,
.item select:focus {
  border-color: #007bff; /* 聚焦时的边框颜色 */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* 聚焦时的阴影 */
  outline: none; /* 去掉默认的聚焦样式 */
}
.modal button{
  margin-top: 2%;
  width: 30%; /* 按钮宽度占满 */
  padding: 10px 15px; /* 内边距 */
  background-color: #007bff; /* 按钮背景颜色 */
  color: #fff; /* 按钮文字颜色 */
  border: none; /* 去掉边框 */
  border-radius: 5px; /* 圆角 */
  font-size: 16px; /* 字体大小 */
  cursor: pointer; /* 鼠标悬停时显示手型 */
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* 过渡效果 */
}

/* 按钮悬停样式 */
.modal button:hover {
  background-color: #0056b3; /* 鼠标悬停时的背景颜色 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 鼠标悬停时的阴影 */
}

</style>