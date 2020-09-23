import * as ol from 'ol'
import {
	Tile,
	Vector
} from 'ol/layer'
import {
	XYZ
} from 'ol/source'
import VectorSource from 'ol/source/Vector'
import {
	Select,
	Draw
} from 'ol/interaction'
import {
	transform
} from 'ol/proj'
import {
	Polygon,
	Point
} from 'ol/geom'
import {
	Style,
	Stroke,
	Fill,
	Icon
} from 'ol/style'

export default {
	name: 'LayerMap',

	props: {
		center: Array,				//中心位置
		zoom: Number,				//缩放比
		polygon: Array,				//网格
		polygonStyle: Object,		//网格的样式
		point: Array,				//点位
		drawPointAble: Boolean,		//能否画点
		drawPolygonAble: Boolean,	//能否画网格
	},

	data() {
		return {
			map: null,
			basePointLayer: null,
			baseDrawPonitLayer: null,
			baseDrawPolygon: null
		}
	},

	mounted() {
		this.map = new ol.Map({
			target: 'map',
			layers: [
				new Tile({
					source: new XYZ({
						url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					})
				})
			],
			view: new ol.View({
				center: [0, 0],
				zoom: this.zoom || 12
			})
		});

		this.setCenter(this.center)
		if (this.polygon) {
			this.drawPolygon(this.polygonStyle)
			this.transformPolygon(this.polygon)
		}

		if (this.point.length) {
			this.drawPoint()
		}

		if (this.drawPointAble) {
			this.setPointAble()
		}

		if (this.drawPolygonAble) {
			this.setPolygonAble()
		}
	},

	methods: {
		/**
		 * 设置中心位置
		 * @param {*} map 
		 */
		setCenter(center) {
			if (!center) {
				throw new Error('center is required')
			}
			const coordinate = transform(center, "EPSG:4326", "EPSG:3857")

			this.map.getView().setCenter(coordinate)
		},

		/**
		 * 设置缩放比
		 * @param {缩放比} zoom 
		 */
		setZoom(zoom = 12) {
			this.map.getView().setZoom(zoom)
		},

		/**
		 * 
		 * @param {样式} polygonStyle 
		 */
		drawPolygon(polygonStyle = { stroke: {}, fill: {} }) {
			const {
				stroke: {
					color: strokeColor = '#009933',
					width = 3
				},
				fill: {
					color: fillColor = 'rgba(255, 255, 255, 0.2)'
				}
			} = polygonStyle

			const polygonLayer = new Vector({
				source: new VectorSource()
			})

			const polygon = new ol.Feature({
				geometry: new Polygon(this.transformPolygon(this.polygon))
			})

			this.map.addLayer(polygonLayer)

			polygon.setStyle(new Style({
				stroke: new Stroke({
					color: strokeColor,
					width: width
				}),

				fill: new Fill({
					color: fillColor
				})
			}));

			polygonLayer.getSource().addFeature(polygon)
		},

		/**
		 *	绘制点位
		 */
		drawPoint() {
			const selectClick = new Select()

			if (!this.basePointLayer) {
				this.basePointLayer = new Vector({
					source: new VectorSource()
				});

				this.map.addLayer(this.basePointLayer)
			}

			this.basePointLayer.getSource().clear()

			for (const item of this.point) {
				if (item.show) {
					const point = new ol.Feature({
						geometry: new Point(this.transformCoordinate(item.coordinate)),
						data: item.data
					})

					point.setStyle(new Style({
						image: new Icon({
							src: item.icon
						})
					}))
					this.basePointLayer.getSource().addFeature(point);
				}

			}

			this.map.addInteraction(selectClick)

			selectClick.on('select', e => {
				if (e.target.getFeatures().getArray().length) {
					const {
						data,
						geometry: {
							flatCoordinates: coordinate
						}
					} = e.target.getFeatures().getArray()[0].values_

					if (!this.drawPointAble) {
						this.$emit('pointClick', {
							coordinate: this.reverseCoordinate(coordinate),
							data
						})
					}
				}
			})
		},

		/**
		 * 能否绘制点位
		 */
		setPointAble() {
			this.baseDrawPonitLayer = new Vector({
				source: new VectorSource()
			})

			this.map.addLayer(this.baseDrawPonitLayer)
			this.map.addEventListener('click', (e) => {
				const point = new ol.Feature({
					geometry: new Point(e.coordinate)
				})

				this.baseDrawPonitLayer.getSource().clear()
				point.setStyle(new Style({
					image: new Icon({
						src: require('@assets/img/markerbig_select.png')
					})
				}))

				this.baseDrawPonitLayer.getSource().addFeature(point);

				this.$emit('drawPoint', {
					coordinate: this.reverseCoordinate(e.coordinate)
				})
			})
		},

		/**
		 * 画网格的能力
		 */
		setPolygonAble() {
			this.baseDrawPolygon = new Vector({
				source: new VectorSource()
			});
			this.map.addLayer(this.baseDrawPolygon);

			const polygonDraw = new Draw({
				type: 'MultiPolygon',
				source: this.baseDrawPolygon.getSource(),
				style: new Style({
					stroke: new Stroke({
						color: '#009933',
						size: 1
					}),

					fill: new Fill({
						color: 'rgba(255, 255, 255, 0.2)'
					})
				})
			});

			polygonDraw.on('drawend', (event) => {
				this.$emit('drawPolyon', {
					coordinate: event.feature.getGeometry().getCoordinates()
				})
			});

			// this.map.on('singleclick', function (event) {
			// 	console.log(event);
			// });
			this.map.addInteraction(polygonDraw);
		},

		/**
		 * 转换坐标系
		 * @param {高德坐标} input 
		 */
		transformCoordinate(input) {
			return transform(input, "EPSG:4326", "EPSG:3857")
		},

		/**
		 * 反向转换坐标系
		 * @param {基本坐标系} input 
		 */
		reverseCoordinate(input) {
			return transform(input, "EPSG:3857", "EPSG:4326")
		},

		/**
		 * 转换网格的坐标
		 * @param {高德网格多维数组} input 
		 */
		transformPolygon(input) {
			const outPut = input.map((item) => {
				if (Array.isArray(item) && Array.isArray(item[0])) {
					return this.transformPolygon(item)
				} else {
					return this.transformCoordinate(item)
				}
			})

			return outPut
		}
	},

	watch: {
		center(center) {
			this.setCenter(center)
		},

		zoom(zoom) {
			this.setZoom(zoom)
		},

		point: {
			handler(points) {
				this.drawPoint(points)
			},
			deep: true
		}
	},
}
