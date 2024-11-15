<script setup>
import { AwesomeSocialButton } from "awesome-social-button";

const { t } = useI18n();
</script>

<template>
	<div id="personnal-presentation">
		<div id="personnal">
			<h1>
				{{ t("index.hello") }} <NuxtLink :to="localePath('/about')">{{ t("index.imJeremie") }}</NuxtLink>
			</h1>
			<p class="big">
				{{ t("index.oneSentencePres") }}
				<a
					href="https://heig-vd.ch/formation/bachelor/ingenierie-des-medias/"
					ref="noreferrer"
					target="_blank"
					aria-label="HEIG-VD Media Engineering"
					>{{ t("index.at") }} HEIG-VD</a
				>
			</p>
			<div id="socials">
				<AwesomeSocialButton
					type="linkedin"
					:link="{ href: 'https://www.linkedin.com/in/jeremie-zurfluh/', target: '_blank' }"
					color="#205c8d"
					target="_blank"
				/>
				<AwesomeSocialButton
					type="github"
					:link="{ href: 'https://github.com/zurfjereluhmie', target: '_blank' }"
					color="#205c8d"
				/>
			</div>
			<div id="call-to-action">
				<NuxtLink
					:to="localePath('/portfolio')"
					class="flex items-center rounded-md py-2 px-4 border border-transparent text-center text-sm shadow-sm"
				>
					{{ t("index.seeMyWork") }}

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
						{{ t("index.fullStack") }}
					</p>
				</template>
			</AppSimpleCard>
			<AppSimpleCard title="UI & UX">
				<template v-slot:content>
					<p>
						{{ t("index.UIUX") }}
					</p>
				</template>
			</AppSimpleCard>
		</div>
	</div>
</template>

<style scoped>
#personnal-presentation {
	min-height: 100dvh;
	padding: 3rem;
	margin-top: 10rem;
	background-color: var(--surface);
	display: grid;
	gap: 3rem;
	grid-auto-flow: column;
	align-content: center;
}

#personnal,
#interrests {
	margin-top: 7rem;
}

@media (max-width: 980px) {
	#personnal-presentation {
		grid-auto-flow: row;
	}

	#interrests {
		margin-top: 0;
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
	color: var(--on-primary);
	background-color: var(--primary);
	width: fit-content;
}

#call-to-action > a svg {
	transition: transform 0.2s ease-in-out;
}

#call-to-action > a:hover svg {
	transform: translateX(0.25rem);
}
</style>
