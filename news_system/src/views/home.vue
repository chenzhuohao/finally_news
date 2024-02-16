<template>
	<div class="app">
		<header>
			<img src="../assets/搜索.png" alt="" class="search" />
			<h1>首 页</h1>
			<img src="../assets/扫码.png" alt="" />
		</header>
		<div class="main1">
			<div class="banner">
				<img src="../assets/banner.jpeg" alt="" class="img" />
			</div>

			<div class="bannerText">
				<h1>发 现</h1>
				<div class="bannerTextLeft">
					<h3>深入报道：探索新闻背后的真相</h3>
					<p>跟随我们的脚步，解锁新闻世界的独特视角</p>
				</div>
			</div>

			<div class="banner2">
				<img src="../assets/b1.png" alt="" />
				<img src="../assets/b1.png" alt="" />
				<img src="../assets/b1.png" alt="" />
				<img src="../assets/b1.png" alt="" />
			</div>
		</div>
		<div class="main2">
			<div class="mainBox" v-for="item in mainBoxText" :key="item">
				<img :src="item.url" alt="" />
				<div class="p1">{{ item.p1 }}</div>
				<div class="p2">{{ item.p2 }}</div>
			</div>
		</div>
		<div class="footer">
			<img src="../assets/f11.png" alt="" />
			<img src="../assets/f4.png" alt="" @click="goMyself" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import c1Image from '@/assets/c1.png';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const mainBoxText = ref([
	{
		p1: '香港特区政府是否会拒绝梅西入境？香港入境处处长回应',
		p2: '2024-02-08 17:29·环球网',
		url: c1Image,
	},
	{
		p1: '各地“花样”促文旅 融合业态更多元',
		p2: '2024-02-07 10:48·新华社',
		url: c1Image,
	},
	{
		p1: '【理响中国 | 社科青年开讲啦】“第二个结合”是又一次思想解放',
		p2: '原创 2024-02-06 09:36·中国社会科学网',
		url: c1Image,
	},
	{
		p1: '中共中央国务院举行春节团拜会 习近平发表讲话',
		p2: '2024-02-08 15:53·新华网',
		url: c1Image,
	},
	// 其他项目
]);
const goMyself = () => {
	router.push({ name: 'mine' });
};
</script>

<style lang="scss" scoped>
.footer {
	position: fixed;
	bottom: 0;
	background: #fff;
	box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
	/* 添加上边的浅浅的灰色阴影 */
	height: 15vh;
	width: 100vw;
	justify-content: space-around;
	align-items: center;
	display: flex;
}
.footer img {
	width: 8%;
	height: 80%;
	display: block;
}
.app {
	padding-top: 0 !important;
}

header {
	display: flex;
	background: #fff;
	justify-content: space-around;
	padding: 5px 2px;
	height: 7vh;
	align-items: center;
}

header h1 {
	width: 70%;
	text-align: center;
}

header img {
	height: 5vh;
}

.main1 {
	width: 100%;
	background: #354073;
	padding-bottom: 5vw;
}

.main1 .banner {
	width: 100%;
	margin: auto;
	display: flex;
	height: 40vh;
	position: relative;
}

.main1 .banner .img {
	width: 100%;
	height: 40vh;
	position: absolute;
}

.main1 .bannerText {
	width: 95%;
	margin: auto;
	display: flex;
	margin-top: 2vw;
	border-radius: 12px;
	padding: 0.5rem 0;
}

.main1 .bannerText h1 {
	background: #c2c2c5;
	width: 35%;
	font-weight: 500;
	text-align: center;
	line-height: 3.5rem;
	margin: 0;
}

.main1 .bannerText .bannerTextLeft {
	width: 65%;
	background: #fff;
	height: 3.5rem;
}

.main1 .bannerText .bannerTextLeft h3 {
	font-weight: 500;
	color: #5c5c5c;
	text-align: center;
	margin: 0;
	line-height: 2rem;
}

.main1 .bannerText .bannerTextLeft p {
	font-weight: 500;
	color: #9c9b9b;
	text-align: center;
	margin: 0;
}

.banner2 {
	display: flex;
	justify-content: space-around;
	width: 95%;
	margin: auto;
	margin-top: 2vw;
}

.banner2 img {
	width: 15%;
}

.main2 {
	display: flex;
	width: 95%;
	margin: auto;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 7rem;
}

.mainBox {
	margin-top: 2vw;
	width: 48%;
	padding: 1vw;
	border: 1px solid #ddd;
	/* 设置盒子边框，这是可选的，根据需要自行调整 */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	/* 添加浅浅的灰色阴影 */
}

.mainBox img {
	width: 100%;
}

.mainBox .p1 {
	text-align: center;
	line-height: 2rem;
	font-size: 1rem;
	white-space: nowrap; /* 禁止文本换行 */
	overflow: hidden; /* 隐藏溢出的文本 */
	text-overflow: ellipsis; /* 超出部分显示省略号 */
}

.mainBox .p2 {
	text-align: center;
	line-height: 1.5rem;
	font-size: 0.8rem;
	color: #626262;
	white-space: nowrap; /* 禁止文本换行 */
	overflow: hidden; /* 隐藏溢出的文本 */
	text-overflow: ellipsis; /* 超出部分显示省略号 */
}
</style>
