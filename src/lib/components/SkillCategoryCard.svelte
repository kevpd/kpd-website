<script lang="ts">
	import { page } from '$app/stores';
	import type { Skill, SkillCategory } from '$lib/utils/skills';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import SkillCard from './SkillCard.svelte';

	export let skillCategory: SkillCategory;
	const length = skillCategory.skills.length;
	const radius = 120; // radius from center
	let active = false;
</script>

<div class="relative m-32">
	<div
		on:mouseenter={() => (active = true)}
		on:mouseleave={() => (active = false)}
		role="group"
		class="w-24 h-24 flex items-center justify-center bg-white text-black rounded-full w-auto text-sm lg:z-10"
	>
		{skillCategory.name}
	</div>

	{#each skillCategory.skills as skill, position}
		<SkillCard {skill} {position} {length} {active} />
	{/each}
</div>

<style>
</style>
