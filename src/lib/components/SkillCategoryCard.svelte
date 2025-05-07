<script lang="ts">
	import { page } from '$app/stores';
	import type { Skill, SkillCategory } from '$lib/utils/skills';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import SkillCard from './SkillCard.svelte';
	import { onMount } from 'svelte';

	export let skillCategory: SkillCategory;
	const length = skillCategory.skills.length;
	const radius = 120; // radius from center
	let active = false;
	let isMobile = false;

	onMount(() => {
		const checkSize = () => {
			isMobile = window.matchMedia('(max-width: 768px)').matches;
		};

		checkSize(); // initial check
		window.addEventListener('resize', checkSize);

		return () => {
			window.removeEventListener('resize', checkSize);
		};
	});
</script>

<div class="relative m-32">
	<div
		on:mouseenter={() => (active = true)}
		on:mouseleave={() => (active = false)}
		role="group"
		class="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center regularBackground text-black rounded-full font-bold z-10 relative"
		class:active={active || isMobile}
	>
		{skillCategory.name}
	</div>

	{#each skillCategory.skills as skill, position}
		<SkillCard {skill} {position} {length} active={active || isMobile} />
	{/each}
</div>

<style>
	.regularBackground {
		background-color: white;
		box-shadow: none;
		transition:
			background-color 0.5s ease,
			box-shadow 0.5s ease;
	}

	.active {
		background-color: rgb(215, 186, 0);
		box-shadow: 0px 0px 10px 0px rgb(255, 255, 0);
	}
</style>
