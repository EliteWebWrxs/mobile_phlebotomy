<script>
	import Logo from '$lib/components/Logo.svelte';
	import { page } from '$app/state';

	const pages = [
		{ name: 'Services', href: '/services' },
		{ name: 'About', href: '/about' },
		{ name: 'Appointments', href: '/appointments' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'FAQ', href: '/faq' }
	];

	const currentPath = $derived(page.url.pathname);
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
				<li class={page.href === currentPath ? 'active' : ''}>
					<a href={page.href}>{page.name}</a>
				</li>
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
		width: clamp(3rem, 5vw, 5.5rem);
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
		color: #333;
		position: relative;
		transition: scale 0.3s ease;
		&:hover {
			scale: 1.1;
		}
		&:after {
			content: '';
			display: block;
			width: 0;
			height: 2px;
		}
		&.active {
			color: var(--secondaryColor);
			&:after {
				content: '';
				display: block;
				width: 100%;
				height: 2px;
				background-color: var(--secondaryColor);
				transition: width 0.3s ease;
			}
		}
	}

	nav ul li a {
		text-decoration: none;
		color: inherit;
	}
</style>
