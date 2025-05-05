<script lang="ts">
	import { page } from '$app/stores';
	import type { Skill } from '$lib/utils/skills';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	export let skill: Skill;
</script>

<div
	class="px-3 py-2 bg-white text-black flex justify-center rounded-2xl w-auto text-sm"
	in:fly={{ x: 100, duration: 400, delay: 400 }}
>
	{skill.name}
</div>

<style>
</style>
