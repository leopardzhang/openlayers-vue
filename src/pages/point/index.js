import * as ol from 'ol'
import { Tile, Vector } from 'ol/layer'
import XYZ from 'ol/source/XYZ'
import VectorSource from 'ol/source/Vector'
import { Point, Polygon } from 'ol/geom'
import { Style, Icon, Stroke, Fill } from 'ol/style'

export default {
	data() {
		return {

		}
	},

	mounted() {
		const map = new ol.Map({
			target: 'map',
			layers: [
				new Tile({
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

		const polygonLayer = new Vector({
			source: new VectorSource()
		});
		map.addLayer(polygonLayer);

		const polygon = new ol.Feature({
			geometry: new Polygon([[[14105726.687862298, 5743647.178997583], [14098465.170175206, 5738602.335130761], [14099267.7589722, 5730117.824991107], [14110351.12807355, 5727404.310486983], [14124453.759792166, 5734589.391145789]]])
		});

		polygon.setStyle(new Style({
			stroke: new Stroke({
				color: '#009933',
				width: 2
			}),

			fill: new Fill({
				color: 'rgba(255, 255, 255, 0.4)'
			})
		}));

		polygonLayer.getSource().addFeature(polygon);

		const layer = new Vector({
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