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
	<div class="alert alert-success">
		<span>✓ Exam berhasil di-resolve.</span>
	</div>

	<ul class="list-disc pl-6 mt-4">
		<li>Exam : {resolvedExam.exam.title}</li>

		<li>Questions : {resolvedExam.questions.length}</li>

		<li>Passages : {resolvedExam.passages.length}</li>
	</ul>
{:else}
	<div class="alert alert-error">
		<span>✗ Exam tidak ditemukan.</span>
	</div>
{/if}
