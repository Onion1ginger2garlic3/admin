<template>
  <div class="navbar">
  
    <div class="content-left">
      <div class="content-title">

      </div>
      <div class="msg">
        <!--菜单栏导航-->
        <div class="nav">
          <!--菜单栏-->
          <div class="nav-menu">
            <!--循环下面-->
            <div class="item-menu"
            v-for="item in hasChildren"
            :key="item.path"
            >
              <!--主标题-->
              <div class="nav-title" @click="toggleContent(item)">{{ item.label }}</div>
              <!--子标题-->
              <div class="nav-content"
              v-for="subitem in item.children"
              :key="subitem.path"
              v-show="expanded[item.path]"
              >
                <span @click="navTo(subitem.path)">{{ subitem.label }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import { useRouter } from 'vue-router';
const router=useRouter()

const list = ref([
  {
    path: '/home',
    name: 'home',
    label: '首页',
    URL: 'Home',
    children: []
  },
  {
    path: '/user',
    name: 'user',
    label: '用户管理',
    children: [     
      {
        path: '/user/studentList',
        name: 'studentList',
        label: '查看学生列表',
      },
      {
        path: '/user/studentAdd',
        name: 'studentAdd',
        label: '添加学生',
      },
      {
        path: '/user/teacherList',
        name: 'teacherList',
        label: '查看老师列表',
      },
      {
        path: '/user/teacherAdd',
        name: 'teacherAdd',
        label: '添加老师',
      },
      {
        path: '/user/managerList',
        name: 'managerList',
        label: '管理员列表',
      },
    ]
  },
  {
    path: '/term',
    name: 'term',
    label: '学年学期管理',
    children: [     
      {
        path: '/term/termList',
        name: 'termList',
        label: '查看学年学期列表',
      },
      {
        path: '/term/termAdd',
        name: 'termAdd',
        label: '添加班级',
      }
    ]
  },
  {
    path: '/class',
    name: 'class',
    label: '班级管理',
    children: [     
      {
        path: '/class/classList',
        name: 'classList',
        label: '查看班级列表',
      },
      {
        path: '/class/classAdd',
        name: 'classAdd',
        label: '添加班级',
      }
    ]
  }
])

const hasChildren = computed(()=>list.value.filter(item=>item.children))

const expanded = ref({}); // 用于存储每个 nav-title 的展开状态
const navTo=(path)=>{
  router.push(path);
}
// 初始化 expanded 状态
list.value.forEach(item => {
  expanded.value[item.path] = false; // 默认所有 nav-content 都是隐藏的
});
const toggleContent = (item) => {
  if(item.children == 0){
    navTo(item.path)
  }else{  
    expanded.value[item.path] = !expanded.value[item.path];
  }
};




</script>


<style scoped>
/* 主菜单标题样式 */
.nav-title {
  color: #333;
  font-weight: bold;
  padding: 10px 15px;
  cursor: pointer;
  background-color: #f4f4f4;
  margin: 5px 0;
  transition: background-color 0.3s, color 0.3s;
}

.nav-title:hover {
  background-color: #007bff;
  color: white;
}

/* 子菜单内容样式 */
.nav-content {
  margin-left: 20px;
  padding: 5px 10px;
  background-color: #f9f9f9;
  border-left: 3px solid #007bff;
  transition: all 0.3s;
}

.nav-content span {
  display: block;
  color: #555;
  padding: 5px 0;
  cursor: pointer;
}

.nav-content span:hover {
  color: #007bff;
  text-decoration: underline;
}
</style>