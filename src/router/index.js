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
				path: '/showPoint',
				name: 'showPoint',
				component(resolve) {
					require.ensure(['@/pages/showPoint/index.vue'], () => {
						resolve(require('@/pages/showPoint/index.vue'));
					});
				}
			},
			{
				path: '/showStroke',
				name: 'showStroke',
				component(resolve) {
					require.ensure(['@/pages/showStroke/index.vue'], () => {
						resolve(require('@/pages/showStroke/index.vue'));
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