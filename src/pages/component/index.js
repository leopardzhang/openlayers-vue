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
			const center = this.inputVal.split(',')

			if (center.length == 2) {
				this.center = [center[0].trim(), center[1].trim()]
			}
		}
	}
}