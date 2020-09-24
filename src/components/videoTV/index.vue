<template>
	<div class="video_tv">
		<!-- <video
			ref="video"
			:src="urlObject"
			id="player"
			width="380"
			height="230"
			autoplay
			controls
			playsinline
			webkit-playsinline
		></video> -->
		<iframe 
			id="myvideo"
			src="https://third.shuadh.com/wojiaplay.html" 
			frameborder="0"
			ref = "video"
			style="width:380px;height:230px;"
		></iframe>
	</div>
</template>

<script>
	var player = null;
	export default {
		name: "videoTV",
		props: {
			token: String,
			deviceId: String,
			videoState: Boolean
		},
		mounted() {
			// loadframe();
			// async function loadframe(){
			// 	// var iframe = document.createElement('iframe');
			// 	// iframe.src = "http://third.shuadh.com/wojiaplay.html";
			// 	// document.body.appendChild(iframe);
			// 	await postMessageFn()
			// }
			// function postMessageFn(){
			// 	setTimeout(()=>{
			// 		var frame1 = this.$refs.video;
			// 		console.log(frame1)
			// 		frame1.postMessage({ type: 1, data: { access_token: '5a6cb468-1ee4-4c01-8ac0-87eb19aa0446', deviceId: 8 } }, '*');   
			// 	},2000)
			// }

			


		},
		methods: {

			stop() {
				// if (player) {
				// 	player.stop();
				// }
				// player = null;
			},
			goOn() {
					
			},
		},

		watch: {
			videoState(val) {
				var _this = this
				const iframe = document.querySelector('#myvideo')
				// 处理兼容行问题
				if (iframe.attachEvent) {
					iframe.attachEvent('onload', function () {
						if(val){
							console.log(1111);
							iframe.postMessage({ type: 1, data: { access_token: '5a6cb468-1ee4-4c01-8ac0-87eb19aa0446', deviceId: 8 } }, '*');	
						}
						
					})
				} else {
					iframe.onload = function () {
						if(val){
							setTimeout(() => {
								iframe.postMessage({ type: 1, data: { access_token: '5a6cb468-1ee4-4c01-8ac0-87eb19aa0446', deviceId: 8 } }, '*');	
						
							}, 2000);
							console.log(2222);}
				}
				}
				// console.log(val);
				// if (val) {
				// 	this.goOn();
				// } else {
				// 	this.stop();
				// }
			},
		},
	};
</script>
