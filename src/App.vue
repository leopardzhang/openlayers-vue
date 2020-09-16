<template>
	<div id="app">
		<transition :name="transitionName">
			<keep-alive>
				<router-view class="base-router" />
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "app",
		data() {
			return {
				transitionName: "slide-up",
			};
		},
	};
</script>

<style lang="scss">
.content {
	padding: 0 14px;
	background: white;
}

.base-router {
	transition: all 0.29s ease-in-out;
	will-change: transform;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	min-height: 100vh;
}

.slide-up-leave-active {
	opacity: 0;
	transform: scale(0.8);
}

.slide-up-enter-active {
	opacity: 0;
	transform: scale(1);
}

.main_map {
	width: 100vw;
	height: 100vh;
}
</style>
