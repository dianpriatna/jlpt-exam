import { grader } from '$lib/grading';

export class ResultBuilder {
	build(session) {
		const grading = grader.grade(session);

		return {
			examId: session.exam.id,

			answers: session.answerSheet.answers,

			score: grading.score,

			correctCount: grading.correct,

			wrongCount: grading.wrong,

			status: 'graded',

			startedAt: session.startedAt,

			submittedAt: new Date().toISOString()
		};
	}
}

export const resultBuilder = new ResultBuilder();
