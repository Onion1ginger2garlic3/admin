<template>
    <div class="add">
        <div class="content">
            <h2>添加班级</h2>
            <div class="item">
                <label for="enterYear">入学年份</label>
                <input id="enterYear">
            </div>
            <div class="item">
                <label for="level">层次</label>
                <input id="level">
            </div>
            <div class="item">
                <label for="major">专业</label>
                <input id="major">
            </div>
            <div class="item">
                <label for="className">班级名称</label>
                <input id="className">
            </div>
            <div class="item">
                <label for="instructorName">辅导员姓名</label>
                <input id="instructorName">
            </div>
            <button>提交</button>
        </div>
    </div>
</template>

<script>
import {ref,reactive} from 'vue'

</script>

<style scoped>
.add {
  justify-content: center; /* 水平居中 */
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中 */
  height: 100%; /* 设置高度为视口高度 */
}

.content {
  background-color: #fff;
  width: 800px;
  height: 700px;
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
.item select{
  padding: 10px; 
  border: 1px solid #ccc; /* 边框 */
  border-radius: 5px; /* 圆角 */
  font-size: 14px; /* 字体大小 */
  background-color: #f9f9f9; /* 背景颜色 */
  width: 200px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* 过渡效果 */
  margin-right: 100px;
}

/* 输入框聚焦样式 */
.item input:focus,
.item select:focus {
  border-color: #007bff; /* 聚焦时的边框颜色 */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* 聚焦时的阴影 */
  outline: none; /* 去掉默认的聚焦样式 */
}
.add button{
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
.add button:hover {
  background-color: #0056b3; /* 鼠标悬停时的背景颜色 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 鼠标悬停时的阴影 */
}
</style>