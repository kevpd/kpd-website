<script lang="ts">
	import { page } from '$app/stores';
	import type { Skill } from '$lib/utils/skills';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let skill: Skill;
	export let length: number;
	export let position: number;
	export let active: boolean;
	const radius = 120; // radius from center

	const angle = ((2 * Math.PI) / length) * position;
	const xPos = Math.round(radius * Math.cos(angle));
	const yPos = Math.round(radius * Math.sin(angle));

	const duration = 400;
	const x = tweened(15, { duration, easing: cubicOut });
	const y = tweened(20, { duration, easing: cubicOut });

	// Trigger movement when shouldMove becomes true
	$: if (active) {
		x.set(40 + xPos - 20);
		y.set(55 + yPos - 20);
	} else {
		x.set(15);
		y.set(20);
	}
</script>

<div
	class="absolute px-3 py-2 flex items-center justify-center bg-white text-black rounded-full text-sm z-0"
	style="left: {$x}px; top: {$y}px;"
>
	{skill.name}
</div>

<style>
</style>
