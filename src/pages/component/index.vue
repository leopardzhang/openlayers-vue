<template>
	<div>
		<LayerMap
			@pointClick="pointClick"
			@drawPoint="drawPoint"
			@drawPolyon="drawPolyon"
			:center="center"
			:zoom="zoom"
			:polygon="polygon"
			:polygonStyle="polygonStyle"
			:point="point"
			:drawPointAble="drawPointAble"
			:drawPolygonAble="drawPolygonAble">
		</LayerMap>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>