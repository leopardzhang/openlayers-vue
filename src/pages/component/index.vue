<template>
	<div>
		<LayerMap
			@pointClick="pointClick"
			@drawPoint="drawPoint"
			:center="center"
			:zoom="zoom"
			:polygon="polygon"
			:polygonStyle="polygonStyle"
			:point="point"
			:drawPointAble="drawPointAble">
		</LayerMap>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>