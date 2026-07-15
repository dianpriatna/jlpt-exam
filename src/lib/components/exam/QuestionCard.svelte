<script>
	let { question = null } = $props();
</script>

{#if question}
	<div class="card bg-base-100 shadow">
		<div class="card-body">
			<h2 class="card-title">Soal</h2>
			<p>{question.question}</p>
		</div>
	</div>
{:else}
	<div class="alert alert-warning">
		<span>Tidak ada soal.</span>
	</div>
{/if}
