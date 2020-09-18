import * as ol from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Style, Icon } from 'ol/style'
import Point from 'ol/geom/Point'
import { Select, Snap } from 'ol/interaction';

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
		const container = document.getElementById('popup');
		const content = document.getElementById('popup-content');
		const closer = document.getElementById('popup-closer');
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
			layer.getSource().addFeature(point);
		}

		const selectClick = new Select()
		const snap = new Snap()
		map.addInteraction(selectClick)
		map.addInteraction(Snap)

		closer.onclick = function () {
			overlay.setPosition(undefined);
			closer.blur();
			return false;
		};
		const overlay = new ol.Overlay({
			element: container,
			autoPan: true,
			autoPanAnimation: {
				duration: 200   //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度.
			}
		});

		selectClick.on('select', function (e) {
			if (e.target.getFeatures().getArray().length) {
				const {
					data,
					geometry: {
						flatCoordinates: coordinate
					}
				} = e.target.getFeatures().getArray()[0].values_
				content.innerHTML = `<p>你点击的point的id是：</p><code>${data.id}</code>`;

				overlay.setPosition(coordinate);
				map.addOverlay(overlay);
			}
		})

		snap.on('mouseover', function(e) {
			console.log(e)
		})
	},

	methods: {

	}
};