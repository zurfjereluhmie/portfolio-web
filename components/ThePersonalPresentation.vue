<script setup>
const { t } = useI18n();
import { AwesomeSocialButton } from "awesome-social-button";
</script>

<template>
	<div id="personnal-presentation">
		<div id="personnal">
			<h1>
				{{ t("hello") }} <NuxtLink :to="localePath('/about')">{{ t("imJeremie") }}</NuxtLink>
			</h1>
			<p class="big">
				{{ t("oneSentencePres") }}
				<a
					href="https://heig-vd.ch/formation/bachelor/ingenierie-des-medias/"
					ref="noreferrer"
					target="_blank"
					aria-label="HEIG-VD Media Engineering"
					>{{ t("at") }} HEIG-VD</a
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
					class="flex items-center rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				>
					{{ t("seeMyWork") }}

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
						{{ t("fullStack") }}
					</p>
				</template>
			</AppSimpleCard>
			<AppSimpleCard title="UI & UX">
				<template v-slot:content>
					<p>
						{{ t("UIUX") }}
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
</style>
