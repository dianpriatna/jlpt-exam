<script>
	import { page } from '$app/state';

	import { examResolver } from '$lib/resolvers/exam';
	import { ExamSession } from '$lib/session/exam-session';

	const examId = $derived(Number(page.params.id));

	const resolvedExam = $derived(examResolver.resolve(examId));

	const session = $derived(resolvedExam ? new ExamSession(resolvedExam) : null);

	const currentQuestion = $derived(session ? session.currentQuestion() : null);
</script>

<svelte:head>
	<title>Exam {examId}</title>
</svelte:head>

<div class="space-y-6">
	<h1 class="text-3xl font-bold">
		Exam {examId}
	</h1>

	{#if currentQuestion}
		<div class="card bg-base-100 shadow">
			<div class="card-body">
				<h2 class="card-title">Soal 1</h2>

				<p>
					{currentQuestion.question}
				</p>
			</div>
		</div>
	{:else}
		<div class="alert alert-error">Tidak ada soal.</div>
	{/if}
</div>
