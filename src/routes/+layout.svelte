<script>
	import Header from '../lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="app min-h-screen bg-stone-950 text-white flex flex-col">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="my-auto text-center">
		<p>Copyright @ Kevin Prince Duarte 2024</p>
	</footer>
</div>

<style>
</style>
