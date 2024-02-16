<template>
	<div class="app">
		<div class="input">
			<p>手机号码</p>
			<input
				type="text"
				placeholder="请输入你的手机号码"
				class="username"
				v-model="username"
			/>
		</div>

		<div class="input3 input">
			<p>密码</p>
			<input
				type="text"
				placeholder="请输入你的密码"
				class="password"
				v-model="password"
			/>
		</div>

		<div class="input4 input">
			<div>
				<input type="checkbox" name="" id="" />
				<p class="know">记住密码</p>
			</div>
		</div>
		<button class="login" @click="login">畅享新闻</button>
		<div class="hasUser" @click="goRegister">
			<p class="go_reg">
				没有账号么 <br />
				去注册吧
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useSessionStorageStore } from '@/state';
import { useRouter, useRoute } from 'vue-router';
import { showNotify } from 'vant';
const username = ref('');
const password = ref('');
const router = useRouter();
const goRegister = () => {
	router.push({ name: 'register' });
};
const login = () => {
	console.log(useSessionStorageStore().getSessionData());
	let personList = useSessionStorageStore().getSessionData();
	personList.forEach((item) => console.log(item.username));
	if (username.value != '' && password.value != '') {
		let isLoggedIn = false; // 用于标记是否已经登录成功

		personList.forEach((item) => {
			console.log(
				item.username == username.value,
				password.value == item.password
			);
			if (username.value == item.username && password.value == item.password) {
				// 找到匹配的用户名和密码，设置 isLoggedIn 为 true，并跳转到 home 页面
				isLoggedIn = true;

				return; // 结束循环
			}
		});

		if (!isLoggedIn) {
			showNotify({ type: 'warning', message: '账号或密码错误' });
			return;
		} else {
			console.log('??');
			router.push({ path: '/home' });
		}
	} else {
		showNotify({ type: 'warning', message: '账号或密码不能为空' });
		return;
	}
};
</script>

<style lang="scss" scoped>
.input {
	display: flex;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	justify-content: space-around;
	width: 80%;
}
.input p {
	width: 30%;
}
.input input {
	width: 70%;
}
.know {
	line-height: 2rem;
}
.app {
	background: url(@/assets/log.jpeg);
	height: 100vh !important;
	background-size: 100% 100%;
}

.input {
	width: 80%;
	display: flex;
	position: relative;
	top: 35vh;
	left: 50%;
	height: 2rem;
	transform: translateX(-50%);
	justify-content: space-around;
}
.input p {
	color: #fff;
}
.hr1 {
	top: 36vh;
}

.hr3 {
	top: 40vh;
}

.input3 {
	top: 40vh;
}

.input4 {
	top: 42vh;
	justify-content: space-between !important;
}

.input4 div {
	display: flex;
	width: 70%;
	justify-content: right;
}

input {
	border-radius: 12px;
	padding-left: 1rem;
}
.input4 div input {
	width: 10px;
	margin-right: 10px;
}

.login {
	position: relative;
	top: 46vh;
	left: 50%;
	transform: translateX(-50%);
	background: #354073;
	border-radius: 12px;
	line-height: 35px;
	width: 30vw;
	color: #fff;
	font-size: 1rem;
}

.hasUser {
	position: relative;
	top: 48vh;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	font-size: 0.8rem;
	color: #fff;
}
.go_reg {
	text-decoration: underline;
	color: #fff;
}
</style>
