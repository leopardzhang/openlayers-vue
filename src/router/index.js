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
				path: '/polygon',
				name: 'polygon',
				component(resolve) {
					require.ensure(['@/pages/polygon/index.vue'], () => {
						resolve(require('@/pages/polygon/index.vue'));
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
				path: '/showPolygon',
				name: 'showPolygon',
				component(resolve) {
					require.ensure(['@/pages/showPolygon/index.vue'], () => {
						resolve(require('@/pages/showPolygon/index.vue'));
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
		redirect: '/polygon'
	}]
})