<template>
	<main>
		<ul class="nav_list">
			<li>
				<router-link to="polygon">制作网格</router-link>
			</li>
			<li>
				<router-link to="point">制作点位</router-link>
			</li>
			<li>
				<router-link to="showPoint">展示点位</router-link>
			</li>
			<li>
				<router-link to="showPolygon">展示网格</router-link>
			</li>
			<li>
				<router-link to="showPopup">展示弹窗</router-link>
			</li>
		</ul>
		
		<router-view></router-view>
	</main>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>