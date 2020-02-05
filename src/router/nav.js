import { Homepage, SinglePage, Contact, About } from 'pages';

const nav = [
  {
    exact: true,
    title: 'Single Page',
    component: SinglePage,
    path: '/singlepage'
  },
  {
    exact: true,
    title: 'Blog',
    component: SinglePage,
    path: '/blog'
  },
  {
    exact: true,
    title: 'About',
    component: SinglePage,
    path: '/about'
  },
  {
    exact: true,
    title: 'Contact',
    component: SinglePage,
    path: '/contact'
  },
  {
    exact: true,
    title: 'Homepage',
    component: Homepage,
    path: '/'
  }
];

export default nav;
