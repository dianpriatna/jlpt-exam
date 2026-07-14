<script>
	import { onMount } from 'svelte';

	import { requireAuth } from '$lib/auth/guard';

	import { currentUser } from '$lib/auth/current-user';

	onMount(() => {
		requireAuth();
	});
</script>

<h1 class="text-3xl font-bold">Dashboard</h1>

<p>
	{$currentUser?.email}
</p>
