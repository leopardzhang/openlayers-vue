import * as ol from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Style } from 'ol/style'
import LineString from 'ol/geom/LineString'
import Stroke from 'ol/style/Stroke'

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

		const line = new ol.Feature({
			geometry: new LineString([[14105726.687862298, 5743647.178997583], [14098465.170175206, 5738602.335130761], [14099267.7589722, 5730117.824991107], [14110351.12807355, 5727404.310486983], [14124453.759792166, 5734589.391145789]])
		});

		line.setStyle(new Style({

			stroke: new Stroke({
				color: '#009933',
				width: 3
			})
		}));

		polygonLayer.getSource().addFeature(line);
	},

	methods: {

	}
};