import router from '@/router'
import { getToken } from '@/composables/auth';
import { useTestStore } from '@/store/index'; // 引入 Pinia Store
import { Msg } from '@/utils/msg';

//全局前置守卫
router.beforeEach(async(to, from, next)=>{
    // const token = getToken()
    // const store = useTestStore()
    // //没登陆成功
    // if(!token && to.path!="/login"){
    //     Msg("还没登录请先登录", "error")
    //     return next({path: "/login"})
    // }
    // if(token && to.path=="/login"){
    //     Msg("请勿重复登录", "error")
    //     return next({path: from.path ? from.path:"/"})
    // }
    // //如果登录成功了
    // if(token){
    //     await store.getinfo()
    // }
    
    //设置页面标题
    let title = (to.meta.title ? to.meta.title : "") + "-教务系统"
    document.title = title
    next();
})