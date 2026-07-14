<script>
	import { page } from '$app/state';

	const examId = $derived(page.params.id);
</script>

<h1 class="text-2xl font-bold">
	Exam {examId}
</h1>

<p class="mt-2 text-base-content/70">Exam page is ready.</p>
