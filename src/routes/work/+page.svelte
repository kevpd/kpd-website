<script>
	import WorkCard from '$lib/components/WorkCard.svelte';
	import { workExperience } from '$lib/utils/workExperience';
</script>

<svelte:head>
	<title>Work</title>
	<meta name="description" content="Work experience" />
</svelte:head>

<div class="mx-5 lg:mx-2">
	<h1 class="mt-5">Work and Project Experience</h1>
	<p class="flex justify-center text-center">
		Throughout the years I have worked to better my practices and to create scalable and extendable
		services that are able to last for years.
	</p>

	<p>
		{#each workExperience as experience, i}
			<WorkCard {experience} flipped={i % 2 !== 0}></WorkCard>
		{/each}
	</p>
</div>
