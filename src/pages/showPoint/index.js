import * as ol from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Style, Icon } from 'ol/style'
import Point from 'ol/geom/Point'
import Select from 'ol/interaction/Select';
import * as olCoordinate from 'ol/coordinate';
import * as olProj from 'ol/proj';

export default {
	data() {
		return {
			pointList: [
				[14093917.166992238, 5742844.590200588],
				[14105726.687862298, 5743647.178997583],
				[14099267.7589722, 5730117.824991107]
			]
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

		for (const index in this.pointList) {
			const point = new ol.Feature({
				geometry: new Point(this.pointList[index]),
				data: {
					id: index
				}
			});
			point.setStyle(new Style({
				image: new Icon({
					src: require('@assets/img/markerbig_select.png')
				})
			}));
			polygonLayer.getSource().addFeature(point);
		}
		
		const selectClick = new Select();
		map.addInteraction(selectClick);
		selectClick.on('select', function (e) {
			if (e.target.getFeatures().getArray().length) {
				console.log(e.target.getFeatures().getArray()[0].values_.data.id)
			}
		})
	},

	methods: {

	}
};