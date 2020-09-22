import LayerMap from '../../components/LayerMap/index.vue'
export default {
	components: {
		LayerMap
	},

	data() {
		return {
			center: [126.647758, 45.755531],
			zoom: 16,

			polygon: [
				[
					[126.647758, 45.755531],
					[125.647758, 45.755531],
					[125.647758, 46.755531],
					[126.647758, 46.755531]
				],
				[
					[127.647758, 47.755531],
					[126.647758, 47.755531],
					[126.647758, 48.755531],
					[127.647758, 48.755531]
				]
			],

			polygonStyle: {
				stroke: {
					color: 'purple',
					width: 2
				},

				fill: {
					color: 'rgba(255, 255, 255, 0.2)'
				}
			}
		}
	},

	methods: {
		setCenter() {
			const zoom = this.inputVal

			this.zoom = zoom
		}
	}
}