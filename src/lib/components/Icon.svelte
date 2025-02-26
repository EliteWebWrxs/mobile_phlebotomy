<script>
	let { name, width = 36, height = 24, color = 'currentColor', classes = '' } = $props();

	const fullClasses = $derived(`icon ${classes}`);
	const iconPath = $derived(`/src/lib/images/phlebotomy-sprites.svg#${name}`);
</script>

<svg class={fullClasses} {width} {height} aria-hidden="true" focusable="false">
	<use href={iconPath} fill={color}></use>
</svg>

<style>
	.icon {
		display: inline-block;
		vertical-align: middle;
	}
</style>
