import { shuffle } from './shuffle.js';
import { AnswerSheet } from './answer-sheet.js';

export class ExamSession {
	constructor(resolvedExam) {
		this.exam = resolvedExam.exam;

		this.questions = this.exam.randomQuestions
			? shuffle(resolvedExam.questions)
			: [...resolvedExam.questions];

		this.passages = [...resolvedExam.passages];

		this.current = 0;

		this.answerSheet = new AnswerSheet(this.questions.length);
	}

	currentQuestion() {
		return this.questions[this.current];
	}

	next() {
		if (this.current < this.questions.length - 1) {
			this.current++;
		}
	}

	previous() {
		if (this.current > 0) {
			this.current--;
		}
	}

	goto(index) {
		if (index >= 0 && index < this.questions.length) {
			this.current = index;
		}
	}

	answer(choice) {
		this.answerSheet.answer(this.current, choice);
	}

	flag() {
		this.answerSheet.toggleFlag(this.current);
	}

	submit() {
		return {
			examId: this.exam.id,

			answers: this.answerSheet.answers,

			flags: this.answerSheet.flags
		};
	}
}
