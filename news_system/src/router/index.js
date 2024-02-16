import {
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from 'vue-router';
import { useSessionStorageStore } from '@/state';
// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import swiperPage from '../components/swiperPage.vue';
import home from '@/views/home.vue';
import login from '@/views/login.vue';
import register from '@/views/register.vue';
import mime from '@/views/mime.vue';
// 2. 定义路由配置
const routes = [
	{ path: '/', redirect: '/swiperPage' },
	{ path: '/swiperPage', name: 'swiperPage', component: swiperPage },
	{ path: '/home', name: 'home', component: home },
	{ path: '/login', name: 'login', component: login },
	{ path: '/register', name: 'register', component: register },
	{ path: '/mine', name: 'mine', component: mime },
];

// 3. 创建路由实例
const router = createRouter({
	// 4. 采用hash 模式
	history: createWebHashHistory(),
	// 采用 history 模式
	// history: createWebHistory(),
	routes, // short for `routes: routes`
});
router.beforeEach((to, from, next) => {
	// 判断是否跳转到 '/'
	if (to.path === '/home') {
		// 根据你的条件进行跳转判断
		console.log(sessionStorage.getItem('user'));
		if (sessionStorage.getItem('user')) {
			// 符合条件跳转到指定路由
			next();
		} else {
			// 否则继续跳转到 '/'
			next('/login');
		}
	} else {
		// 其他路由直接放行
		next();
	}
});
export default router;
