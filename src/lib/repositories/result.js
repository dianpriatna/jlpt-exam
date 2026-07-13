import { results } from '$lib/data/results';

export class ResultRepository {
	findAll() {
		return results;
	}

	findById(id) {
		return results.find((result) => result.id === id) ?? null;
	}
}

export const resultRepository = new ResultRepository();
