type Experience = {
	name: string;
	role: string;
	startDate: Date;
	endDate: Date;
	description: string[];
	picture: string;
	companyIcon: string;
	companyURL: string;
};

const workExperience: Experience[] = [
	{
		name: 'Full Stack Developer',
		role: 'Mabels Labels',
		startDate: new Date('10/10/2021'),
		endDate: new Date('07/01/2024'),
		description: [
			'Worked on the mabels labels software development team for close to 3 years. Created various different forms of software solutions for the business and also worked heavily on their eccomerce platform.',
			'Worked closely with SVG manipulation as a method of delivering customization of products on the frontend.',
			'Learned a lot of dev ops due to our systems being tied into the functionality of AWS. Left with a far greater understanding of PHP frameworks as well as working with AWS and terraform.'
		],
		picture: 'eloraPortal.png',
		companyIcon: 'mabelslabels.png',
		companyURL: 'https://mabelslabels.ca'
	},
	{
		name: 'Team Lead Developer',
		role: 'OMAFRA',
		startDate: new Date('12/31/2019'),
		endDate: new Date('10/10/2021'),
		description: [
			'Was hired by OMAFRA in November but officially started in January.',
			'Created system to extract and upload sensor data from multiple farms onto a portal for researchers to download and interpret.',
			'Led the developement of the tasks that were requested by stakeholders while also time managing the team for on target deadlines. Made most of the system Object Oriented with the main priority of scalability as OMAFRA will continue to add more and more different farms to the system as time goes on.'
		],
		picture: 'eloraPortal.png',
		companyIcon: 'agrifood.png',
		companyURL:
			'https://www.uoguelph.ca/alliance/news/2023/10/u-g-project-improves-dairy-cattle-health-helps-test-new-data-portal'
	},
	{
		name: 'Bar Inventory App',
		role: 'Personal Project',
		startDate: new Date('01/01/2019'),
		endDate: new Date('12/31/2025'),
		description: [
			"Idea was initially developed to help a family member's business.",
			'The front-end was written as a Vue+Typescript project to do a proof of Object Oriented programming in Typescript. The backend was a flask python RESTful API which interacted with a SQL database.',
			'This system is intended to track the movement of inventory amongst different bars within a club. I am currently still working on improoving the UI and adding backend features for analysis and data collection',
			'Keep their website up to date using wordpress'
		],
		picture: 'barInventory.png',
		companyIcon: 'kiay.png',
		companyURL: 'https://kiay.com'
	},
	{
		name: 'Fruit/Vegetable Ripeness Detection',
		role: 'School Project',
		startDate: new Date('02/01/2019'),
		endDate: new Date('04/01/2019'),
		description: [
			'Project was made initially to detect ripe tomatos but then converted to detect ripe bananas. It was written in python (not the best choice in terms of application speed).',
			'Used hue color space to segment out different colors in the image that werent of a banana. Then analysed shapes in the image using canny edge detection.',
			'Once there were only bananas in the image the item would rate the fruits ripeness through analysis of the Hue color spectrum.'
		],
		picture: 'bananaAlgorithm.png',
		companyIcon: 'UoGlogo.png',
		companyURL: 'https://uoguelph.ca'
	},
	{
		name: 'Space Invaders in C',
		role: 'School Project',
		startDate: new Date('02/01/2019'),
		endDate: new Date('02/01/2019'),
		description: [
			'This project was a part of a class in school. It was written in C and OpenGL for the graphics',
			'One of the more fun projects that I made throughout University which featured shooting, collision detection, acceleration physics game scores.'
		],
		picture: 'spaceInvaders.png',
		companyIcon: 'UoGlogo.png',
		companyURL: 'https://uoguelph.ca'
	}
];

export { workExperience, type Experience };
