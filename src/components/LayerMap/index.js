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
		center: Array,
		zoom: Number
	},

	data() {
		return {
			map: null
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
				zoom: 12
			})
		});

		this.setCenter()
		this.drawPolygon()
	},

	methods: {

		/**
		 * 设置中心位置
		 * @param {*} map 
		 */
		setCenter(center = this.center) {
			const coordinate = transform(center, "EPSG:4326", "EPSG:3857")

			this.map.getView().setCenter(coordinate)
		},

		/**
		 * 
		 * @param {缩放比} zoom 
		 */
		setZoom(zoom = this.zoom) {
			this.map.getView().setZoom(zoom)
		},

		/**
		 * 展示网格
		 */
		drawPolygon() {
			const polygonLayer = new Vector({
				source: new VectorSource()
			});
			this.map.addLayer(polygonLayer);

			const polygon = new ol.Feature({
				geometry: new Polygon([[[14105726.687862298, 5743647.178997583], [14098465.170175206, 5738602.335130761], [14099267.7589722, 5730117.824991107], [14110351.12807355, 5727404.310486983], [14124453.759792166, 5734589.391145789]]])
			});

			polygon.setStyle(new Style({
				stroke: new Stroke({
					color: '#009933',
					width: 3
				}),

				fill: new Fill({
					color: 'rgba(255, 255, 255, 0.4)'
				})
			}));

			polygonLayer.getSource().addFeature(polygon);
		}
	},

	watch: {
		center(center) {
			this.setCenter(center)
		},

		zoom(zoom) {
			this.setZoom(zoom)
		}
	},
}
