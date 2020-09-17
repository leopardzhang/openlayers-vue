import * as ol from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Point from 'ol/geom/Point'
import { Style, Icon } from 'ol/style'

export default {
	data() {
		return {

		}
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

		const layer = new VectorLayer({
			source: new VectorSource()
		});
		map.addLayer(layer);

		map.addEventListener('click', function (e) {
			const point = new ol.Feature({
				geometry: new Point(e.coordinate)
			});

			layer.getSource().clear()
			point.setStyle(new Style({
				image: new Icon({
					src: require('@assets/img/markerbig_select.png')
				})
			}));

			layer.getSource().addFeature(point);
		})
	},

	methods: {

	}
};