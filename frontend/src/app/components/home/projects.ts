import { WeerdenProject } from '../projects/project.model';

const fedex: WeerdenProject = {
  name: 'fedex',
  title: 'FedEx - International shipment form',
  featured: true,

  techStack: ['TypeScript', 'Angular 11', 'RxJS', 'cypress', 'playwright', 'karma', 'Jenkins'],

  summary: `At FedEx I’ve worked on making the international shipment platform mobile friendly and I’ve worked on implementing the healthcare
  clinical trials shipment form where medical equipment can be shipped. Tech stack included: Angular (version 11), RxJS, Ngx, Gitlab, Jenkins
  and custom internal tooling.`,

  description: `At FedEx I’ve worked on making the international shipment platform mobile friendly and I’ve worked on implementing the healthcare
  clinical trials shipment form where medical equipment can be shipped. Tech stack included: Angular (version 11), RxJS, Ngx, Gitlab, Jenkins
  and custom internal tooling.`,

  featuredImage: './assets/images/projects/fedex/fedex.png',
  impressions: [],
};

const vattenfall: WeerdenProject = {
  name: 'vattenfall',
  title: 'Vattenfall - Mijn Vattenfall',
  featured: false,

  techStack: ['TypeScript', 'Angular 8, 9 & 10', 'nx', 'Storybook', 'redux', 'RxJS', 'cypress', 'jest', 'Monorepo', 'AngularJS'],

  summary: `At Vattenfall I've worked on the redesign from Nuon to Vattenfall. The redesign contained rebuilding
                the whole Mijn Vattenfall application from AngularJS to Angular and changing the look and feel from the
                old Nuon style to that of Vattenfall.`,

  description: `At Vattenfall I've worked on the redesign from Nuon to Vattenfall. The redesign contained rebuilding
                the whole Mijn Vattenfall application from AngularJS to Angular and changing the look and feel from the
                old Nuon style to that of Vattenfall.
                I've contributed to an internal component library with generic components that could be used across the
                company for multiple applications.`,
  featuredImage: './assets/images/projects/vattenfall/vattenfall.png',
  impressions: [
    {
      imageUrl: './assets/images/projects/vattenfall/mijn-vattenfall-home.png',
      alt: 'Mijn Vattenfall - Home'
    },
    {
      imageUrl: './assets/images/projects/vattenfall/mijn-vattenfall-login.png',
      alt: 'Mijn Vattenfall - Login'
    },
    {
      imageUrl: './assets/images/projects/vattenfall/mijn-vattenfall-password-forgotten.png',
      alt: 'Mijn Vattenfall - Password forgotten'
    }
  ],
  url: 'https://www.vattenfall.nl/service/mijn-vattenfall'
};

const rabobank: WeerdenProject = {
  name: 'rabobank',
  title: 'Rabobank - Mobile banking app (investment module)',
  featured: false,

  techStack: ['TypeScript', 'Angular 6', 'NodeJS', 'MongoDB', 'ramda', 'd3', 'lerna', 'Monorepo', 'AngularJS'],

  summary: `At the Rabobank I've worked on the investment module/sub-application within the mobile
                banking application.`,

  description: `At the Rabobank I've worked on the investment module/sub-application within the mobile
                banking application. At first the investment application was a seperate hybrid app in the app store.
                This was later merged into the general mobile banking app and while merging the application almost all
                features were rebuilt. Most definitely one of my favorite projects!`,
  featuredImage: './assets/images/projects/rabobank/rabobank.png',
  impressionVideo: 'https://www.youtube.com/embed/5lCqExOBUXg'
};

const growthKeeper: WeerdenProject = {
  name: 'growth-keeper',
  title: 'Growth keeper',
  featured: false,

  techStack: ['Angular 4', 'MongoDB', 'Express', 'NodeJS', 'TypeScript'],

  summary: `Growth keeper was a side project I did in the winter of 2017 when the crypto market hype was at it's peak.`,

  description: `Growth keeper was a side project I did in the winter of 2017 when the crypto market hype
                was at it's peak. It's goal was to track and give scores to tokens that moved up in the coinmarketcap
                ranking. Though it's not fully operational anymore, it's still a project I very much enjoyed
                doing. 😄`,
  featuredImage: './assets/images/projects/growth-keeper/growth-keeper.jpeg',
  url: 'https://growth-keeper.herokuapp.com/'
};

const tippiq: WeerdenProject = {
  name: 'tippiq',
  title: 'Tippiq',
  featured: false,

  techStack: ['AngularJS', 'NodeJS', 'Express', 'PostgreSQL'],

  summary: `At the Tippiq website you could see what was going on in your neighbourhood. The job was fullstack though I mainly worked on the frontend of the webapp.`,

  description: `At the Tippiq website you could see what was going on in your neighbourhood.
                The job was fullstack though I mainly worked on the frontend of the webapp. The frameworks used on the
                frontend were AngularJS in combination with Bootstrap. On the backend it was NodeJS with ExpressJS and
                the database ran on PostgreSQL.`,
  featuredImage: './assets/images/projects/tippiq/tippiq.png',
};

export const projects = [fedex, vattenfall, rabobank, growthKeeper, tippiq];
