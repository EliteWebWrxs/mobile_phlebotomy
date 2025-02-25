<script>
	import { fade } from 'svelte/transition';
	import { Doctors, holdingHands, WithPatient, WithPatient2 } from '$lib/images';
</script>

<svelte:head>
	<meta
		name="description"
		content="Comprehensive mobile phlebotomy services for healthcare partners, individuals, physicians, and senior care facilities. Professional blood drawing services at your location."
	/>
</svelte:head>

<div class="servicesContainer">
	<h1>Our Services</h1>

	<section class="serviceSection" in:fade={{ duration: 500 }}>
		<h2>Home Healthcare Partners</h2>
		<div class="serviceSectionContent">
			<div class="serviceSectionText">
				<p>
					We collaborate seamlessly with Home Health Care Agencies, Physicians, and Health
					Maintenance Organizations. Our mobile service extends to:
				</p>
				<ul>
					<li>Private residences</li>
					<li>Long-term care facilities</li>
					<li>Care centers</li>
					<li>Workplace locations</li>
				</ul>
				<p>Each service is tailored to meet the unique needs of individual patients.</p>
			</div>
			<div class="imgContainer">
				<img src={WithPatient2} alt="With Patient" />
			</div>
		</div>
	</section>

	<section class="serviceSection" in:fade={{ duration: 500, delay: 200 }}>
		<h2>Individual Care</h2>
		<div class="serviceSectionContent">
			<div class="serviceSectionText">
				<p>
					Transform your laboratory experience by bringing the lab to you. Our service eliminates
					the stress of traveling to a facility, allowing you to remain comfortable in your own home
					while our skilled phlebotomists perform your blood draw. We handle the entire process,
					from collection to prompt laboratory delivery.
				</p>
			</div>
			<div class="imgContainer">
				<img src={holdingHands} alt="Holding Hands" />
			</div>
		</div>
	</section>

	<section class="serviceSection" in:fade={{ duration: 500, delay: 400 }}>
		<h2>Physician Services</h2>
		<div class="serviceSectionContent">
			<div class="serviceSectionText">
				<p>
					We pride ourselves on building strong partnerships with healthcare providers. Our flexible
					service model adapts to each physician's specific requirements, ensuring seamless
					integration with their practice. As industry leaders, we strive to be the preferred
					laboratory partner across all counties we serve.
				</p>
			</div>
			<div class="imgContainer">
				<img src={Doctors} alt="Doctor and Phlebotomist" />
			</div>
		</div>
	</section>

	<section class="serviceSection" in:fade={{ duration: 500, delay: 600 }}>
		<h2>Senior Care Facilities</h2>
		<div class="serviceSectionContent">
			<div class="serviceSectionText">
				<p>
					Specializing in assisted living and skilled nursing facilities, we provide essential
					on-site blood collection services for residents. Our streamlined process ensures:
				</p>
				<ul>
					<li>Minimal disruption to facility routines</li>
					<li>Quick turnaround times for test results</li>
					<li>Clear communication with facility staff</li>
					<li>Gentle, experienced care for senior patients</li>
				</ul>
			</div>
			<div class="imgContainer">
				<img src={WithPatient} alt="With Patient" />
			</div>
		</div>
	</section>
</div>

<style>
	.servicesContainer {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		text-align: center;
		margin-bottom: 3rem;
		color: var(--secondaryColor);
	}

	.serviceSection {
		background: #f9f9f9;
		border-radius: 10px;
		padding: 2rem;
		margin-bottom: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		container-type: inline-size;
	}

	h2 {
		color: var(--secondaryColor);
		margin-bottom: 1rem;
	}

	ul {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	p {
		line-height: 1.6;
		margin-top: 0;
		margin-bottom: 1rem;
	}

	.serviceSectionContent {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2rem;
		@container (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}
</style>
