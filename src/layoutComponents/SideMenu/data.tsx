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
    path: '/components/actionBar',
    routes: [
      { name: 'Базовый пример', path: '/components/actionBar' },
      { name: 'Размеры', path: '/components/actionBar/dimensions' },
      { name: 'Адаптив. Overflow Menu', path: '/components/actionBar/adaptive' },
    ],
  },
  {
    name: 'Avatar',
    path: '/components/avatar',
    routes: [
      { name: 'Базовый пример', path: '/components/avatar' },
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
    path: '/components/badgeDot',
    routes: [
      { name: 'Базовый пример', path: '/components/badgeDot' },
      { name: 'Варианты использования', path: '/components/badgeDot/variants' },
    ],
  },
  {
    name: 'Breadcrumbs',
    path: '/components/breadcrumbs',
    routes: [
      { name: 'Базовый пример', path: '/components/breadcrumbs' },
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
      { name: 'Размеры', path: '/components/button/dimension' },
      { name: 'Типы', path: '/components/button/types' },
      { name: 'С иконкой', path: '/components/button/buttonWithIcon' },
      { name: 'С лоадером', path: '/components/button/buttonWithLoader' },
      { name: 'С бейджем', path: '/components/button/buttonWithBadge' },
      { name: 'Адаптив', path: '/components/button/adaptive' },
    ],
  },
  {
    name: 'ButtonGroup',
    path: '/components/buttonGroup',
    routes: [
      { name: 'Базовый пример', path: '/components/buttonGroup' },
      { name: 'Стили', path: '/components/buttonGroup/styles' },
      { name: 'Размеры', path: '/components/buttonGroup/sizes' },
      { name: 'Состояния', path: '/components/buttonGroup/states' },
      { name: 'Варианты', path: '/components/buttonGroup/variants' },
    ],
  },
  {
    name: 'MenuButton',
    path: '/components/menuButton',
    routes: [
      { name: 'Базовый пример', path: '/components/menuButton' },
      { name: 'Задизейбленные и кастомизированные опции и панель с кнопками', path: '/components/menuButton/actions' },
      { name: 'Стили', path: '/components/menuButton/styles' },
      { name: 'Состояния', path: '/components/menuButton/states' },
      { name: 'С иконкой', path: '/components/menuButton/withIcon' },
      { name: 'С чекбоксами и нижней панелью в выпадающем меню', path: '/components/menuButton/checkboxAndBottomPanel' },
      { name: 'С чекбоксами и верхней панелью в выпадающем меню', path: '/components/menuButton/checkboxAndTopPanel' },
      { name: 'С многоуровневым меню', path: '/components/menuButton/multiLevelMenu' },
    ],
  },
  {
    name: 'Carousel',
    path: '/components/carousel',
    routes: [
      { name: 'Базовый пример', path: '/components/carousel' },
      { name: 'Позиция слайдера', path: '/components/carousel/sliderPosition' },
      { name: 'Листание слайдов', path: '/components/carousel/arrows' },
      { name: 'Автоматическое переключение', path: '/components/carousel/carouselAutoChange' },
    ],
  },
  {
    name: 'CarouselSlider',
    path: '/components/carouselSlider',
    routes: [
      { name: 'Базовый пример', path: '/components/carouselSlider' },
      { name: 'Стили', path: '/components/carouselSlider/styles' },
      { name: 'Автоматическое переключение', path: '/components/carouselSlider/carouselSliderAutoChange' },
    ],
  },
  {
    name: 'CheckboxField',
    path: '/components/checkbox',
    routes: [
      { name: 'Базовый пример', path: '/components/checkbox' },
      { name: 'Состояния', path: '/components/checkbox/states' },
      { name: 'Вариация с дополнительным текстом', path: '/components/checkbox/additionalText' },
      { name: 'Вариация с информером', path: '/components/checkbox/withInformer' },
      { name: 'Группа чекбоксов', path: '/components/checkbox/fieldSet' },
      { name: 'Составная группа чекбоксов', path: '/components/checkbox/compositeGroup' },
    ],
  },
  {
    name: 'RadioButton',
    path: '/components/radiobutton',
    routes: [
      { name: 'Базовый пример', path: '/components/radiobutton' },
      { name: 'Размеры', path: '/components/radiobutton/sizes' },
      { name: 'Состояния', path: '/components/radiobutton/states' },
      { name: 'Дополнительный текст', path: '/components/radiobutton/extraText' },
      { name: 'Информер', path: '/components/radiobutton/informer' },
      { name: 'Группа', path: '/components/radiobutton/fieldSet' },
    ],
  },
  {
    name: 'Toggle',
    path: '/components/toggle',
    routes: [
      { name: 'Базовый пример', path: '/components/toggle' },
      { name: 'Размеры', path: '/components/toggle/sizes' },
      { name: 'Состояния', path: '/components/toggle/states' },
      { name: 'Расположение текста', path: '/components/toggle/labelPosition' },
      { name: 'Дополнительный текст', path: '/components/toggle/extraText' },
      { name: 'Адаптив', path: '/components/toggle/mobile' },
    ],
  },
  {
    name: 'Chips',
    path: '/components/chips',
    routes: [
      { name: 'Базовый пример', path: '/components/chips' },
      { name: 'Размеры', path: '/components/chips/sizes' },
      { name: 'Стили', path: '/components/chips/styles' },
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
    path: '/components/contentSwitcher',
    routes: [
      { name: 'Базовый пример', path: '/components/contentSwitcher' },
      { name: 'Размеры', path: '/components/contentSwitcher/sizes' },
      { name: 'Стили', path: '/components/contentSwitcher/styles' },
      { name: 'С иконками', path: '/components/contentSwitcher/withIcons' },
      { name: 'С Badge', path: '/components/contentSwitcher/withBadge' },
      { name: 'Иконки без текста', path: '/components/contentSwitcher/iconsOnly' },
      { name: 'Адаптив', path: '/components/contentSwitcher/adaptive' },
    ],
  },
  {
    name: 'Drawer',
    path: '/components/drawer',
    routes: [
      { name: 'Базовый пример', path: '/components/drawer' },
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
    name: 'Dropdown Menu',
    path: '/components/dropdown',
    routes: [
      { name: 'Базовый пример', path: '/components/dropdown' },
      { name: 'DropMenu. Неконтроллируемое состояние видимости', path: '/components/dropdown/dropMenuUncontrolled' },
      { name: 'DropMenu. Контроллируемое состояние видимости', path: '/components/dropdown/dropMenuControlled' },
      { name: 'DropdownContainer. Контейнер с меню', path: '/components/dropdown/customDropdownContainer' },
      { name: 'Menu. Размеры', path: '/components/dropdown/menuDimensions' },
      { name: 'Menu. С иконками', path: '/components/dropdown/menuWithIcons' },
      { name: 'Menu. С дополнительным текстом и иконками', path: '/components/dropdown/menuWithAddTextAndIcons' },
      { name: 'Menu. С RadioButton', path: '/components/dropdown/menuWithRadioButton' },
      { name: 'Menu. С Checkbox', path: '/components/dropdown/menuWithCheckbox' },
      { name: 'Menu. С CheckboxGroup', path: '/components/dropdown/menuWithCheckboxGroup' },
      { name: 'Menu. Длинный текст', path: '/components/dropdown/menuWithTooltip' },
      { name: 'Menu. Категории', path: '/components/dropdown/menuCategories' },
      { name: 'Menu. Кастомные пункты меню', path: '/components/dropdown/menuCustomItems' },
      { name: 'Menu. Многострочные пункты', path: '/components/dropdown/menuMultiLine' },
      { name: 'Menu. Пример с Actions с двумя кнопками', path: '/components/dropdown/menuActionTwoButtons' },
      { name: 'Menu. Пример с Actions и Search', path: '/components/dropdown/menuActionSearch' },
      { name: 'Menu. Пример с большим количеством item', path: '/components/dropdown/menuManyItems' },
      { name: 'Menu. Пример без цикла обхода пунктов', path: '/components/dropdown/menuLockCycleScroll' },
      { name: 'Menu. Виртуальный скролл', path: '/components/dropdown/menuVirtualScroll' },
      { name: 'Menu. Многоуровневое меню', path: '/components/dropdown/menuMultiLevel' },
      { name: 'Menu. Меню c состоянием preselect', path: '/components/dropdown/menuPreselect' },
    ],
  },
  {
    name: 'ImageViewer',
    path: '/components/imageViewer',
    routes: [{ name: 'Базовый пример', path: '/components/imageViewer' }],
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

/*
import { createFileRoute } from '@tanstack/react-router'
import { ExampleSection } from '../../-helpers/examples';

const ToggleBase = () => {
  return (
    <>
      <ExampleSection>

      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/toggle/')({
  component: () => <ToggleBase />,
  staticData: {
    title: '',
    description: '',
  },
});
*/
