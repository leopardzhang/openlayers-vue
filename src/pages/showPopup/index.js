import * as ol from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
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

		const container = document.getElementById('popup');
		const content = document.getElementById('popup-content');
		const closer = document.getElementById('popup-closer');

		closer.onclick = function () {
			overlay.setPosition(undefined);
			closer.blur();
			return false;
		};
		const overlay = new ol.Overlay({
			element: container,
			autoPan: true,
			autoPanAnimation: {
				duration: 250   //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度.
			}
		});
		map.addEventListener('click', function (evt) {
			const coordinate = evt.coordinate;
			const hdms = olCoordinate.toStringHDMS(olProj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));

			content.innerHTML = '<p>你点击的坐标是：</p><code>' + hdms + '</code>';
			overlay.setPosition(coordinate);
			map.addOverlay(overlay);
		});
	},

	methods: {

	}
};