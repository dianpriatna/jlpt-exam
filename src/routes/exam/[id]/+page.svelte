<script>
	import { page } from '$app/state';

	import { examResolver } from '$lib/resolvers/exam';
	import { ExamSession } from '$lib/session/exam-session';

	import QuestionCard from '$lib/components/exam/QuestionCard.svelte';

	const examId = Number(page.params.id);

	const resolvedExam = examResolver.resolve(examId);

	const session = new ExamSession(resolvedExam);

	let question = $state(session.currentQuestion());

	let selected = $state(null);

	function handleSelect(choiceIndex) {
		session.answer(choiceIndex);

		selected = session.answerSheet.getAnswer(session.current);
	}

	function refresh() {
		question = session.currentQuestion();

		selected = session.answerSheet.getAnswer(session.current);
	}

	function next() {
		session.next();
		refresh();
	}

	function previous() {
		session.previous();
		refresh();
	}
</script>

<p class="mb-4 text-sm opacity-70">
	Soal {session.current + 1} / {resolvedExam.questions.length}
</p>
<QuestionCard {question} {selected} onSelect={handleSelect} />
<div class="mt-6">
	<button class="btn"> Previous </button>

	<button class="btn btn-primary"> Next </button>
</div>
