<script>
	import { page } from '$app/state';
	import { examResolver } from '$lib/resolvers/exam';
	import { ExamSession } from '$lib/session/exam-session';
	import QuestionCard from '$lib/components/exam/QuestionCard.svelte';

	const examId = $derived(Number(page.params.id));
	const resolvedExam = $derived(examResolver.resolve(examId));
	const session = $derived(resolvedExam ? new ExamSession(resolvedExam) : null);
	const question = $derived(session ? session.currentQuestion() : null);
</script>

<QuestionCard {question} />
