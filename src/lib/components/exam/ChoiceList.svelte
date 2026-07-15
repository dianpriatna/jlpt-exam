<script>
	let { choices = [] } = $props();
</script>

<ul class="space-y-2">
	{#each choices as choice}
		<li>
			<label class="flex items-center gap-2">
				<input type="radio" name="answer" />
				<span>{choice}</span>
			</label>
		</li>
	{/each}
</ul>
