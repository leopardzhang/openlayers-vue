export default {
	TEST_POST: {
		name: 'TEST_POST',

		proxy: {
			url: 'demo',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	},

	TEST_GET: {
		name: 'TEST_GET',

		proxy: {
			url: 'demo/:id/:name',
			method: 'GET'
		}
	},

	/**
	 * In this way, we need to add urlParams in $apiCall.
	 * And the name of the urlParams mast have a same one in the url with ':'
	 */
	TEST_WITH_URL_PARAMS: {
		name: 'TEST_WITH_URL_PARAMS',

		proxy: {
			url: 'demo/:id/:name',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	}
}