type Recipe = {
	name: string;
	recipeImage: string;
	published: Date;
	description: string;
	tags: string[];
	ingredients: string[];
	steps: string[];
};

const recipeBook: Recipe[] = [
	{
		name: 'White Chocolate Creme Brulle',
		recipeImage: 'DessertWhiteChocolateCremeBrulee.jpeg',
		tags: ['dessert', 'chocolate'],
		published: new Date('January 2019'),
		description: 'A delicious version of creme brule that is chocolaty and wonderful',
		ingredients: [
			'5 egg yolks',
			'2 cups whipping cream',
			'1/3 cup sugar',
			'1 tsp vanilla',
			'90 grams white chocolate'
		],
		steps: [
			'Put oven to 150° (300f)',
			'Beat egg yolks in a large bowl',
			'Chop up white chocolate.',
			'Heat Cream and Sugar in a saucepan until bubbling around edges. (Turn off heat when bubbling)',
			'Put the white chocolate in the cream to melt it. Stir until melted',
			'Add mix of cream and chocolate to beaten egg yolks',
			'Pour into small ramekins and put those in a baking pan',
			'Boil water and fill pan halfway up the sides of the ramekins',
			'Bake for around 30min depending on size of ramekins'
		]
	},
	{
		name: 'Gorgonzola Pasta',
		recipeImage: 'pasta-gorgonzola.webp',
		tags: ['side', 'cheese'],
		published: new Date('January 2019'),
		description: 'Creamy cheesy pasta',
		ingredients: [
			'White Wine',
			'Oregano',
			'Chicken Stock',
			'1 onion',
			'3 cloves of garlic',
			'Salt',
			'Cream Cheese',
			'Gorgonzola or other strong cheese (Optional)',
			'Bacon (Optional)',
			'Salt',
			'Pasta'
		],
		steps: [
			'Finely dice garlic and onion',
			'Cook in olive oil on mediuim heat until they are golden brown',
			'Add in white wine to deglaze the pan. Let wine fully evaporate',
			'Add in chicken stock and oregano let it simmer for 5 minutes',
			'Once chicken stock is hot, add in cream cheese and gorgonzola',
			'Wisk until fully mixed in. (let it thicken to desired level if it is still too liquidy)',
			'Cook Pasta to al dente',
			'When straining keep about a cup or two of pasta water to add to sauce before and after adding pasta.'
		]
	}
	// {
	// 	name: '',
	// 	recipeImage: '',
	// 	published: new Date('January 2019'),
	// 	description: '',
	// 	ingredients: [''],
	// 	steps: ['']
	// }
];
export default recipeBook;
