<template>
    <div class="head">
      <span>用户名：</span>
      <input type="text">
      <button>查询</button>
    </div>
    <div class="container">
      <table class="list">
        <thead>
          <tr>
            <th>id</th>
            <th>入学年份</th>
            <th>层次</th>
            <th>专业</th>
            <th>班级名称</th>
            <th>辅导员姓名</th>
            <th>班级人数</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="classItem in classes" :key="classItem.id">
            <td>{{ classItem.id }}</td>
            <td>{{ classItem.enterYear }}</td>
            <td>{{ classItem.level }}</td>
            <td>{{ classItem.major }}</td>
            <td>{{ classItem.className }}</td>
            <td>{{ classItem.instructorName }}</td>
            <td>{{ classItem.classNumber }}</td>
            <td>
              <button @click="editClass(classItem)">编辑</button>
              <button @click="deleteClass(classItem)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--编辑班级页面-->
    <div v-if="isEditVisible" class="modal">
        <div class="modal-content">
            <form>
                <button  class="closeBtn" @click="isEditVisible = false">x</button>
                <div class="edit">
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
                    <button @click="saveClass">提交</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
  import {ref, reactive} from 'vue'
  const classes = ref([
  {
    id: 1,
    enterYear: '2023',
    level: '本科',
    major: '计算机科学与技术',
    className: '计算机1班',
    instructorName: '张老师',
    classNumber: 30,
  },
  {
    id: 2,
    enterYear: '2022',
    level: '本科',
    major: '软件工程',
    className: '软件2班',
    instructorName: '李老师',
    classNumber: 28,
  },
  ])
  let isEditVisible = ref(false)
  const editClass = (classItem) => {
    isEditVisible.value = true
  }
  const deleteClass = (classItem) => {

  }
  const saveClass = () => {
    isEditVisible = false
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
/* 编辑弹窗样式 */

/* 表单容器样式 */
.edit {
  max-width: 800px; /* 限制表单宽度 */
  margin: 20px; /* 居中 */
  padding: 30px; /* 内边距 */
  background-color: #ffffff; /* 背景颜色 */
  border-radius: 10px; /* 圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影 */
  border: 1px solid #ddd; /* 边框 */
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
  width: 400px;
  margin-left: 0;
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
  width: 100px;
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

/* 按钮样式 */
.edit button,.content-button button{
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
.edit button:hover {
  background-color: #0056b3; /* 鼠标悬停时的背景颜色 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 鼠标悬停时的阴影 */
}

/* 按钮禁用样式 */
.edit button:disabled {
  background-color: #ccc; /* 禁用时的背景颜色 */
  cursor: not-allowed; /* 禁用时的鼠标样式 */
}
.closeBtn {
  position: absolute; /* 绝对定位 */
  right: 400px; /* 距离弹窗右侧的距离 */
  top: 100px; /* 距离弹窗顶部的距离 */
  background: transparent; /* 透明背景 */
  border: none; /* 去掉边框 */
  font-size: 20px; /* 字体大小 */
  color: white; /* 按钮颜色 */
  cursor: pointer; /* 鼠标悬停时显示手型 */
  transition: color 0.3s ease; /* 添加过渡效果 */
  outline: none; /* 去掉按下时的默认边框效果 */
}
.closeBtn:hover {
  background-color: rgba(0, 123, 255, 0.2); /* 按下时的背景颜色 */
  color: #003f7f; /* 按下时的文字颜色 */
}

/* 弹窗样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.del-content{
  width: 300px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px; /* 圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影 */
}
.content-text{
  font-weight: bolder;
  margin-top: 30px;
}
.content-button button{
  margin-top: 60px;
  margin-right: 20px;
  margin-left: 20px;
}


</style>