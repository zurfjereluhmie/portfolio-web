<script setup>
const { t } = useI18n();
const props = defineProps(["currentPath"]);

const isActive = (path) => {
	return props.currentPath === path ? "active" : "";
};

// TODO: Remove the second-hand as its only purpose is to show the clock ticking for debugging purposes
const updateClock = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	const secondAngle = (seconds / 60) * 360;
	const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
	const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30;

	document.querySelector("#second-hand").style.transform = `rotate(${secondAngle}deg)`;
	document.querySelector("#minute-hand").style.transform = `rotate(${minuteAngle}deg)`;
	document.querySelector("#hour-hand").style.transform = `rotate(${hourAngle}deg)`;

	requestAnimationFrame(updateClock);
};

onMounted(() => {
	updateClock();
});

onUnmounted(() => {
	cancelAnimationFrame(updateClock);
});
</script>

<template>
	<nav>
		<ul>
			<li>
				<NuxtLink :to="localePath('/')" :aria-current="isActive('/') ? 'page' : null">{{ t("nav.home") }}</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="localePath('/portfolio')" :aria-current="isActive('/portfolio') ? 'page' : null">{{
					t("nav.portfolio")
				}}</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="localePath('/about')" :aria-current="isActive('/about') ? 'page' : null">{{
					t("nav.about")
				}}</NuxtLink>
			</li>
		</ul>
	</nav>
	<div class="time-widget">
		<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M464 256C464 311.165 442.086 364.071 403.078 403.078C364.071 442.086 311.165 464 256 464C200.835 464 147.929 442.086 108.922 403.078C69.9142 364.071 48 311.165 48 256C48 200.835 69.9142 147.929 108.922 108.922C147.929 69.9142 200.835 48 256 48C311.165 48 364.071 69.9142 403.078 108.922C442.086 147.929 464 200.835 464 256ZM0 256C0 323.895 26.9714 389.01 74.9807 437.019C122.99 485.029 188.105 512 256 512C323.895 512 389.01 485.029 437.019 437.019C485.029 389.01 512 323.895 512 256C512 188.105 485.029 122.99 437.019 74.9807C389.01 26.9714 323.895 0 256 0C188.105 0 122.99 26.9714 74.9807 74.9807C26.9714 122.99 0 188.105 0 256Z"
			/>
			<rect id="second-hand" x="247" y="62" width="18" height="218" rx="9" />
			<rect id="minute-hand" x="232" y="95" width="48" height="185" rx="24" />
			<rect id="hour-hand" x="232" y="160" width="48" height="120" rx="24" />
		</svg>
	</div>
</template>

<style scoped>
nav {
	position: fixed;
	left: 50%;
	top: 1rem;
	transform: translateX(-50%);
	background-color: rgba(255, 255, 255, 90%);
	padding: 1rem;
	z-index: 1000;
	@apply rounded-xl backdrop-blur-sm shadow-lg;
}

ul {
	display: flex;
	justify-content: center;
	list-style-type: none;
	margin: 0;
	padding: 0;
}

li a {
	margin: 0 1rem;
	color: var(--color-accent);
}

li a[aria-current="page"] {
	color: var(--color-black);
	background-image: linear-gradient(var(--color-black), var(--color-black));
}

.time-widget {
	position: fixed;
	top: 1rem;
	left: 50%;
	transform: translateX(calc(-50% + 11vw + 1rem));
	background-color: rgba(255, 255, 255, 90%);

	height: calc(27px + 2 * 18px);
	width: calc(27px + 2 * 18px);

	display: flex;
	justify-content: center;
	align-items: center;

	@apply rounded-xl backdrop-blur-sm shadow-lg;
}

.time-widget svg {
	height: 50%;
	width: 50%;
	fill: var(--color-black);
}

#hour-hand,
#minute-hand,
#second-hand {
	transform-origin: inherit;
	transition: transform 0.5s ease-in-out;
}
</style>
