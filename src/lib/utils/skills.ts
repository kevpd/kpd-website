type Skill = {
	name: string;
	years: number;
};

type SkillCategory = {
	name: string;
	skills: Skill[];
};

const skillList: SkillCategory[] = [
	{
		name: 'Frontend',
		skills: [
			{
				name: 'Svelte',
				years: 2
			},
			{
				name: 'HTML',
				years: 8
			},
			{
				name: 'JS/TS',
				years: 8
			},
			{
				name: 'CSS',
				years: 8
			},
			{
				name: 'Vue',
				years: 5
			},
			{
				name: 'React',
				years: 4
			},
			{
				name: 'Angular',
				years: 1
			}
		]
	},
	{
		name: 'Backend',
		skills: [
			{
				name: 'PHP',
				years: 5
			},
			{
				name: 'Python',
				years: 6
			},
			{
				name: 'Node',
				years: 5
			},
			{
				name: 'Express',
				years: 5
			},
			{
				name: 'Laravel',
				years: 3
			},
			{
				name: 'Magento',
				years: 3
			},
			{
				name: 'Java',
				years: 2
			},
			{
				name: 'OOP',
				years: 7
			}
		]
	},
	{
		name: 'CI/CD',
		skills: [
			{
				name: 'AWS',
				years: 3
			},
			{
				name: 'Terraform',
				years: 2
			},
			{
				name: 'Ansible',
				years: 2
			},
			{
				name: 'Git',
				years: 2
			},
			{
				name: 'Docker',
				years: 3
			},
			{
				name: 'Jest',
				years: 2
			}
		]
	}
];

export { skillList, type SkillCategory, type Skill };
