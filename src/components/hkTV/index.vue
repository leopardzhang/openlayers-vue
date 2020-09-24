<template>
	<div id="playWind"></div>
</template>

<script>
	var decoder = null;
	export default {
		name: "hkTV",

		props: {
			videoState: Boolean,
			url: String,
			token: String,
		},

		methods: {
			goOn() {
				this.$nextTick(function () {
					decoder = new EZUIKit.EZUIPlayer({
						id: "playWind",
						autoplay: true,
						url: this.url,
						accessToken: this.token,
						decoderPath: "./",
						width: 380,
						height: 230,
						splitBasis: 2, // 1*1 2*2 3*3 4*4
						handleError() {
							decoder.stop()
						}
					});
				});
			},

			stop() {
				if (decoder) {
					var stopPromise = decoder.stop();
					decoder = null;
				}
			},
		},

		watch: {
			videoState(val) {
				if (val) {
					setTimeout(() => {
						this.goOn();
					}, 100);
				} else {
					this.stop();
				}
			},
		},
	};
</script>

<style lang="scss">
#playWind {
	width: 380px;
	height: 230px;
}

.loading-item {
	width: 380px !important;
	height: 230px !important;
}
</style>