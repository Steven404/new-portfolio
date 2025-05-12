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
  'React Native',
  'Angular (14, 17, 19)',
  'Rxjs',
  'Typescript',
  'NodeJS',
  'Express',
  'GraphQL',
  'MongoDB/Mongoose',
  'Oracle SQL/MySQL',
  'PostreSQL',
  'Jest',
  'Cypress',
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
      'In this role, I collaborated with a cross-functional team of developers and QA engineers to maintain and enhance a high-traffic web platform serving thousands of daily active users.',
    dateStarted: new Date('05/15/2023'),
    dateEnded: new Date('09/30/2023'),
    responsibilities: [
      'Developing responsive and accessible front-end components using HTML, CSS, and JavaScript.',
      'Designing and implementing RESTful APIs with Node.js and Express.js to support new platform features',
      'Writing automated integration tests using Jest to ensure the reliability and robustness of back-end services',
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
      'Being a productive member of an Agile team',
      'Developing code for new features and maintaining already existing code based on ReactJS and Typescript',
      'Writing automated e2e and integration tests using Cypress IO',
      'Implementation of CI for automated tests using github actions',
      'Building back-end software using NodeJS and MongoDB',
      'Designing and implementing GraphQL APIs',
      'Writing automated integration tests using Jest',
    ],
  },
  {
    employer: 'Municipality of Thermaikos',
    employerLink: 'https://www.thermaikos.gr/',
    jobTitle: 'IT Support (Internship)',
    location: 'Neoi Epivates, Thessaloniki, Greece',
    description:
      'Six month internship at the municipality of Thermaikos. This internship was part of my studies at the Technological Education Institute I was attending. My position was IT support',
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
      'Currently employed as a Full Stack Software Engineer, I work across a wide range of web and mobile technologies, contributing to both new development and ongoing maintenance of applications.',
    dateStarted: new Date('10/01/2023'),
    responsibilities: [
      'Developing complex mobile applications using React Native, with a strong focus on React hooks for state and lifecycle management',
      'Building and maintaining a form submission web application using Angular 17 with RxJS for reactive state management on the front end, and Express.js with PostgreSQL for back-end services, including authentication and data storage',
      'Maintaining and adding new features to a legacy mobile application built with HTML, CSS, and JavaScript, deployed via an Android wrapper',
      'Designing and developing a modern information management web application using Angular 19 with Signals for state handling, backed by Firebase Firestore and Firebase Authentication for real-time data and secure access control',
    ],
  },
];
