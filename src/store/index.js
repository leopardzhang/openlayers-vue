import Vue from 'vue'
import Vuex from 'vuex'

import $api from './$api'
import demo from './demo'

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		$api,
		demo
	}
});

export default store;