<script setup>
import { AwesomeSocialButton } from "awesome-social-button";
const { t } = useI18n();

useSeoMeta({
	title: t("about.meta.title"),
	description: t("about.meta.description"),
	ogTitle: t("about.meta.title"),
	ogDescription: t("about.meta.description"),
	twitterTitle: t("about.meta.title"),
	twitterDescription: t("about.meta.description"),
});
</script>

<template>
	<header>
		<TheNavBar currentPath="/about" />
	</header>
	<main>
		<div class="px-6">
			<h1>{{ t("about.aboutMe") }}</h1>
			<div class="about-container">
				<div class="profile-description">
					<div class="hello">
						<h2>{{ t("about.helloImJeremie") }}</h2>
						<p>
							{{ t("about.iStudy") }}
							<a
								href="https://heig-vd.ch/formation/bachelor/ingenierie-des-medias/"
								ref="noreferrer"
								target="_blank"
								aria-label="HEIG-VD Media Engineering"
							>
								{{ t("about.mediaEngineering") }}</a
							>{{ t("about.iStudy2") }}
						</p>
						<p>
							{{ t("about.trainedAs") }}
							<a
								href="https://www.ict-berufsbildung.ch/formation-initiale/apprentissages-ict/mediamaticienne-cfc"
								ref="noreferrer"
								target="_blank"
								aria-label="Mediamatics Technician at ICT Berufsbildung"
								>{{ t("about.mediamaticsTechnician") }}</a
							>{{ t("about.mediamaticsTechnician2") }}
						</p>
						<p>
							{{ t("about.loveAbout") }}
						</p>
					</div>
					<div class="get-in-touch">
						<h2>{{ t("about.getInTouch") }}</h2>
						<p>
							{{ t("about.getInTouch2") }}
							<a
								href="javascript:location='mailto:\u007a\u0075\u0072\u0066\u006c\u0075\u0068\u002e\u006a\u0065\u0072\u0065\u006d\u0069\u0065\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0"
								aria-label="Email Jérémie Zurflüh"
								>{{ t("about.email") }}</a
							>
							{{ t("about.connect") }}
							<a
								href="https://www.linkedin.com/in/jeremie-zurfluh/"
								ref="noreferrer"
								target="_blank"
								aria-label="LinkedIn"
								>{{ t("about.linkedin") }}</a
							>{{ t("about.connect2") }}
						</p>
					</div>
				</div>
				<div class="profile-card justify-self-end">
					<AppProfileCard
						name="Jérémie Zurflüh"
						:role="t('about.role')"
						imageUrl="/img/me.jpg"
						class="hidden xl:block"
					>
						<div class="flex flex-row gap-6 justify-center">
							<AwesomeSocialButton
								type="linkedin"
								:link="{ href: 'https://www.linkedin.com/in/jeremie-zurfluh/', target: '_blank' }"
								color="#205c8d"
							/>
							<AwesomeSocialButton
								type="github"
								:link="{ href: 'https://github.com/zurfjereluhmie', target: '_blank' }"
								color="#205c8d"
							/>
						</div>
					</AppProfileCard>
				</div>
			</div>
		</div>
	</main>
	<TheFooter />
</template>

<style scoped>
@import url("~/assets/css/normal-page.css");

.about-container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 0 0;
	grid-auto-flow: row;
	grid-template-areas:
		"profile-description profile-description profile-card"
		"profile-description profile-description profile-card"
		". . .";
}

@media (max-width: 1279px) {
	.about-container {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto 1fr;
		grid-template-areas:
			"profile-card"
			"profile-description"
			".";
	}
}

.profile-description {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 1rem 0;
	grid-auto-flow: row;
	grid-template-areas:
		"hello hello hello"
		"hello hello hello"
		"get-in-touch get-in-touch get-in-touch";
	grid-area: profile-description;
}

.hello {
	grid-area: hello;
}

.get-in-touch {
	grid-area: get-in-touch;
}

.profile-description > div h2 {
	margin-bottom: 1.5rem;
}

.profile-description > div p:not(:last-child) {
	margin-bottom: 1rem;
}

.profile-card {
	grid-area: profile-card;

	/* Animation */
	opacity: 0;
	animation: enter 1s 0.5s forwards;
}
</style>
