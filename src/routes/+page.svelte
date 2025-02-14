<script>
	import Logo from '$lib/components/Logo.svelte';
	import Card from '$lib/components/Card.svelte';
	import { BloodDraw, Phlebotomist, Calendar, BloodDrawB, BloodDrawC } from '$lib/images';

	const cards = [
		{
			title: 'Services',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
			image: BloodDraw,
			link: '/services'
		},
		{
			title: 'About Us',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
			image: Phlebotomist,
			link: '/about'
		},
		{
			title: 'Appointments',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
			image: Calendar,
			link: '/appointments'
		}
	];
</script>

<div class="hero">
	<div class="blob-c">
		<div class="shape-blob"></div>
		<div class="shape-blob one"></div>
		<div class="shape-blob two"></div>
		<div class="shape-blob three"></div>
		<div class="shape-blob four"></div>
		<div class="shape-blob five"></div>
		<div class="shape-blob six"></div>
	</div>
	<div class="content">
		<div class="logo">
			<Logo />
		</div>
		<div class="titleContainer">
			<h1 class="title">Helping Hands</h1>
			<p class="tagline">Mobile Phlebotomy Service</p>
		</div>
	</div>
</div>

<div class="cards">
	{#each cards as cardContent}
		<Card {cardContent} />
	{/each}
</div>

<div class="contentContainer">
	<h2>More Info</h2>
	<div class="imgContainer right"><img src={BloodDrawB} alt="Blood Draw" /></div>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laboriosam ratione earum
		sed dolor, repellat temporibus sequi quae explicabo voluptas aliquam vitae excepturi consectetur
		vero! Modi voluptatum obcaecati incidunt possimus!
	</p>
	<p>
		Inventore cumque accusantium explicabo assumenda rerum provident animi ipsum dicta molestias
		quia, nesciunt, dolor facere. Nobis, quis? Harum possimus iusto nemo, earum, ducimus deleniti
		nihil tempora consequatur, eligendi doloribus omnis.
	</p>
	<p>
		Molestias qui molestiae eos sed eius obcaecati sit autem ratione hic tempora distinctio sapiente
		sunt architecto cumque rerum, veritatis harum tempore natus, numquam velit fugit voluptas magni
		eum aliquam? Vero.
	</p>
	<p>
		Ad ipsum doloremque ea tempora temporibus excepturi magni vel sit? Cupiditate iste quae ipsam
		fuga ratione, itaque fugiat dolores id dolorum blanditiis ex alias temporibus accusantium
		reiciendis quaerat perspiciatis fugit!
	</p>
	<p>
		Quos maxime optio ipsa debitis corrupti soluta quasi harum animi dolor exercitationem blanditiis
		deleniti, quas eveniet accusamus praesentium rem veniam doloremque sequi? Culpa maiores eveniet
		ex debitis, consequatur non cum?
	</p>
	<ul>
		<li>
			<h3>Item 1</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
		</li>
		<li>
			<h3>Item 2</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
		</li>
		<li>
			<h3>Item 3</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
		</li>
	</ul>
</div>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr;
		min-height: 40vh;
		overflow: hidden;
		background: #ededed;
	}
	.content {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		min-height: 100%;
		max-width: 800px;
		place-items: center;
		margin: 0 auto;
		padding: 1rem;
		z-index: 1;
	}
	.title {
		font-size: clamp(2rem, 8vw, 3rem);
		margin: 0;
	}
	.tagline {
		font-size: clamp(1rem, 4vw, 1.7rem);
		font-weight: 200;
		margin: 10px 0 0;
		color: #555;
	}
	.logo {
		width: clamp(100px, 20vw, 200px);
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2.5rem;
		padding: 6vh 1.5rem 2vh;
		max-width: 1800px;
		margin: 0 auto;
	}

	.blob-c {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		min-height: 100%;
		width: 100%;
		filter: blur(0.75vw);
		background: rgba(255, 255, 255, 0.08);
	}

	.shape-blob {
		background-image: radial-gradient(#fff 0%, #dd0000 30%, #dd0000 100%);
		width: clamp(50px, 12vw, 180px);
		aspect-ratio: 7 / 5;
		border-radius: 40% 50% 30% 40%;
		animation:
			transform 18s ease-in-out infinite both alternate,
			movement_one 12s ease-in-out infinite both;
		opacity: 0.45;
		position: absolute;
		left: 80%;
		top: 20%;
	}
	.shape-blob.one {
		background-image: radial-gradient(#fff 0%, #ff9999 30%, #ff9999 100%);
		width: clamp(70px, 14vw, 210px);
		aspect-ratio: 2 / 1.5;
		left: 2rem;
		top: 2rem;
		transform: rotate(-180deg);
		animation:
			transform 8s ease-in-out infinite both alternate,
			movement_two 20s ease-in-out infinite both;
	}
	.shape-blob.two {
		background-image: radial-gradient(#fff 0%, #dd5555 30%, #dd5555 100%);
		width: clamp(40px, 14vw, 160px);
		aspect-ratio: 1 / 1;
		left: 30%;
		top: 50%;
		transform: rotate(-180deg);
		animation:
			transform 10s ease-in-out infinite both alternate,
			movement_two 10s ease-in-out infinite both;
	}

	.shape-blob.three {
		background-image: radial-gradient(#fff 0%, #ff9999 30%, #ff9999 100%);
		width: clamp(50px, 11vw, 140px);
		aspect-ratio: 1 / 1;
		left: 50%;
		top: 20%;
		transform: rotate(-180deg);
		animation:
			transform 7s ease-in-out infinite both alternate,
			movement_two 23s ease-in-out infinite both;
	}

	.shape-blob.four {
		background-image: radial-gradient(#fff 0%, #ff9999 30%, #ff9999 100%);
		width: clamp(40px, 8vw, 110px);
		aspect-ratio: 1 / 1.25;
		left: 75%;
		top: 45%;
		transform: rotate(-180deg);
		animation:
			transform 17s ease-in-out infinite both alternate,
			movement_two 13s ease-in-out infinite both;
	}

	.shape-blob.five {
		background-image: radial-gradient(#fff 0%, #aa0000 30%, #aa0000 100%);
		width: clamp(40px, 8vw, 110px);
		aspect-ratio: 1 / 1.25;
		left: 30%;
		top: 10%;
		transform: rotate(-180deg);
		animation:
			transform 12s ease-in-out infinite both alternate,
			movement_two 18s ease-in-out infinite both;
	}
	.shape-blob.six {
		background-image: radial-gradient(#fff 0%, #ff3333 30%, #ff3333 100%);
		width: clamp(60px, 10vw, 130px);
		aspect-ratio: 1 / 0.75;
		left: 60%;
		top: 70%;
		transform: rotate(-180deg);
		animation:
			transform 5s ease-in-out infinite both alternate,
			movement_two 5s ease-in-out infinite both;
	}
	.imgContainer {
		width: 35%;
		&.right {
			float: right;
			margin: 0 0 1rem 1rem;
		}
	}

	@keyframes transform {
		0%,
		100% {
			border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%;
		}
		20% {
			border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%;
		}
		40% {
			border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%;
		}
		60% {
			border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%;
		}
		80% {
			border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%;
		}
	}

	@keyframes movement_one {
		0%,
		100% {
			transform: none;
		}
		50% {
			transform: translate(50%, 20%) rotateY(10deg) scale(1);
		}
	}

	@keyframes movement_two {
		0%,
		500% {
			transform: none;
		}
		50% {
			transform: translate(50%, 20%) rotate(-200deg) scale(1.3);
		}
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
