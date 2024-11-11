export const components = [
  {
    name: 'Accordion',
    path: '/components/accordion',
    routes: [
      { name: 'Базовый пример', path: '/components/accordion' },
      { name: 'Размеры', path: '/components/accordion/accordionDimension' },
      { name: 'Скрытие разделителей', path: '/components/accordion/accordionDivider' },
      { name: 'Расположение шеврона слева', path: '/components/accordion/accordionIcon' },
      { name: 'Режимы использования', path: '/components/accordion/accordionModes' },
    ],
  },
  {
    name: 'ActionBar',
    path: '/components/actionBar/',
    routes: [{ name: 'Базовый пример', path: '/components/actionBar/' }],
  },
  {
    name: 'Avatar',
    path: '/components/avatar/',
    routes: [
      { name: 'Базовый пример', path: '/components/avatar/' },
      { name: 'Стили', path: '/components/avatar/styles' },
      { name: 'Размер XXS', path: '/components/avatar/sizeXXS' },
      { name: 'Группировка', path: '/components/avatar/avatarGroup' },
      { name: 'Группировка при ограниченной ширине', path: '/components/avatar/avatarGroupLimitedWidth' },
    ],
  },
  {
    name: 'Badge',
    path: '/components/badge',
    routes: [
      { name: 'Базовый пример', path: '/components/badge' },
      { name: 'Варианты использования', path: '/components/badge/badgeVariants' },
      { name: 'Accessibility', path: '/components/badge/badgeAccessibility' },
    ],
  },
  {
    name: 'BadgeDot',
    path: '/components/badgeDot/',
    routes: [
      { name: 'Базовый пример', path: '/components/badgeDot/' },
      { name: 'Варианты использования', path: '/components/badgeDot/variants' },
    ],
  },
  {
    name: 'Breadcrumbs',
    path: '/components/breadcrumbs/',
    routes: [
      { name: 'Базовый пример', path: '/components/breadcrumbs/' },
      { name: 'Размеры', path: '/components/breadcrumbs/sizes' },
      { name: 'Пример вкладок с иконками', path: '/components/breadcrumbs/icons' },
      { name: 'Mobile', path: '/components/breadcrumbs/mobile' },
      { name: 'Пример с активной/неактивной последней вкладкой', path: '/components/breadcrumbs/activeCrumb' },
      { name: 'Пример с react-router', path: '/components/breadcrumbs/link' },
    ],
  },
  {
    name: 'Button',
    path: '/components/button',
    routes: [
      { name: 'Базовый пример', path: '/components/button' },
      { name: 'Стили', path: '/components/button/buttonStyles' },
      { name: 'С иконкой', path: '/components/button/buttonWithIcon' },
      { name: 'С лоадером', path: '/components/button/buttonWithLoader' },
      { name: 'С бейджем', path: '/components/button/buttonWithBadge' },
    ],
  },
  {
    name: 'ButtonGroup',
    path: '/components/buttonGroup/',
    routes: [
      { name: 'Базовый пример', path: '/components/buttonGroup/' },
      { name: 'Стили', path: '/components/buttonGroup/styles' },
      { name: 'Размеры', path: '/components/buttonGroup/sizes' },
      { name: 'Состояния', path: '/components/buttonGroup/states' },
      { name: 'Варианты', path: '/components/buttonGroup/variants' },
    ],
  },
  {
    name: 'Carousel',
    path: '/components/carousel',
    routes: [
      { name: 'Базовый пример', path: '/components/carousel' },
      { name: 'Автоматическое переключение', path: '/components/carousel/carouselAutoChange' },
    ],
  },
  {
    name: 'CarouselSlider',
    path: '/components/carouselSlider',
    routes: [
      { name: 'Базовый пример', path: '/components/carouselSlider' },
      { name: 'Автоматическое переключение', path: '/components/carouselSlider/carouselSliderAutoChange' },
    ],
  },
  {
    name: 'CheckboxField',
    path: '/components/checkbox/',
    routes: [
      { name: 'Базовый пример', path: '/components/checkbox/' },
      { name: 'Состояния', path: '/components/checkbox/states' },
      { name: 'Группа чекбоксов', path: '/components/checkbox/fieldSet' },
      { name: 'Составная группа чекбоксов', path: '/components/checkbox/compositeGroup' },
    ],
  },
  {
    name: 'Chips',
    path: '/components/chips/',
    routes: [
      { name: 'Базовый пример', path: '/components/chips/' },
      { name: 'Стили и размеры', path: '/components/chips/styles' },
      { name: 'Chips с текстом и иконкой закрыть', path: '/components/chips/chipsClose' },
      { name: 'Chips с иконкой', path: '/components/chips/withIcon' },
      { name: 'Chips с Badge', path: '/components/chips/withBadge' },
      { name: 'Chips с текстом и выбором', path: '/components/chips/select' },
      { name: 'Chips для множественного выбора', path: '/components/chips/multiSelect' },
      { name: 'Chips с Tooltip', path: '/components/chips/withTooltip' },
    ],
  },
  {
    name: 'ContentSwitcher',
    path: '/components/contentSwitcher/',
    routes: [
      { name: 'Базовый пример', path: '/components/contentSwitcher/' },
      { name: 'Стили и размеры', path: '/components/contentSwitcher/styles' },
      { name: 'С иконками', path: '/components/contentSwitcher/withIcons' },
      { name: 'С Badge', path: '/components/contentSwitcher/withBadge' },
      { name: 'Иконки без текста', path: '/components/contentSwitcher/iconsOnly' },
    ],
  },
  {
    name: 'Drawer',
    path: '/components/drawer/',
    routes: [
      { name: 'Базовый пример', path: '/components/drawer/' },
      { name: 'Блокировка контента страницы (Backdrop = True)', path: '/components/drawer/withBackdrop' },
      { name: 'Без блокировки контента страницы (Backdrop = False)', path: '/components/drawer/withoutBackdrop' },
      { name: 'С обязательным условием (non-closable Drawer)', path: '/components/drawer/nonClosable' },
      { name: 'Расположение компонента', path: '/components/drawer/position' },
      { name: 'Адаптив (mobile)', path: '/components/drawer/mobile' },
      { name: 'Ширина компонента', path: '/components/drawer/width' },
      { name: 'Свободное (кастомизированное) наполнение', path: '/components/drawer/customContent' },
    ],
  },
  {
    name: 'ImageViewer',
    path: '/components/imageViewer/',
    routes: [{ name: 'Базовый пример', path: '/components/imageViewer/' }],
  },
  {
    name: 'Table',
    path: '/components/table',
    routes: [
      { name: 'Базовый пример', path: '/components/table' },
      { name: 'Загрузка данных при скролле', path: '/components/table/loadOnScroll' },
      { name: 'Загрузка данных при скролле со спиннером', path: '/components/table/loadOnScrollSpinner' },
      { name: 'Загрузка данных при скролле со скелетоном', path: '/components/table/loadOnScrollSkeleton' },
    ],
  },
];
