import LayerMap from '../../components/LayerMap/index.vue'
import hkTV from '../../components/hkTV'
import videoTV from '../../components/videoTV'

export default {
	components: {
		LayerMap,
		hkTV,
		videoTV
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
					color: 'rgba(255, 255, 255, 0.4)'
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
			}],

			drawPointAble: false,
			drawPolygonAble: false,
			showPopup: true
		}
	},

	mounted() {
	},

	methods: {
		setCenter() {
			const zoom = this.inputVal

			this.zoom = zoom
		},

		pointClick(data) {
			console.log(data)
		},

		drawPoint(data) {
			console.log(data)
		},

		drawPolyon(data) {
			console.log(data)
		},

		popupShow(data) {
			console.log(data)
		}
	}
}