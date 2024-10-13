<script setup>
import { AwesomeSocialButton } from "awesome-social-button";

useSeoMeta({
	title: "About Me",
	description:
		"Jérémie, a Media Engineering student at HEIG-VD, creates seamless full-stack web experiences with a blend of creativity and technical skills. Reach out for collaboration or web development insights.",
	ogTitle: "About Me",
	ogDescription:
		"Jérémie, a Media Engineering student at HEIG-VD, creates seamless full-stack web experiences with a blend of creativity and technical skills. Reach out for collaboration or web development insights.",
	twitterTitle: "About Me",
	twitterDescription:
		"Jérémie, a Media Engineering student at HEIG-VD, creates seamless full-stack web experiences with a blend of creativity and technical skills. Reach out for collaboration or web development insights.",
});
</script>

<template>
	<header>
		<TheNavBar currentPath="/about" />
	</header>
	<main>
		<div class="px-6">
			<h1>About Me</h1>
			<div class="about-container">
				<div class="profile-description">
					<div class="hello">
						<h2>Hello! I’m Jérémie</h2>
						<p>
							I’m studying
							<a
								href="https://heig-vd.ch/formation/bachelor/ingenierie-des-medias/"
								ref="noreferrer"
								target="_blank"
							>
								Media Engineering at HEIG-VD</a
							>, with a passion for both the technical and creative sides of web development. My journey started
							with a curiosity for how things work, which grew into a love for building websites that not only
							function well but look and feel great.
						</p>
						<p>
							Before this, I trained as a
							<a
								href="https://www.ict-berufsbildung.ch/formation-initiale/apprentissages-ict/mediamaticienne-cfc"
								ref="noreferrer"
								target="_blank"
								>Mediamatics Technician</a
							>, gaining a solid foundation in web development, design, video editing, and IT.
						</p>
						<p>
							What I love about full-stack development is bringing ideas to life from start to finish &mdash;
							building efficient back-end systems while creating seamless, user-centered front-end experiences.
							It’s the blend of logic and creativity that drives me.
						</p>
					</div>
					<div class="get-in-touch">
						<h2>Get in touch</h2>
						<p>
							If you’d like to collaborate on a project, have any questions, or just want to chat about web
							development or UI & UX, feel free to reach out! I’m always open to new opportunities and love
							connecting with like-minded people. You can contact me via
							<a
								href="javascript:location='mailto:\u007a\u0075\u0072\u0066\u006c\u0075\u0068\u002e\u006a\u0065\u0072\u0065\u006d\u0069\u0065\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0"
								>email</a
							>
							or connect with me on
							<a href="https://www.linkedin.com/in/jeremie-zurfluh/" ref="noreferrer" target="_blank">LinkedIn</a
							>. I look forward to hearing from you!
						</p>
					</div>
				</div>
				<div class="profile-card justify-self-end">
					<AppProfileCard
						name="Jérémie Zurflüh"
						role="Student in Media Engineering"
						description="I’m a full-stack developer with a passion for building efficient back-end systems and seamless, user-centered front-end experiences."
						imageUrl="/img/me.jpg"
						class="hidden xl:block"
					>
						<div class="flex flex-row gap-6 justify-center">
							<AwesomeSocialButton
								type="linkedin"
								:link="{ href: 'https://www.linkedin.com/in/jeremie-zurfluh/' }"
								color="#205c8d"
							/>
							<AwesomeSocialButton
								type="github"
								:link="{ href: 'https://github.com/zurfjereluhmie' }"
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
}
</style>
