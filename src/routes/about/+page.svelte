<script>
	import { Louwana } from '$lib/images';
</script>

<svelte:head>
	<meta
		name="description"
		content="Licensed and experienced mobile phlebotomists providing safe, convenient blood drawing services. Learn about our commitment to quality care and patient comfort."
	/>
</svelte:head>

<h1 class="pageTitle">About</h1>

<div class="contentContainer">
	<div class="imgContainer right"><img src={Louwana} alt="Louwana" /></div>
	<p>
		I have always had a deep passion for healthcare and a commitment to making medical services more
		accessible and convenient for everyone. Throughout my career, I have seen firsthand how
		difficult it can be for patients—especially those who are sick, elderly, or have limited
		mobility—to access essential lab services. Too often, patients struggle to reach a draw station,
		sometimes waiting hours for transportation just to get the lab work their doctors have ordered.
		Seeing these challenges inspired me to take action.
	</p>

	<p>
		That’s why I founded Helping Hands Mobile Phlebotomy—to bring the lab to you. My goal is to
		provide a compassionate, stress-free experience by offering high-quality phlebotomy services in
		the comfort of your home. With experience spanning both pediatric and geriatric care, I’ve had
		the privilege of working with patients at every stage of life. My journey began in pediatrics,
		where I spent years supporting children and their families in hospitals and outpatient clinics.
		Later, I transitioned to geriatric care, working in nursing homes and assisted living facilities
		to enhance the quality of life for older adults through compassionate, patient-centered care.
	</p>
	<p>
		I believe that no one should have to choose between their health and the challenges of getting
		to a lab. At Helping Hands Mobile Phlebotomy, I am dedicated to ensuring that you receive the
		care you need—wherever you are.
	</p>
</div>

<style>
	.imgContainer {
		width: 30%;
		@media (max-width: 500px) {
			width: 100%;
			.right {
				float: none;
			}
		}
	}
	p {
		margin-top: 0;
	}
</style>
