<template>
	<div>
		<LayerMap
			@pointClick="pointClick"
			@drawPoint="drawPoint"
			@drawPolyon="drawPolyon"
			@popupShow="popupShow"
			:center="center"
			:zoom="zoom"
			:polygon="polygon"
			:polygonStyle="polygonStyle"
			:point="point"
			:drawPointAble="drawPointAble"
			:drawPolygonAble="drawPolygonAble"
			:showPopup="showPopup">
		</LayerMap>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>