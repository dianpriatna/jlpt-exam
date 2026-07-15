<script>
	import { page } from '$app/state';

	const examId = $derived(page.params.id);
</script>

<svelte:head>
	<title>Exam {examId}</title>
</svelte:head>

<h1 class="text-2xl font-bold">
	Exam {examId}
</h1>

<p class="text-base-content/70">Sprint 9.1 - Exam Route Ready</p>
