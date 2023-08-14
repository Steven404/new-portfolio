export const pages = [
  {
    pageName: 'About Me',
    pageUrl: 'aboutMe',
  },
  {
    pageName: 'Work Experience',
    pageUrl: 'workExperience',
  },
  {
    pageName: 'My Projects',
    pageUrl: 'myProjects',
  },
  {
    pageName: 'Contact Info',
    pageUrl: 'contactInfo',
  },
] as const

export type PageUrl = (typeof pages)[number]['pageUrl'] | ''

export const technologies: Array<string> = [
  'ReactJS/NextJS',
  'Angular 14',
  'Rxjs',
  'Typescript',
  'Cypress',
  'NodeJS',
  'Express',
  'GraphQL',
  'MongoDB/Mongoose',
  'Oracle SQL/MySQL',
  'Jest',
]

export interface WorkExperienceType {
  employer: string
  jobTitle: string
  location: string
  description: string
  dateStarted: Date
  dateEnded?: Date
  responsibilities?: Array<string>
}

export const workExperience: Array<WorkExperienceType> = [
  {
    employer: 'Valmore Technologies',
    jobTitle: 'Full Stack Software Engineer',
    location: 'Remote',
    description:
      'I am currently working as a Full Stack Software engineer, working in a team that maintains and develops features for a web platform with thousands of daily active users.',
    dateStarted: new Date('05/15/2023'),
    responsibilities: [
      'Develop HTML/CSS/JavaScript code as a front-end Engineer',
      'Build back-end software using NodeJS, express and MongoDB.',
    ],
  },
  {
    employer: 'Flarmio',
    jobTitle: 'Software Engineer',
    location: 'Remote',
    description:
      'In this role I was part of a team that maintained a web application with hundreds of users while helping out a second team with the development of a mobile application.',
    dateStarted: new Date('03/28/2022'),
    dateEnded: new Date('05/11/2023'),
    responsibilities: [
      'Be a productive part of an Agile team.',
      'Develop new features and maintain already existing code for pre-existing features based on ReactJS/NextJS and Typescript.',
      'Write automated e2e and integration tests using Cypress IO.',
      'Implement CI for automated tests using github actions.',
      'Build back-end software using NodeJS, express and MongoDB.',
      'Design and implement GraphQL APIs',
    ],
  },
  {
    employer: 'Municipality of Thermaikos',
    jobTitle: 'IT Support (Internship)',
    location: 'Neoi Epivates, Thessaloniki, Greece',
    description:
      'Six month internship at the municipality of Thermaikos. This internship was part of my studies at the Technological Education Institute I was attending. My position was IT support.',
    dateStarted: new Date('05/01/2021'),
    dateEnded: new Date('10/31/2021'),
  },
]
