<script>
	import SkillCategoryCard from '$lib/components/SkillCategoryCard.svelte';
	import WorkOrPlay from '$lib/components/WorkOrPlay.svelte';
	import kp_name from '$lib/images/NameTag.png';
	import { skillList } from '$lib/utils/skills';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="About Me" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section class="lato-regular text-white flex flex-col justify-start">
	<h1>
		<img src={kp_name} alt="Kevin Prince Duarte" />
	</h1>

	<div class="">
		<div class="flex items-center justify-center">
			<!-- <div class="flex gap-4 flex-wrap mx-10 justify-center"> -->
			{#each skillList as skillCategory}
				<SkillCategoryCard {skillCategory}></SkillCategoryCard>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
