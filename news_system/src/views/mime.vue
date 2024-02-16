<template>
	<div class="app">
		<header>
			<h1>我 的</h1>
		</header>
		<div class="main1">
			<img src="../assets/user.png" alt="" />
			<div class="main1Right">
				<h2 class="username">苗苗</h2>
				<div class="main1Icon">
					<img src="../assets/收藏.png" alt="" srcset="" />
					<img src="../assets/收藏.png" alt="" srcset="" />
					<img src="../assets/收藏.png" alt="" srcset="" />
					<img src="../assets/收藏.png" alt="" srcset="" />
					<img src="../assets/收藏.png" alt="" srcset="" />
				</div>
			</div>
		</div>
		<div class="main2">
			<div class="item">
				<img src="../assets/购物车空-copy.png" alt="" />
				<div class="itemRight">
					<p>关注</p>
					<h3>36</h3>
				</div>
			</div>
			<div class="item">
				<img src="../assets/3.1 好友 (1).png" alt="" />
				<div class="itemRight">
					<p>好友</p>
					<h3>354</h3>
				</div>
			</div>
			<div class="item">
				<img src="../assets/收藏.png" alt="" />
				<div class="itemRight">
					<p>个人收藏</p>
					<h3>3256</h3>
				</div>
			</div>
		</div>
		<div class="main3">
			<div class="item">
				<img src="../assets/夜景.png" alt="" />
				<p>夜间模式</p>
				<img src="../assets/详情.png" alt="" />
			</div>
			<hr />
			<div class="item">
				<img src="../assets/订单.png" alt="" />
				<p>我的关注</p>
				<img src="../assets/详情.png" alt="" />
			</div>
			<hr />
			<div class="item">
				<img src="../assets/记录.png" alt="" />
				<p>历史记录</p>
				<img src="../assets/详情.png" alt="" />
			</div>
			<hr />
			<div class="item">
				<img src="../assets/优惠卷.png" alt="" />
				<p>我的喜欢</p>
				<img src="../assets/详情.png" alt="" />
			</div>
			<hr />
			<div class="item">
				<img src="../assets/地址 2.png" alt="" />
				<p>评论管理</p>
				<img src="../assets/详情.png" alt="" />
			</div>
			<hr />
			<div class="item">
				<img src="../assets/客服.png" alt="" />
				<p>智能客服</p>
				<img src="../assets/详情.png" alt="" />
			</div>
			<hr />

			<button class="upLogin">退出登录</button>
		</div>
		<div class="footer">
			<img src="../assets/f11.png" alt="" @click="goHome" />
			<img src="../assets/f4.png" alt="" />
		</div>
	</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const goHome = () => {
	router.push({ name: 'home' });
};
</script>

<style lang="scss" scoped>
.footer {
	position: fixed;
	bottom: 0;
	background: #fff;
	box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
	/* 添加上边的浅浅的灰色阴影 */
	height: 3.5rem;
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
	background: url(../assets/m1.jpeg);
}

header {
	display: flex;
	justify-content: space-around;
	padding: 5px 2px;
	height: 7vh;
	align-items: center;
}

header h1 {
	width: 100%;
	text-align: center;
	color: #fff;
}

.main1 {
	display: flex;
	margin-top: 3vw;
	width: 100%;
	align-items: center;
}

.main1 img {
	width: 20%;
}

.main1 .main1Right {
	margin-left: 2vw;
	width: 70%;
}

.main1 .main1Right h2 {
	color: #fff;
	font-weight: 100;
	font-size: 2.5vw;
}

.main1 .main1Right .main1Icon {
	display: flex;
}

.main1 .main1Right .main1Icon img {
	margin-right: 1vw;
	width: 2vw;
}

.main2 {
	background: #fff;
	width: 100%;
	padding: 2vw;
	box-sizing: border-box;
	display: flex;
	justify-content: space-around;
	margin-top: 5vw;
	border-radius: 12px;
}

.main2 .item {
	display: flex;
	width: 20%;
	align-items: center;
}

.main2 .item .itemRight {
	margin-left: 1vw;
}

.main2 .item .itemRight p {
	font-size: 1.8vw;
}

.main2 .item .itemRight h3 {
	font-size: 1.8vw;
	color: #354073;
}

.main2 .item img {
	width: 30%;
}

.main3 {
	background: #fff;
	width: 100%;
	padding: 2vw;
	box-sizing: border-box;
	margin-top: 5vw;
	border-radius: 12px;
	margin-bottom: 10vh;
}

.main3 .item {
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0.5rem;
}

.main3 .item p {
	width: 80%;
}

.main3 .item img {
	width: 5%;
}

.main3 hr {
	margin-top: 1.5vw;
	position: static !important;
	transform: translateX(0);
	width: 100%;
	margin-bottom: 1.5vw;
}

.main3 button {
	background: #bee0d0;
	display: block;
	margin: auto;
	margin-top: 8vh;
	border-radius: 12px;
	line-height: 2rem;
	color: #fff;
	padding: 0 1rem;
	font-size: 1rem;
}
</style>
