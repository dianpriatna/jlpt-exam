<script>
	import { page } from '$app/state';

	import { examResolver } from '$lib/resolvers/exam';
	import { ExamSession } from '$lib/session/exam-session';

	const examId = $derived(Number(page.params.id));

	const resolvedExam = $derived(examResolver.resolve(examId));

	const session = $derived(resolvedExam ? new ExamSession(resolvedExam) : null);

	const question = $derived(session ? session.currentQuestion() : null);
</script>

<svelte:head>
	<title>Exam {examId}</title>
</svelte:head>

<h1 class="text-2xl font-bold">
	Exam {examId}
</h1>

{#if question}
	<div class="card bg-base-100 shadow">
		<div class="card-body">
			<h2 class="card-title">Soal Pertama</h2>

			<p>
				{question.question}
			</p>
		</div>
	</div>
{:else}
	<div class="alert alert-error">
		<span>Tidak ada soal.</span>
	</div>
{/if}
