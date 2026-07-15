<script>
	let { choices = [], selected = null, onSelect = () => {} } = $props();
</script>

<ul class="space-y-2">
	{#each choices as choice, i}
		<ChoiceItem {choice} index={i} {selected} onclick={() => onSelect(i)} />
	{/each}
</ul>
