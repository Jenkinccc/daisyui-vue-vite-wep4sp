import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

// 1.引入组件
import about from "./view/about/index.vue";
import blog from "./view/blog/articles.vue";
import project from "./view/project/index.vue";
import jonrnal from "./view/Jonrnal/index.vue";
import comment from "./view/Comment/index.vue";


// 2.配置路由映射


//创建路由示例
const routes = [
    // 路由懒加载示例
    // {
    //     path: '/路由地址',
    //     name: '路由记录独一无二的名称',
    //     component: () => import("文件路径/文件名.vue")
    // },

    {
        path:'/',
        component:about  
    },
    {
        path:'/project',
        component:project  
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/blog',
        component: blog
    },
    {
        path: '/jonrnal',
        component: jonrnal
    },
    {
        path: '/comment',
        component: comment
    }
]

// 3.创建路由对象
const router = createRouter({
    // 指定模式
    /**
     * createWebHashHistory 带 # 号
     * createWebHistory 不带 # 号
     */
    history:createWebHistory(),
    routes:routes
})

// 导出路由实例
export default router
