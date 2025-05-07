<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<header class="flex items-center justify-center gap-8 mt-6">
	<div class="corner">
		<a href="/">
			<Icon icon="solar:crown-bold-duotone" class="text-5xl" />
		</a>
	</div>

	<nav>
		<ul class="flex gap-4">
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/work">Work</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/leasure">Leasure</a>
			</li>
		</ul>
	</nav>

	<div>
		<a href="https://github.com/kevpd" target="_blank">
			<Icon icon="mdi:github" class="text-5xl" />
		</a>
	</div>
</header>

<style>
</style>
