import * as ol from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Draw from 'ol/interaction/Draw'
import { Style, Stroke, Fill } from 'ol/style'

export default {
	data() {
		return {

		}
	},

	computed: {

	},

	mounted() {
		const map = new ol.Map({
			target: 'map',
			layers: [
				new TileLayer({
					source: new XYZ({
						url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					})
				})
			],
			view: new ol.View({
				center: [14093917.166992238, 5742844.590200588],
				zoom: 12
			})
		});

		const polygonLayer = new VectorLayer({
			source: new VectorSource()
		});
		map.addLayer(polygonLayer);

		const polygonDraw = new Draw({
			type: 'MultiPolygon',
			source: polygonLayer.getSource(),
			style: new Style({
				stroke: new Stroke({
					color: '#009933',
					size: 1
				}),

				fill: new Fill({
					color: 'rgba(255, 0, 0, 0.2)'
				})
			})
		});
		polygonDraw.on('drawend', function (event) {
			console.log(event.feature.getGeometry().getCoordinates());
		});

		map.on('singleclick', function (event) {
			console.log(event);
		});
		map.addInteraction(polygonDraw);
	},

	methods: {

	}
};