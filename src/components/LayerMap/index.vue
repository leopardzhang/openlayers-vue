<template>
	<div class="map" id="map">
		<div ref="popup" id="popup" class="ol-popup">
			<a href="#" ref="closer" id="popup-closer" class="ol-popup-closer"></a>
			<div ref="content" id="popup-content" style="width:320px; height:280px;"></div>
		</div>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>