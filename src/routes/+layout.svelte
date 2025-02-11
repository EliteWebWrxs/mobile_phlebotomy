<script>
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import '$lib/css/reset.css';
	import '$lib/css/styles.css';
	let { data, children } = $props();
</script>

<Header />

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#key data.pathname}
	<div in:fade={{ duration: 150, delay: 155 }} out:fade={{ duration: 150 }} class="contentWrapper">
		{@render children?.()}
	</div>
{/key}
