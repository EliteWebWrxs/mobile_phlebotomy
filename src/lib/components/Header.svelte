<script>
	import Logo from '$lib/components/Logo.svelte';

	const pages = [
		{ name: 'Services', href: '/services' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'FAQ', href: '/faq' }
	];
</script>

<header>
	<div class="logoContainer">
		<a href="/">
			<Logo />
		</a>
	</div>
	<nav>
		<ul>
			{#each pages as page}
				<li><a href={page.href}>{page.name}</a></li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
	}

	.logoContainer {
		width: 5rem;
		--taglineDisplay: none;
		--companyNameDisplay: none;
		aspect-ratio: 1 / 1;
		overflow: hidden;
	}

	nav ul {
		display: flex;
		gap: 2rem;
	}

	nav ul li {
		list-style: none;
		font-size: 1.2rem;
	}
</style>
