import LayerMap from '../../components/LayerMap/index.vue'
export default {
	components: {
		LayerMap
	},

	data() {
		return {
			center: [126.647758, 45.755531],
			zoom: 16,

			inputVal: ''
		}
	},

	methods: {
		setCenter() {
			const zoom = this.inputVal

			this.zoom = zoom
		}
	}
}