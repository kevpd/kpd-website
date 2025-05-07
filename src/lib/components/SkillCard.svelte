<script lang="ts">
	import { page } from '$app/stores';
	import type { Skill } from '$lib/utils/skills';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	export let skill: Skill;
	export let length: number;
	export let position: number;
	export let active: boolean;
	const radius = 120; // radius from center

	const angle = ((2 * Math.PI) / length) * position;
	const x = Math.round(radius * Math.cos(angle));
	const y = Math.round(radius * Math.sin(angle));

	const activeStyle = `top: ${50 + x - 20}px; left:${50 + y - 20}px;`;
	const nonActive = `top: 20px; left: 20px; display:none;`;
</script>

<div class="absolute" style={active ? activeStyle : nonActive}>{skill.name}</div>

<style>
</style>
