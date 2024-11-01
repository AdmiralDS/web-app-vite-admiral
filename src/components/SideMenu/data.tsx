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
      { name: 'Базовый пример', path: '/components/table/' },
      { name: 'Загрузка данных при скролле', path: '/components/table/loadOnScroll' },
      { name: 'Загрузка данных при скролле со спиннером', path: '/components/table/loadOnScrollSpinner' },
    ],
  },
];
