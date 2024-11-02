export const components = [
  {
    name: 'Accordion',
    path: '/components/accordion/',
    routes: [
      { name: 'Базовый пример', path: '/components/accordion/' },
      { name: 'Размеры', path: '/components/accordion/accordionDimension' },
      { name: 'Скрытие разделителей', path: '/components/accordion/accordionDivider' },
      { name: 'Расположение шеврона слева', path: '/components/accordion/accordionIcon' },
      { name: 'Режимы использования', path: '/components/accordion/accordionModes' },
    ],
  },
  {
    name: 'Badge',
    path: '/components/badge/',
    routes: [
      { name: 'Базовый пример', path: '/components/badge/' },
      { name: 'Варианты использования', path: '/components/badge/badgeVariants' },
      { name: 'Accessibility', path: '/components/badge/badgeAccessibility' },
    ],
  },
  {
    name: 'Button',
    path: '/components/button/',
    routes: [
      { name: 'Базовый пример', path: '/components/button/' },
      { name: 'Стили', path: '/components/button/buttonStyles' },
      { name: 'С иконкой', path: '/components/button/buttonWithIcon' },
      { name: 'С лоадером', path: '/components/button/buttonWithLoader' },
      { name: 'С бейджем', path: '/components/button/buttonWithBadge' },
    ],
  },
  {
    name: 'Carousel',
    path: '/components/carousel/',
    routes: [
      { name: 'Базовый пример', path: '/components/carousel/' },
      { name: 'Автоматическое переключение', path: '/components/carousel/carouselAutoChange' },
    ],
  },
  {
    name: 'Table',
    path: '/components/table/',
    routes: [
      { name: 'Базовый пример', path: '/components/table/' },
      { name: 'Загрузка данных при скролле', path: '/components/table/loadOnScroll' },
      { name: 'Загрузка данных при скролле со спиннером', path: '/components/table/loadOnScrollSpinner' },
      { name: 'Загрузка данных при скролле со скелетоном', path: '/components/table/loadOnScrollSkeleton' },
    ],
  },
];
