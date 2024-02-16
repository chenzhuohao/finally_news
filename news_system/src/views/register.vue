<template>
	<div class="app">
		<div class="input">
			<p class="gre">手机号码</p>
			<input
				v-model="username"
				type="text"
				placeholder="请输入你的手机号码"
				class="username"
			/>
		</div>

		<div class="input2 input">
			<p class="gre">验证码</p>
			<input
				v-model="yzm"
				type="text"
				placeholder="请输入你的验证码"
				class="yzm"
			/>
			<button class="getYzm" @click="getYzm">获取验证码</button>
		</div>

		<div class="input3 input">
			<p class="gre">密码</p>
			<input
				v-model="password"
				type="text"
				placeholder="请输入你的密码"
				class="password"
			/>
		</div>

		<div class="input4 input">
			<p class="gre">确认密码</p>
			<input
				type="text"
				v-model="password1"
				placeholder="请再次输入你的密码"
				class="password1"
			/>
		</div>
		<button class="login" @click="goHome">享受信息之旅</button>
		<div class="hasUser">
			<p class="go_reg" @click="goLogin">
				已有账号么 <br />
				去登录吧
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
const password1 = ref('');
const yzm = ref('');
const yzm1 = ref('');
const router = useRouter();
const getYzm = () => {
	if (username.value != '') {
		showNotify({
			type: 'success',
			message: '验证码为 :' + generateSixDigitRandomNumber(),
		});
	} else {
		console.log(username.value);
		showNotify({ type: 'warning', message: '请输入手机号' });
	}
};
// 生成一个随机的六位数
function generateSixDigitRandomNumber() {
	// 生成一个0到999999之间的随机数
	let randomNumber = Math.floor(Math.random() * 1000000);

	// 将随机数转换为字符串并补齐到六位数
	let sixDigitNumber = randomNumber.toString().padStart(6, '0');
	yzm1.value = sixDigitNumber;
	return sixDigitNumber;
}
const goHome = () => {
	if (yzm.value !== yzm1.value && yzm == '') {
		showNotify({ type: 'warning', message: '验证码错误' });
		return;
	}
	if (password.value !== password1.value) {
		showNotify({ type: 'warning', message: '两次密码不同' });
		return;
	}
	if (
		username.value != '' &&
		yzm.value != '' &&
		password.value != '' &&
		password1.value != ''
	) {
		sessionStorage.setItem('user', username);
		useSessionStorageStore().setSessionData({
			username: username.value,
			password: password.value,
		});
		router.push({ name: 'login' });
	}
};
const goLogin = () => {
	router.push({ name: 'login' });
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
input {
	border-radius: 12px;
	padding-left: 1rem;
}
.app {
	background: url(@/assets/reg2.jpeg);
	height: 100vh !important;
	background-size: 100% 100%;
}

.input {
	width: 80%;
	display: flex;
	position: relative;
	top: 35vh;
	left: 50%;
	transform: translateX(-50%);
	justify-content: space-around;
	height: 2rem;
}

.input2 {
	top: 38vh;
}

.input2 input {
	width: 40%;
}

.input2 button {
	padding: 0;
	margin: 0;
	width: 30%;
	background: #40771c;
	border-radius: 12px;
	height: 2rem;
	line-height: 25px;
	color: #fff;
}

.hr1 {
	top: 36vh;
}

.hr2 {
	top: 38vh;
}

.hr3 {
	top: 40vh;
}

.input3 {
	top: 40vh;
}

.input4 {
	top: 42vh;
}

.login {
	position: relative;
	top: 46vh;
	left: 50%;
	transform: translateX(-50%);
	background: #40771c;
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
	color: rgba(126, 126, 126, 1);
}
.go_reg {
	text-decoration: underline;
	color: #fff;
}
.gre {
	color: #40771c !important;
	font-weight: 600;
}
</style>
