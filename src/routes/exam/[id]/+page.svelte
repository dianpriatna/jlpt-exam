<script>
	import { page } from '$app/state';
	import { examResolver } from '$lib/resolvers/exam';

	const examId = $derived(Number(page.params.id));

	const resolvedExam = $derived(examResolver.resolve(examId));
</script>

<svelte:head>
	<title>Exam {examId}</title>
</svelte:head>

<h1 class="text-2xl font-bold">
	Exam {examId}
</h1>

{#if resolvedExam}
	<p class="text-success">✓ Exam berhasil di-resolve</p>
{:else}
	<p class="text-error">✗ Exam tidak ditemukan</p>
{/if}
