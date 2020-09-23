<template>
	<div>
		<LayerMap
			@pointClick="pointClick"
			:center="center"
			:zoom="zoom"
			:polygon="polygon"
			:polygonStyle="polygonStyle"
			:point="point">
		</LayerMap>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>