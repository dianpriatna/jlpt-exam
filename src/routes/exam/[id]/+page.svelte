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
		selected = choiceIndex;
		session.answer(choiceIndex);
	}

	function refresh() {
		question = session.currentQuestion();
		selected = null;
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

<QuestionCard {question} {selected} onSelect={handleSelect} />
