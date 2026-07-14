<script>
	import Navbar from './Navbar.svelte';
	import Drawer from './Drawer.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />

	<div class="flex flex-1">
		<Drawer />

		<main class="flex-1 p-6">
			{@render children()}
		</main>
	</div>

	<Footer />
</div>
