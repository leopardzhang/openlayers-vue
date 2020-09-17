import Vue from 'vue'
import Router from 'vue-router'
import $app from '@/pages/$app/index.vue'


Vue.use(Router);

export default new Router({
	routes: [{
		path: '/$app',
		name: '$app',
		component: $app,
		children: [
			{
				path: '/stroke',
				name: 'stroke',
				component(resolve) {
					require.ensure(['@/pages/stroke/index.vue'], () => {
						resolve(require('@/pages/stroke/index.vue'));
					});
				}
			},
			{
				path: '/point',
				name: 'point',
				component(resolve) {
					require.ensure(['@/pages/point/index.vue'], () => {
						resolve(require('@/pages/point/index.vue'));
					});
				}
			},
			{
				path: '/showPoint',
				name: 'showPoint',
				component(resolve) {
					require.ensure(['@/pages/showPoint/index.vue'], () => {
						resolve(require('@/pages/showPoint/index.vue'));
					});
				}
			},
			{
				path: '/showLine',
				name: 'showLine',
				component(resolve) {
					require.ensure(['@/pages/showLine/index.vue'], () => {
						resolve(require('@/pages/showLine/index.vue'));
					});
				}
			},
			{
				path: '/showPopup',
				name: 'showPopup',
				component(resolve) {
					require.ensure(['@/pages/showPopup/index.vue'], () => {
						resolve(require('@/pages/showPopup/index.vue'));
					});
				}
			}
		]
	}, {
		path: '/*',
		redirect: '/stroke'
	}]
})