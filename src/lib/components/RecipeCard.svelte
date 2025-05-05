<script lang="ts">
	import { page } from '$app/stores';
	import type { Experience } from '$lib/utils/workExperience';
	import Icon from '@iconify/svelte';

	export let experience: Experience;
	export let flipped: boolean;
</script>

<div class="p-5" class:bg-neutral-900={flipped}>
	<div class="text-column">
		<div class="md:grid md:grid-cols-3 py-10">
			<a
				href={experience.companyURL}
				target="_blank"
				class="flex items-center"
				class:order-2={flipped}
			>
				<img src={'/images/' + experience.companyIcon} class="w-52" alt="Company Logo" />
			</a>
			<div class="col-span-2">
				<h2 class="text-2xl">{experience.name}</h2>
				<h5 class="text-lg">
					{experience.startDate.getFullYear()} - {experience.endDate.getFullYear()}
				</h5>

				<div class="">
					{#each experience.description as point}
						<span class="pl-6">{point}</span>
						<br />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
