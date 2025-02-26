<script>
	const areas = [
		'Apollo Beach',
		'Balm',
		'Bradenton',
		'Brandon',
		'Fish Hawk',
		'Gibsonton',
		'Lithia',
		'Parrish',
		'Riverview',
		'Ruskin',
		'Sun City Center',
		'Tampa'
	];
</script>

<svelte:head>
	<script
		type="text/javascript"
		src="https://assets.calendly.com/assets/external/widget.js"
		async
	></script>
	<meta
		name="description"
		content="Schedule your mobile phlebotomy appointment online. Flexible scheduling options available for blood draws in your home, office, or care facility."
	/>
</svelte:head>

<h1 class="pageTitle">Schedule an Appointment</h1>

<div class="contentContainer">
	<p>
		Appointments are conducted at your home or office for your convenience. Please fill out the form
		below to schedule an appointment.
	</p>

	<p>We proudly serve the following Florida cities:</p>

	<ul class="areasList">
		{#each areas as area}
			<li>{area}</li>
		{/each}
	</ul>

	<!-- Calendly inline widget begin -->
	<div
		class="calendly-inline-widget"
		data-url="https://calendly.com/admin-helpinghandsphlebotomy/30min?primary_color=038BC7"
		style="min-width:320px;height:1500px;"
	></div>
	<!-- Calendly inline widget end -->
</div>

<style>
	.areasList {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 0.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
		li {
			background-color: #dedede;
			padding: 0.5rem;
			border-radius: 0.5rem;
			text-align: center;
		}
	}
	.calendly-inline-widget {
		margin-top: 1rem;
	}
</style>
