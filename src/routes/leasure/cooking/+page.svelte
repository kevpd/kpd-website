<script>
	import recipeBook from '$lib/utils/recipeBook';
</script>

<svelte:head>
	<title>Cook Book</title>
	<meta name="description" content="Work experience" />
</svelte:head>

<div class="mx-16">
	<h1 class="text-5xl">Recipe Book</h1>

	{#each recipeBook as recipe, recipeId}
		<div class="m-2 flex flex-col items-center">
			<div class="grid grid-cols-8 gap-4">
				<div class="order-2 col-span-4">
					<h2 class="text-3xl">{recipe.name}</h2>
					<h3 class="text-xl">Ingredients</h3>

					<ul class="m-5">
						{#each recipe.ingredients as ingredient, id}
							<li>
								<input type="checkbox" id={id.toString()} name="ingredient{id}" />
								<label for="ingredient{id}">{ingredient}</label><br />
							</li>
						{/each}
					</ul>
				</div>
				<div class="{recipeId % 2 ? 'order-3' : 'order-1'} col-span-2">
					<img class="w-72 rounded-full" src={'/images/' + recipe.recipeImage} alt="" />
				</div>
				<div class="{!(recipeId % 2) ? 'order-3' : 'order-1'} col-span-2"></div>
			</div>
			<div class="mx-10">
				<h3 class="text-xl">Steps</h3>
				<ul class="mx-6 my-3">
					{#each recipe.steps as step, id}
						<li>
							<input type="checkbox" id={id.toString()} name="step{id}" />
							<label for="step{id}">{step}</label><br />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</div>
