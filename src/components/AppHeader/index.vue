<template>
	<header>
		<div class="content flex between aic">
			<div class="arr_left" @click="goBack"></div>
			<h1 class="page_name">{{ name }}</h1>
			<p class="save" @click="handleSave">保存</p>
		</div>
	</header>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>
