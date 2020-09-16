import $apiConf from '@/config'

const state = {
	
}

const SET_USERNAME = 'SET_USERNAME'

const mutations = {
	[SET_USERNAME](state, mutation) {
		state.userInfo = mutation.payload
	}
}

const actions = {
	async testAjax({
		commit,
		dispatch,
		state
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.TEST_WITH_URL_PARAMS,
			urlParams: {
				id: 10,
				name: 'John'
			},
			params: JSON.stringify({
				a: 12,
				b: 5
			})
		})

		commit({
			type: 'SET_USERNAME',
			payload: res
		})
	}
}

const getters = {
	getUserName(state) {
		return state.userInfo.userName
	},

	navigation(state) {
		return state.navigation
	}
}

export default {
	state,
	mutations,
	actions,
	getters
};