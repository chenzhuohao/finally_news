<template>
	<van-swipe style="height: 100vh; width: 100vw" vertical :loop="false">
		<van-swipe-item>
			<div style="position: relative; width: 100%; height: 100%">
				<img
					src="../assets/s1.jpeg"
					style="width: 100%; height: 100%"
					alt="Image 1"
				/>
				<div class="swiper1">即 时 新 闻 <br /></div>
				<div class="swiper2">带 你 走 进 世 界</div>
			</div></van-swipe-item
		>
		<van-swipe-item>
			<div style="position: relative; width: 100%; height: 100%">
				<img
					src="../assets/s2.jpeg"
					style="width: 100%; height: 100%"
					alt="Image 1"
				/></div
		></van-swipe-item>
		<van-swipe-item>
			<div style="position: relative; width: 100%; height: 100%">
				<img
					src="../assets/s3.jpeg"
					style="width: 100%; height: 100%"
					alt="Image 1"
				/></div
		></van-swipe-item>
		<van-swipe-item>
			<div style="position: relative; width: 100%; height: 100%">
				<img
					src="../assets/s4.jpeg"
					style="width: 100%; height: 100%"
					alt="Image 1"
				/></div
		></van-swipe-item>
		<van-swipe-item>
			<div style="position: relative; width: 100%; height: 100%">
				<img
					src="../assets/s5.jpeg"
					style="width: 100%; height: 100%"
					alt="Image 1"
				/>
				<div class="swiper1">即 时 新 闻 <br /></div>
				<div class="swiper3" @click="going">点 击 进 入</div>
			</div></van-swipe-item
		>
	</van-swipe>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const going = () => {
	router.push({ name: 'home' });
};
</script>

<style lang="scss" scoped>
.swiper1 {
	position: absolute;
	top: 2rem;
	// left: 50%;
	// transform: translateX(-50%);
	color: #265c63;
	font-size: 2rem;
	font-weight: 600;
	width: 100%;
	text-align: center;
}
.swiper2 {
	position: absolute;
	top: 5rem;
	// left: 50%;
	// transform: translateX(-50%);
	color: #238b99;
	font-size: 1.5rem;
	font-weight: 600;
	width: 100%;
	text-align: center;
}
.swiper3 {
	position: absolute;
	top: 5rem;
	width: 13rem;
	height: 5rem;
	background: transparent;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 2rem;
	color: #ea9995;
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
	line-height: 4rem;
	border: 0.5rem solid #eabcb9;
}
</style>
