export const components = [
  {
    name: 'Button',
    path: '/components/button/',
    routes: [
      { name: 'Example1', path: '/components/button/' },
      { name: 'Example2', path: '/components/button/example2' },
    ],
  },
  {
    name: 'Table',
    path: '/components/table/',
    routes: [
      { name: 'Basic', path: '/components/table/' },
      { name: 'Load on scroll', path: '/components/table/loadOnScroll' },
      { name: 'Load on scroll with Spinner', path: '/components/table/loadOnScrollSpinner' },
    ],
  },
];
