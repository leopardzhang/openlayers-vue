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
			},

			point: [{
				coordinate: [126.647758, 45.755531],
				show: true,
				icon: require('@assets/img/markerbig_select.png'),
				data: {
					a: 12,
					b: 5
				}
			}, {
				coordinate: [126.647658, 45.755231],
				show: true,
				icon: require('@assets/img/markerbig_select.png'),
				data: {
					a: 10,
					b: 6
				}
			}, {
				coordinate: [126.647358, 45.755931],
				show: true,
				icon: require('@assets/img/markerbig_select.png'),
				data: {
					a: 9,
					b: 2
				}
			}]
		}
	},

	mounted() {
		// setTimeout(() => {
		// 	this.point = [
		// 		{
		// 			coordinate: [126.644358, 45.752931],
		// 			show: true,
		// 			icon: require('@assets/img/markerbig_select.png'),
		// 			data: {
		// 				a: 9,
		// 				b: 2
		// 			}
		// 		}
		// 	]
		// }, 2000)
	},

	methods: {
		setCenter() {
			const zoom = this.inputVal

			this.zoom = zoom
		},

		pointClick(data) {
			console.log(data)
		}
	}
}