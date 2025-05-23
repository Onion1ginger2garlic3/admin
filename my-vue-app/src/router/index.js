
import {createRouter, createWebHashHistory} from 'vue-router'
import Main from '../views/Main.vue'
import Notfound from '../views/404.vue'
import Login from "@/views/Login.vue"
const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        redirect: "/home",
        children: [
            {
                path: '/home',
                name: 'home',
                component: ()=>import('../views/Home.vue'),
                meta:{
                    title:"后台首页"
                }
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/User.vue'), // 添加父级组件
                children: [
                    {
                        path:'studentList',
                        name:'studentList',
                        component: ()=>import('../views/userManagement/studentList.vue'),
                        meta:{
                            title:"学生列表"
                        }
                    },
                    {
                        path:'studentAdd',
                        name:'studentAdd',
                        component: ()=>import('../views/userManagement/studentAdd.vue'),
                        meta:{
                            title:"添加学生"
                        }
                    },
                    {
                        path:'teacherList',
                        name:'teacherList',
                        component: ()=>import('../views/userManagement/teacherList.vue'),
                        meta:{
                            title:"老师列表"
                        }
                    },
                    {
                        path:'teacherAdd',
                        name:'teacherAdd',
                        component: ()=>import('../views/userManagement/teacherAdd.vue'),
                        meta:{
                            title:"添加老师"
                        }
                    },
                    {
                        path:'managerList',
                        name:'managerList',
                        component: ()=>import('../views/userManagement/managerList.vue'),
                        meta:{
                            title:"管理员列表"
                        }
                    },
                ]
            },
            {
                path: '/term',
                name: 'term',
                children: [
                    {
                        path:'/term/termList',
                        name:'termList',
                        component: ()=>import('../views/termManagement/termList.vue'),
                        meta:{
                            title:"学期列表"
                        }
                    },
                    {
                        path:'/term/termAdd',
                        name:'termAdd',
                        component: ()=>import('../views/termManagement/termAdd.vue'),
                        meta:{
                            title:"添加学期"
                        }
                    }
                ]
            },
            {
                path: '/class',
                name: 'class',
                children: [
                    {
                        path:'/class/classList',
                        name:'classList',
                        component: ()=>import('../views/classManagement/classList.vue')
                    },
                    {
                        path:'/class/classAdd',
                        name:'classAdd',
                        component: ()=>import('../views/classManagement/classAdd.vue')
                    }
                ]
            },
            {
                path: '/courseCategory',
                name: 'courseCategory',
                children: [
                    {
                        path:'/courseCategory/courseCategoryList',
                        name:'courseCategoryList',
                        component: ()=>import('../views/courseCategoryManagement/courseCategoryList.vue')
                    },
                    {
                        path:'/courseCategory/courseCategoryAdd',
                        name:'courseCategoryAdd',
                        component: ()=>import('../views/courseCategoryManagement/courseCategoryAdd.vue')
                    }
                ]
            },
            {
                path: '/course',
                name: 'course',
                children: [
                    {
                        path:'/course/courseList',
                        name:'courseList',
                        component: ()=>import('../views/courseManagement/courseList.vue')
                    },
                    {
                        path:'/course/courseAdd',
                        name:'courseAdd',
                        component: ()=>import('../views/courseManagement/courseAdd.vue')
                    }
                ]
            },
            // {
            //     path: '/teaching',
            //     name: 'teaching',
            //     children: [
            //         {
            //             path:'/teaching/teachingList',
            //             name:'teachingList',
            //             component: ()=>import('../views/teachingProgram/teachingList.vue')
            //         },
            //         {
            //             path:'/teaching/teachingAdd',
            //             name:'teachingAdd',
            //             component: ()=>import('../views/teachingProgram/teachingAdd.vue')
            //         }
            //     ]
            // },
            // {
            //     path: '/grades',
            //     name: 'grades',
            //     children: [
            //         {
            //             path:'/grades/gradesList',
            //             name:'gradesList',
            //             component: ()=>import('../views/gradesManagement/gradesList.vue')
            //         },
            //         {
            //             path:'/grades/gradesAdd',
            //             name:'gradesAdd',
            //             component: ()=>import('../views/gradesManagement/gradesAdd.vue')
            //         }
            //     ]
            // },
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta:{
            title:"登录"
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name:  'notfound',
        component: Notfound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router