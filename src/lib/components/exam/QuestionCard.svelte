<script>
	import ChoiceList from './ChoiceList.svelte';

	let { question = null } = $props();
</script>

{#if question}
	<div class="card bg-base-100 shadow">
		<div class="card-body">
			<h2 class="card-title">Soal</h2>

			<p>{question.question}</p>

			<ChoiceList choices={question.choices} />
		</div>
	</div>
{:else}
	<div class="alert alert-warning">Tidak ada soal.</div>
{/if}
