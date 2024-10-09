<script setup></script>

<template>
	<div id="hero-container">
		<div id="name">
			<p>Jérémie <span>Zurflüh</span></p>
		</div>
		<div id="pro-infos">
			<p>BSc in Media Engineering</p>
			<p>Full-stack & UI/UX</p>
		</div>
	</div>
</template>

<style scoped>
#hero-container {
	position: relative;
	background-color: #f0f0f0;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: linear-gradient(180deg, #eff2f9 -34.81%, rgba(239, 242, 249, 0) 33.99%),
		linear-gradient(180deg, rgba(239, 242, 249, 0) 49.96%, #eff2f9 100%),
		url("/img/hero-bg.png") lightgray 50% / cover no-repeat;
	background-size: cover;
}

#name {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 15vh;
}

#name p {
	color: var(--color-black);
	font-size: 3rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}

#name span {
	font-weight: 600;
}

#pro-infos {
	margin-left: 3rem;
	margin-bottom: 3rem;
}

#pro-infos *:first-child {
	color: var(--color-black);
	font-size: 2rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}

#pro-infos *:last-child {
	color: var(--color-black);
	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
}

h1 {
	text-align: center;
	mix-blend-mode: darken;
}

h1::before {
	content: "";
	display: block;
	width: 100px;
	height: 2px;
	background-color: var(--color-black);
	margin: 0 auto;
	margin-top: 1rem;
}
</style>
