<script>
	let { cardContent } = $props();
</script>

<a href={cardContent.link} class="card">
	<div class="cardImage">
		<img src={cardContent.image} alt={cardContent.title} />
	</div>
	<div class="cardContent">
		<h2 class="cardTitle">{cardContent.title}</h2>
		<p>{cardContent.body}</p>
	</div>
</a>

<style>
	.card {
		display: grid;
		grid-template-columns: [image-start] 2fr [image-end content-start] 3fr [content-end];
		grid-template-rows: 1fr;
		--titleSize: clamp(3rem, 8vw, 8rem);
		background-color: var(--cardBackground);
		color: var(--cardTextColor);
		padding: 2rem 1rem 1rem;
		border-radius: 0.5rem;
		position: relative;
		gap: 2rem;
		box-shadow: 0 0.5rem 1.25rem 0 oklch(0 0 0 / 0.4);
		height: 100%;
		align-items: center;
		@media (max-width: 768px) {
			grid-template-columns: 1fr;
			/* grid-template-rows: [image-start] 1fr [image-end content-start] 1fr [content-end]; */
			gap: 0;
		}
	}

	.cardImage {
		grid-column: image;

		img {
			width: 100%;
		}
	}

	.cardTitle {
		font-size: clamp(2.5rem, 8vw, 2.75rem);
		font-weight: 600;
		color: var(--secondaryColor);
		margin: 0;
		padding: 0;
		position: absolute;
		top: -1.75rem;
		left: 2rem;
		-webkit-text-stroke: var(--cardTitleStroke);
		text-shadow: var(--cardTitleStroke);
		text-align: left;
	}
	.cardContent {
		grid-column: content;
	}
</style>
