<script setup>
import { AwesomeSocialButton } from "awesome-social-button";
</script>

<template>
	<div id="personnal-presentation">
		<div id="personnal">
			<h1>Hey ! <NuxtLink to="/about">I’m Jérémie</NuxtLink></h1>
			<p>
				A mediamatics technician currently pursuing my studies in media engineering
				<a href="https://heig-vd.ch/formation/bachelor/ingenierie-des-medias/" ref="noreferrer" target="_blank"
					>at HEIG-VD</a
				>
			</p>
			<div id="socials">
				<AwesomeSocialButton type="linkedin" :link="{ src: 'https://facebook.com' }" color="#205c8d" />
				<AwesomeSocialButton type="github" :link="{ src: 'https://facebook.com' }" color="#205c8d" />
			</div>
			<div id="call-to-action">
				<NuxtLink
					to="/portfolio"
					class="flex items-center rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				>
					See some of my works

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1.5">
						<path
							fill-rule="evenodd"
							d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
							clip-rule="evenodd"
						/>
					</svg>
				</NuxtLink>
			</div>
		</div>
		<div id="interrests">
			<AppSimpleCard title="Full-stack">
				<template v-slot:content>
					<p>
						I have a deep passion for full-stack web development. From building scalable, responsive back-end
						systems to crafting engaging, intuitive front-end experiences, I thrive on turning creative ideas into
						dynamic web applications.
					</p>
				</template>
			</AppSimpleCard>
			<AppSimpleCard title="UI & UX">
				<template v-slot:content>
					<p>
						In addition to coding, I am equally invested in UI/UX design, ensuring that the user journey is
						seamless, visually appealing, and functional. By combining my development skills with a user-centered
						design approach, I aim to create products that not only meet technical requirements but also deliver a
						top-notch experience for users.
					</p>
				</template>
			</AppSimpleCard>
		</div>
	</div>
</template>

<style scoped>
#personnal-presentation {
	min-height: 100vh;
	padding: 3rem;
	margin-top: 10rem;
	background-color: var(--color-white);
	display: grid;
	gap: 3rem;
	grid-auto-flow: column;
	align-content: center;
}

@media (max-width: 980px) {
	#personnal-presentation {
		grid-auto-flow: row;
	}
}

#personnal h1 {
	font-size: 3rem;
}

#interrests {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

#socials {
	display: flex;
	flex-direction: row;
	gap: 1rem;
	margin-top: 2rem;
}

#socials > * {
	cursor: pointer;
}

#call-to-action > a {
	margin-top: 2rem;
	color: var(--color-white);
	background-color: var(--color-accent);
	width: fit-content;
}

a[href] {
	cursor: pointer;
	color: var(--color-accent);
	text-decoration: none;
}
</style>
