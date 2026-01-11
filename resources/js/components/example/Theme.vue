<script setup lang="ts">
import ChangeTheme from '../utils/head/ChangeTheme.vue';
</script>

<template>
	<div class="bg">
		<ChangeTheme />

		<div class="card">
			<h1>Login</h1>
			<div class="card-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum iusto natus ad dignissimos, aliquam, rerum maiores voluptatibus ipsam pariatur velit perferendis soluta molestias earum eveniet nihil magnam iure explicabo.</div>

			<label for="email">Email</label>
			<input type="text" name="email" />

			<label for="password">Password</label>
			<input type="text" name="password" />

			<button class="submit-button">Submit</button>
		</div>
	</div>
</template>

<style>
@import url('@/assets/css/colors.css');

input {
	float: left;
	width: 100%;
	padding: 13px 20px;
	margin-block: 10px;
	border: 1px solid var(--border);
	border-radius: var(--border-radius);
}

button {
	float: left;
	width: auto;
	padding: 15px 35px;
	margin-block: 10px;
	color: #fff;
	background: var(--accent);
	border: 1px solid var(--accent);
	border-radius: var(--border-radius);
	transition: all 0.6s;
	cursor: pointer;
}

button:hover {
	background: var(--accent-hover);
	border: 1px solid var(--accent-hover);
}

label {
	color: var(--label);
}

.bg {
	float: left;
	width: 100%;
	height: 100vh;
	padding: 40px;
	background: var(--bg-1);
	color: var(--text-1);
}

.card {
	float: left;
	width: 100%;
	height: auto;
	padding: 20px 40px;
	background: var(--bg-2);
	color: var(--text-1);
	border-radius: var(--border-radius);
}

.card-info {
	float: left;
	width: 100%;
	padding: 20px;
	margin-block: 20px;
	background: var(--bg-3);
	color: var(--text-3);
	border-radius: var(--border-radius);
}
</style>
