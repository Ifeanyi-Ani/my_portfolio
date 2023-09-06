import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tumblr,
  tripguide,
  aliexpress,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const projects = [
  {
    name: 'tumblr blog',
    description:
      'Web-based platform that allows users to view, create and manage posts, comment on post, edit thier profile, providing blog functionality.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'blue-text-gradient',
      },
    ],
    image: tumblr,
    demo_link: 'https://tumblr-blog.vercel.app/',
    source_code_link: 'https://github.com/Ifeanyi-Ani/tumblr-blog',
  },
  {
    name: 'Replicate Aliexpress web app',
    description:
      'Web application that performs ecommerce services like view product, add and remove product from cart, etc ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: aliexpress,
    demo_link: '/#',
    source_code_link: 'https://github.com/Ifeanyi-Ani/AliExpress',
  },
  {
    name: 'cloned logicaloperation Landing page',
    description: 'A comprehensive and responsive landing page',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    demo_link: 'https://ifeanyi-ani.github.io/clone-logicaloperation/',
    source_code_link: 'https://github.com/Ifeanyi-Ani/clone-logicaloperation',
  },
];

export { services, technologies, projects };
