<script setup>
defineProps({
	href: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	target: {
		type: String,
		default: "_blank",
	},
});
</script>

<template>
	<div :class="`social-button ${brand}`" role="button">
		<i :class="`fa-brands fa-${brand}`"></i><a :href :target class="no-animation"></a>
	</div>
</template>

<style scoped>
.social-button {
	--width: 40px;
	--transition: all 0.3s cubic-bezier (0.68, -0.55, 0.265, 1.55);
	box-shadow: 8px 8px 16px #0003, -8px -8px 16px #ffffff0a;
	border-radius: 8px;
	border: none;
	font-size: calc(var(--width) / 2);
	line-height: 1;
	position: relative;
	transition: background 0.4s, color 0.5s;
	border-radius: 50%;
	width: var(--width);
	height: var(--width);
	font-size: calc(var(--width) / 2);
	line-height: 1;
	width: 40px;
	color: #36597d;
	background: linear-gradient(var(--on-primary), var(--on-primary) 50%, var(--primary) 50%, var(--primary));
	background-size: 100% 200%;

	&:hover {
		background-position: 100% 100% !important;
		color: #fff !important;
	}
}

i {
	font-family: "Font Awesome 6 Brands";
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-style: inherit;
}

fa-brands {
	font-weight: 400;
}

a {
	position: absolute;
	inset: 0;
}
</style>
