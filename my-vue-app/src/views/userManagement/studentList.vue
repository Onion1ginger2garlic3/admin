<template>
    <div class="head">
      <span>教师名：</span>
      <input type="text">
      <button>查询</button>
    </div>
    <div class="container">
      <table class="list">
        <thead>
          <tr>
            <th>id</th>
            <th>用户名</th>
            <th>真实姓名</th>
            <th>学级</th>
            <th>性别</th>
            <th>手机号</th>
            <th>创建时间</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.username }}</td>
            <td>{{ student.realName }}</td>
            <td>{{ student.grade }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.phone }}</td>
            <td>{{ student.createdAt }}</td>
            <td>{{ student.status }}</td>
            <td>
              <button>禁用</button>
              <button class="editBtn" @click="editStudent(student)">编辑</button>
              <button>日志</button>
              <button class="delet" @click="deleteStudent(student)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--编辑学生页面-->
    <div v-if="isEditVisible" class="modal">
      <div class="modal-content">
        <form>
          <button  class="closeBtn" @click="isEditVisible = false">x</button>
          <div class="edit" >
            <div class="item">
              <label for="username">用户名：</label>
              <input id="username" v-model="FormData.username">
            </div>
            <div class="item">
              <label for="password">密码：</label>
              <input id="password" v-model="FormData.password">
            </div>
            <div class="item">
              <label for="realname">真实姓名：</label>
              <input id="realname" v-model="FormData.realName">
            </div>

            <div class="item">
              <label for="age">年龄：</label>
              <input id="age" v-model="FormData.age">
            </div>
            
            <div class="item">
              <label for="gender">性别：</label>
              <select id="gender" v-model="FormData.gender">
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
            </div>

            <div class="item">
              <label for="birthdate">出生日期：</label>
              <input id="birthdate" type="date" v-model="FormData.birthdate" >
            </div>

            <div class="item">
              <label for="phone">手机：</label>
              <input id="phone" v-model="FormData.phone">
            </div>

            <div class="item">
              <label for="grade">选择年级：</label>
              <select id="grade" v-model="FormData.grade">
                <option v-for="grade in grades" :key="grade" :value="grade">
                  {{ grade }}
                </option>
              </select>
            </div>
      
            <div class="item">
              <label for="status">状态：</label>
              <select id="status" v-model="FormData.status">
              <option value="启用">启用</option>
              <option value="禁用">禁用</option>
            </select>
            </div>
            <button @click="saveStudent" type="submit">提交</button>
          </div>
        </form>
    </div>
  </div>
  <!--删除-->
  <div v-if="isDeleteVisible" class="modal">
      <div class="del-content">
        <div class="content-text">
          <div>是否删除</div>
        </div>
        <div class="content-button">
          <button @click="saveStudent" type="submit">确定</button>
          <button @click="isDeleteVisible=false">取消</button>
        </div>
    </div>
  </div>
  </template>
  <script setup>
  import {ref, reactive} from 'vue'
  const grades = ref(['一年级','二年级','三年级'])
  const students = ref([
  {
    id: 1,
    username: 'zhangsan',
    realName: '张三',
    grade: '一年级',
    gender: '男',
    phone: '12345678901',
    createdAt: '2023-01-01',
    status: '正常',
  },
  {
    id: 2,
    username: 'lisi',
    realName: '李四',
    grade: '二年级',
    gender: '女',
    phone: '98765432101',
    createdAt: '2023-02-01',
    status: '正常',
  },
  ])
//编辑
//设置弹窗
const isEditVisible = ref(false)
const isDeleteVisible = ref(false)

const FormData = reactive({
    id: null,
    username: "", // 用户名
    password: "",//密码
    realName: "", // 姓名
    age: "", // 年龄
    gender: "", // 性别
    birthdate: "",//出生日期
    phone: "",//手机
    grade: "",//年级
    status: ""//状态
});
//实现删除功能
const deleteStudent = (data) => {
  data=null
  isDeleteVisible.value = true
}
//实现编辑功能
const editStudent = (data) => {
  FormData.id=data.id,
  FormData.username=data.username,
  FormData.password=data.password,
  FormData.realName=data.realName,
  FormData.age= data.age,
  FormData.gender= data.gender, 
  FormData.birthdate= data.birthdate,
  FormData.phone= data.phone,
  FormData.grade=data.grade,
  FormData.status=data.status,
  isEditVisible.value=true;
}
const saveStudent = () => {
  const index = students.value.findIndex((student) => student.id == FormData.id);
  if (index !== -1) {
    // 更新对应学生的数据
    students.value[index] = { ...students.value[index], ...FormData };
  }
  isEditVisible.value = false; // 关闭弹窗
  isDeleteVisible.value = false;
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
  width: 500px;
  margin-right: 100px;
  margin-top: 0px;
  margin-left: 0;
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