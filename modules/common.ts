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
    pageName: 'Contact ',
    pageUrl: 'contact',
  },
] as const;

export type PageUrl = (typeof pages)[number]['pageUrl'] | '';

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
];

export interface WorkExperienceType {
  employer: string;
  employerLink: string;
  jobTitle: string;
  location: string;
  description: string;
  dateStarted: Date;
  dateEnded?: Date;
  responsibilities?: Array<string>;
}

export const workExperience: Array<WorkExperienceType> = [
  {
    employer: 'Valmore Technologies',
    employerLink: 'https://www.valmore.gr/',
    jobTitle: 'Full Stack Software Engineer',
    location: 'Remote',
    description:
      'In this role I was collaborating with other developers and testers in a team that maintained and developed features for a web platform with thousands of daily active users.',
    dateStarted: new Date('05/15/2023'),
    dateEnded: new Date('09/30/2023'),
    responsibilities: [
      'Develop HTML/CSS/JavaScript code as a front-end Engineer',
      'Design and implement APIs with NodeJS and ExpressJS',
      'Write automated integration tests using Jest',
    ],
  },
  {
    employer: 'Flarmio',
    employerLink: 'https://www.flarmio.com/',
    jobTitle: 'Software Engineer',
    location: 'Remote',
    description:
      'In this role I was part of a team that maintained a web application with hundreds of users while helping out a second team with the development of a mobile application.',
    dateStarted: new Date('03/28/2022'),
    dateEnded: new Date('05/11/2023'),
    responsibilities: [
      'Be a productive part of an Agile team',
      'Develop new features and maintain already existing code for pre-existing features based on ReactJS/NextJS and Typescript',
      'Write automated e2e and integration tests using Cypress IO',
      'Implement CI for automated tests using github actions',
      'Build back-end software using NodeJS, express and MongoDB',
      'Design and implement GraphQL APIs',
    ],
  },
  {
    employer: 'Municipality of Thermaikos',
    employerLink: 'https://www.thermaikos.gr/',
    jobTitle: 'IT Support (Internship)',
    location: 'Neoi Epivates, Thessaloniki, Greece',
    description:
      'Six month internship at the municipality of Thermaikos. This internship was part of my studies at the Technological Education Institute I was attending. My position was IT support.',
    dateStarted: new Date('05/01/2021'),
    dateEnded: new Date('10/31/2021'),
    responsibilities: [
      'Troubleshoot hardware and software',
      'Cooporate with my supervisor while working on solutions',
      'Communicate with coleagues and walk them through solutions to their technical problems',
    ],
  },
  {
    employer: 'Kanellis Development Labs',
    employerLink: 'https://kdevlabs.com/',
    jobTitle: 'Full Stack Software Engineer',
    location: 'Remote',
    description:
      '',
    dateStarted: new Date('10/01/2023'),
    responsibilities: [
      'Maintain and develop code for an android app that utilizes a webview application which is based on HTML/CSS and JavaScript. More specifically, the front end runs mostly on Vanilla HTML/CSS and JavaScript while the backend runs on an ExpressJS API that retrieves and modifies data from a MySQL database',
      'Research and develop Angular code utilizing RxJS and PrimeNG libraries while keeping documentation for future usages',
      'Development of a mobile application portal based on React Native while utilizing a simple Google Firebase RTDB back end',
    ],
  },
];
