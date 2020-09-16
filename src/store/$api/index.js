import axios from 'axios'
import baseURL from '@/config/baseUrl'

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/json'

const state = {

}

const mutations = {

}

const actions = {
	async $apiCall({
		commit,
		dispatch,
		state
	}, {
		config,
		params = {},
		urlParams = {}
	}) {
		let url = config.proxy.url
		let proxy = config.proxy
		const dataType = {
			POST: 'data',
			GET: 'params',
			DELETE: 'params',
			PUT: 'data'
		}

		Object.keys(urlParams).forEach(k => {
			const reg = new RegExp(`:${k}`);

			url = url.replace(reg, urlParams[k])
		})
		proxy[dataType[proxy.method]] = params;

		const response = await axios(Object.assign({}, proxy, {
			url
		}));

		if (response.status !== 200) {
			throw Error('服务器异常');
		}

		return response.data;
	}
}

const getters = {

}

export default {
	state,
	mutations,
	actions,
	getters
};