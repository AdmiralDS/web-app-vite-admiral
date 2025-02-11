const data = [
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
    name: 'Link',
    path: '/components/link',
    routes: [
      { name: 'Базовый пример', path: '/components/link' },
      { name: 'Стили', path: '/components/link/styles' },
      { name: 'С иконками', path: '/components/link/withIcon' },
      { name: 'Css Mixin', path: '/components/link/cssMixin' },
      { name: 'Link As Prop', path: '/components/link/asProp' },
    ],
  },
  {
    name: 'Button',
    path: '/components/button',
    routes: [
      { name: 'Базовый пример', path: '/components/button' },
      { name: 'Размеры', path: '/components/button/dimension' },
      { name: 'Типы', path: '/components/button/types' },
      { name: 'Состояния', path: '/components/button/state' },
      { name: 'С иконкой', path: '/components/button/buttonWithIcon' },
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
    name: 'IconButton',
    path: '/components/iconButton',
    routes: [
      { name: 'Базовый пример', path: '/components/iconButton' },
      { name: 'Стили', path: '/components/iconButton/styles' },
      { name: 'Состояния', path: '/components/iconButton/states' },
    ],
  },
  {
    name: 'IconButtonGroup',
    path: '/components/iconButtonGroup',
    routes: [
      { name: 'Базовый пример', path: '/components/iconButtonGroup' },
      { name: 'Размеры', path: '/components/iconButtonGroup/sizes' },
      { name: 'Состояния', path: '/components/iconButtonGroup/states' },
      { name: 'Tooltip', path: '/components/iconButtonGroup/tooltip' },
    ],
  },
  {
    name: 'IconPlacement',
    path: '/components/iconPlacement',
    routes: [
      { name: 'Базовый пример', path: '/components/iconPlacement' },
      { name: 'Стили', path: '/components/iconPlacement/styles' },
      { name: 'Размеры', path: '/components/iconPlacement/sizes' },
      { name: 'Варианты использования', path: '/components/iconPlacement/variants' },
    ],
  },
  {
    name: 'MenuButton',
    path: '/components/menuButton',
    routes: [
      { name: 'Базовый пример', path: '/components/menuButton' },
      { name: 'Стили', path: '/components/menuButton/styles' },
      { name: 'С иконкой', path: '/components/menuButton/withIcon' },
      { name: 'Состояния', path: '/components/menuButton/states' },
      { name: 'Задизейбленные и кастомизированные опции и панель с кнопками', path: '/components/menuButton/actions' },
      {
        name: 'С чекбоксами и нижней панелью в выпадающем меню',
        path: '/components/menuButton/checkboxAndBottomPanel',
      },
      { name: 'С чекбоксами и верхней панелью в выпадающем меню', path: '/components/menuButton/checkboxAndTopPanel' },
      { name: 'С многоуровневым меню', path: '/components/menuButton/multiLevelMenu' },
    ],
  },
  {
    name: 'MultiButton',
    path: '/components/multiButton',
    routes: [
      { name: 'Базовый пример', path: '/components/multiButton' },
      { name: 'Стили', path: '/components/multiButton/styles' },
      { name: 'С иконкой', path: '/components/multiButton/withIcon' },
      { name: 'Состояния', path: '/components/multiButton/states' },
    ],
  },
  {
    name: 'TextButton',
    path: '/components/textButton',
    routes: [
      { name: 'Базовый пример', path: '/components/textButton' },
      { name: 'Размеры и стили', path: '/components/textButton/styles' },
      { name: 'Состояния', path: '/components/textButton/states' },
    ],
  },
  {
    name: 'TextButtonMenu',
    path: '/components/textButtonMenu',
    routes: [
      { name: 'Базовый пример', path: '/components/textButtonMenu' },
      { name: 'Размеры и стили', path: '/components/textButtonMenu/styles' },
      { name: 'Состояния', path: '/components/textButtonMenu/states' },
    ],
  },
  {
    name: 'FloatingButton',
    path: '/components/floatingButton',
    routes: [
      { name: 'Базовый пример', path: '/components/floatingButton' },
      { name: 'Размеры и стили', path: '/components/floatingButton/styles' },
      { name: 'Пример с Tooltip', path: '/components/floatingButton/tooltip' },
      { name: 'Расположение', path: '/components/floatingButton/position' },
      { name: 'Mobile', path: '/components/floatingButton/mobile' },
      { name: 'FloatingButtonMenu', path: '/components/floatingButton/withMenu' },
      { name: 'FloatingButtonMenu. Режимы использования', path: '/components/floatingButton/withMenuModes' },
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
    name: 'Tag',
    path: '/components/tag',
    routes: [
      { name: 'Базовый пример', path: '/components/tag' },
      { name: 'Стили и размеры', path: '/components/tag/styles' },
      { name: 'Тултип', path: '/components/tag/tooltip' },
      { name: 'С иконкой', path: '/components/tag/withIcon' },
      { name: 'Группа тэгов', path: '/components/tag/tags' },
      { name: 'С выпадающим меню', path: '/components/tag/menu' },
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
    name: 'Pills',
    path: '/components/pills',
    routes: [
      { name: 'Базовый пример', path: '/components/pills' },
      { name: 'С выпадающим меню', path: '/components/pills/menu' },
      { name: 'Тултип', path: '/components/pills/tooltip' },
      { name: 'Двойные Pills', path: '/components/pills/nested' },
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
    routes: [
      { name: 'Базовый пример', path: '/components/imageViewer' },
      { name: 'Отображение миниатюр', path: '/components/imageViewer/imageMiniature' },
      { name: 'Алгоритм отображения', path: '/components/imageViewer/viewOptions' },
      { name: 'Ошибки при загрузке', path: '/components/imageViewer/errorOnLoad' },
      { name: 'Клавиатурные команды', path: '/components/imageViewer/keyboardCommands' },
    ],
  },
  {
    name: 'Table',
    path: '/components/table',
    routes: [
      { name: 'Базовый пример', path: '/components/table' },
      { name: 'Загрузка данных при скролле', path: '/components/table/loadOnScroll' },
      { name: 'Загрузка данных при скролле со спиннером', path: '/components/table/loadOnScrollSpinner' },
      { name: 'Загрузка данных при скролле со скелетоном', path: '/components/table/loadOnScrollSkeleton' },
      { name: 'Базовый HTML table', path: '/components/table/baseHTML' },
      { name: 'Базовый HTML table с фиксированными столбцами', path: '/components/table/baseHTMLStickyShadow' },
      { name: 'Базовый HTML table с OverflowMenu', path: '/components/table/baseHTMLOverflowMenu' },
    ],
  },
  {
    name: 'List',
    path: '/components/list',
    routes: [
      { name: 'Базовый пример', path: '/components/list' },
      { name: 'OrderedList. Виды и размеры.', path: '/components/list/orderedList' },
      { name: 'UnorderedList. Виды и размеры.', path: '/components/list/unorderedList' },
      { name: 'Многострочность и регулировка ширины списка', path: '/components/list/multiline' },
      { name: 'Вложенные списки', path: '/components/list/nested' },
      { name: 'Кастомный цвет маркера', path: '/components/list/markerColor' },
      { name: 'Кастомизация маркеров', path: '/components/list/customMarker' },
    ],
  },
  {
    name: 'Notification',
    path: '/components/notification',
    routes: [
      { name: 'Базовый пример', path: '/components/notification' },
      { name: 'Стили', path: '/components/notification/styles' },
      { name: 'Состояния', path: '/components/notification/states' },
    ],
  },
  {
    name: 'Toast',
    path: '/components/toast',
    routes: [
      { name: 'Базовый пример', path: '/components/toast' },
      { name: 'Расположение уведомлений', path: '/components/toast/position' },
      { name: 'Опция Countdown', path: '/components/toast/withProgressBar' },
      { name: 'Line Notification', path: '/components/toast/lineNotification' },
    ],
  },
  {
    name: 'OverflowMenu',
    path: '/components/overflowMenu',
    routes: [
      { name: 'Базовый пример', path: '/components/overflowMenu' },
      { name: 'Размеры и ориентация', path: '/components/overflowMenu/styles' },
    ],
  },
  {
    name: 'Modal',
    path: '/components/modal',
    routes: [
      { name: 'Базовый пример', path: '/components/modal' },
      { name: 'Размеры', path: '/components/modal/sizes' },
      { name: 'Наполнение', path: '/components/modal/variants' },
      { name: 'Скролл', path: '/components/modal/scroll' },
      { name: 'Кастомизация подложки модального окна', path: '/components/modal/customOverlay' },
      { name: 'Иконка закрытия', path: '/components/modal/closeIcon' },
      { name: 'Статусные иконки', path: '/components/modal/statusIcons' },
    ],
  },
  {
    name: 'Hint',
    path: '/components/hint',
    routes: [
      { name: 'Базовый пример', path: '/components/hint' },
      { name: 'Размеры', path: '/components/hint/sizes' },
      { name: 'Сценарии появления', path: '/components/hint/scenario' },
      { name: 'Позиционирование', path: '/components/hint/position' },
      { name: 'Наполнение', path: '/components/hint/variants' },
      { name: 'ClassName', path: '/components/hint/className' },
      { name: 'Стилизация внешнего контейнера', path: '/components/hint/anchorCssMixin' },
    ],
  },
  {
    name: 'Tooltip',
    path: '/components/tooltip',
    routes: [
      { name: 'Базовый пример', path: '/components/tooltip' },
      { name: 'Размеры', path: '/components/tooltip/sizes' },
      { name: 'Сценарии появления', path: '/components/tooltip/scenario' },
      { name: 'Позиционирование', path: '/components/tooltip/position' },
      { name: 'Кастомное наполнение', path: '/components/tooltip/variants' },
      { name: 'Пример с получением ref тултипа', path: '/components/tooltip/ref' },
      { name: 'Базовый пример с MenuButton', path: '/components/tooltip/withMenuButton' },
      { name: 'TooltipHoc. Базовый пример', path: '/components/tooltip/hocBase' },
      { name: 'TooltipHoc. Пример использования с классовым компонентом', path: '/components/tooltip/hocClass' },
      { name: 'TooltipHoc. Пример использования с функциональным компонентом', path: '/components/tooltip/hocFC' },
      { name: 'TooltipHoc. Прокидывание ref на результат вызова TooltipHoc', path: '/components/tooltip/hocRef' },
      { name: 'TooltipHoc. Утилита refSetter для мерджа рефов.', path: '/components/tooltip/hocRefSetter' },
    ],
  },
  {
    name: 'Flex',
    path: '/components/flex',
    routes: [{ name: 'Базовый пример', path: '/components/flex' }],
  },
  {
    name: 'GroupActionsPane',
    path: '/components/groupActionsPane',
    routes: [{ name: 'Базовый пример', path: '/components/groupActionsPane' }],
  },
  {
    name: 'PaginationTwo',
    path: '/components/paginationTwo',
    routes: [
      { name: 'Базовый пример', path: '/components/paginationTwo' },
      { name: 'Количество страниц', path: '/components/paginationTwo/pages' },
      { name: 'Ввод номера страницы вручную', path: '/components/paginationTwo/withInput' },
      { name: 'Состояния', path: '/components/paginationTwo/state' },
      { name: 'Количество записей', path: '/components/paginationTwo/entries' },
      { name: 'Мобильная версия', path: '/components/paginationTwo/mobile' },
    ],
  },
  {
    name: 'PaginationOne',
    path: '/components/paginationOne',
    routes: [
      { name: 'Базовый пример', path: '/components/paginationOne' },
      { name: 'Типы', path: '/components/paginationOne/types' },
      { name: 'Состояния', path: '/components/paginationOne/states' },
      { name: 'Опция ввода номера страницы через Input', path: '/components/paginationOne/withInput' },
    ],
  },
  {
    name: 'ProgressPage',
    path: '/components/progressPage',
    routes: [
      { name: 'Базовый пример', path: '/components/progressPage' },
      { name: 'Стили', path: '/components/progressPage/styles' },
      { name: 'Анимация', path: '/components/progressPage/animation' },
    ],
  },
  {
    name: 'ProgressHeader',
    path: '/components/progressHeader',
    routes: [
      { name: 'Базовый пример', path: '/components/progressHeader' },
      { name: 'Стили', path: '/components/progressHeader/styles' },
      { name: 'Анимация', path: '/components/progressHeader/animation' },
    ],
  },
  {
    name: 'ProgressStepper',
    path: '/components/progressStepper',
    routes: [
      { name: 'Базовый пример', path: '/components/progressStepper' },
      { name: 'Сценарий прогресса', path: '/components/progressStepper/scenario' },
      { name: 'Адаптив (mobile)', path: '/components/progressStepper/mobile' },
      { name: 'Пример настройки названия шага', path: '/components/progressStepper/stepsNaming' },
      { name: 'Примеры настройки подписи о следующем шаге', path: '/components/progressStepper/descriptionNextSteps' },
    ],
  },
  {
    name: 'GlobalSearch',
    path: '/components/globalSearch',
    routes: [
      { name: 'Базовый пример', path: '/components/globalSearch' },
      { name: 'Размеры', path: '/components/globalSearch/sizes' },
      { name: 'Варианты', path: '/components/globalSearch/variants' },
    ],
  },
  {
    name: 'TabMenu',
    path: '/components/tabMenu',
    routes: [
      { name: 'TabMenuHorizontal. Базовый пример', path: '/components/tabMenu' },
      { name: 'TabMenuHorizontal. Размеры', path: '/components/tabMenu/size' },
      { name: 'TabMenuHorizontal. С Overflow Menu', path: '/components/tabMenu/withOverflowMenu' },
      { name: 'TabMenuHorizontal. Опции', path: '/components/tabMenu/options' },
      { name: 'TabMenuHorizontal. С добавлением и удалением вкладок', path: '/components/tabMenu/addTab' },
      { name: 'CardTabMenu. Базовый пример', path: '/components/tabMenu/cardTabMenu' },
      { name: 'CardTabMenu. С отступами', path: '/components/tabMenu/withPadding' },
      { name: 'CardTabMenu. С добавлением и удалением вкладок', path: '/components/tabMenu/addCardTab' },
      { name: 'TabMenuVertical. Базовый пример', path: '/components/tabMenu/tabMenuVertical' },
      { name: 'TabMenuVertical. Размеры', path: '/components/tabMenu/sizeVerticalTabs' },
      { name: 'TabMenuVertical. Опции', path: '/components/tabMenu/optionsVerticalTabs' },
      { name: 'TabMenuVertical. Добавление и удаление вкладок', path: '/components/tabMenu/addTabVertical' },
      { name: 'TabMenuIcon. Базовый пример', path: '/components/tabMenu/tabMenuIcon' },
      { name: 'HorizontalTabs. Базовый пример', path: '/components/tabMenu/horizontalTabs' },
    ],
  },
  {
    name: 'StatusIndicator',
    path: '/components/statusIndicator',
    routes: [
      { name: 'Базовый пример', path: '/components/statusIndicator' },
      { name: 'Размеры', path: '/components/statusIndicator/sizes' },
      { name: 'Варианты', path: '/components/statusIndicator/variants' },
      { name: 'Состояния', path: '/components/statusIndicator/states' },
    ],
  },
  {
    name: 'Stepper',
    path: '/components/stepper',
    routes: [
      { name: 'Базовый пример', path: '/components/stepper' },
      { name: 'Состояния', path: '/components/stepper/state' },
      { name: 'Варианты отображения строк', path: '/components/stepper/variants' },
      { name: 'Опции', path: '/components/stepper/options' },
      { name: 'Кастомный StepContent', path: '/components/stepper/custom' },
      { name: 'Вертикальный Stepper', path: '/components/stepper/vertical' },
      { name: 'Адаптив', path: '/components/stepper/adaptive' },
      { name: 'Мобильная версия', path: '/components/stepper/mobile' },
    ],
  },
  {
    name: 'SegmentedControl',
    path: '/components/segmentedControl',
    routes: [
      { name: 'Базовый пример', path: '/components/segmentedControl' },
      { name: 'Стили', path: '/components/segmentedControl/styles' },
      { name: 'Размеры', path: '/components/segmentedControl/sizes' },
      { name: 'Варианты', path: '/components/segmentedControl/variants' },
      { name: 'Состояния', path: '/components/segmentedControl/states' },
      { name: 'Режим radio button', path: '/components/segmentedControl/radioButtonMode' },
      { name: 'Режим checkbox', path: '/components/segmentedControl/checkBoxMode' },
    ],
  },
  {
    name: 'Spinner',
    path: '/components/spinner',
    routes: [
      { name: 'Базовый пример', path: '/components/spinner' },
      { name: 'Размеры', path: '/components/spinner/sizes' },
      { name: 'Варианты', path: '/components/spinner/variants' },
      { name: 'В составе других компонентов', path: '/components/spinner/withOtherComponents' },
    ],
  },
  {
    name: 'Slider',
    path: '/components/slider',
    routes: [
      { name: 'Базовый пример', path: '/components/slider' },
      { name: 'Размеры', path: '/components/slider/sizes' },
      { name: 'Состояния', path: '/components/slider/state' },
      { name: 'C настройками minValue, maxValue', path: '/components/slider/options' },
      { name: 'C отметками и кастомизированными подписями к ним', path: '/components/slider/custom' },
      { name: 'Range. Базовый пример', path: '/components/slider/range' },
      { name: 'Range. Размеры', path: '/components/slider/rangeSizes' },
      { name: 'Range. Состояния', path: '/components/slider/rangeState' },
      { name: 'Range. C настройками minValue, maxValue', path: '/components/slider/rangeOptions' },
    ],
  },
  {
    name: 'Skeleton',
    path: '/components/skeleton',
    routes: [{ name: 'Базовый пример', path: '/components/skeleton' }],
  },
  {
    name: 'Tree',
    path: '/components/tree',
    routes: [
      { name: 'Базовый пример', path: '/components/tree' },
      { name: 'Размеры', path: '/components/tree/sizes' },
      { name: 'Варианты', path: '/components/tree/variants' },
      { name: 'Произвольный контент', path: '/components/tree/custom' },
      { name: 'Неконтролируемое дерево', path: '/components/tree/uncontrolled' },
      { name: 'Со счётчиком', path: '/components/tree/withControlCheckCount' },
      { name: 'Обработка событий onExpandChange и onCheckedChange', path: '/components/tree/withOnChangeHandler' },
      { name: 'Мобильная версия', path: '/components/tree/mobile' },
    ],
  },
  {
    name: 'T',
    path: '/components/t',
    routes: [
      { name: 'Базовый пример', path: '/components/t' },
      { name: 'Варианты использования', path: '/components/t/variants' },
      { name: 'Список стилей', path: '/components/t/stylesList' },
    ],
  },
  {
    name: 'ScrollContainer',
    path: '/components/scrollContainer',
    routes: [
      { name: 'Базовый пример', path: '/components/scrollContainer' },
      { name: 'Состояния', path: '/components/scrollContainer/state' },
    ],
  },
  {
    name: 'DateInput',
    path: '/components/dateInput',
    routes: [
      { name: 'Базовый пример', path: '/components/dateInput' },
      { name: 'Размеры', path: '/components/dateInput/sizes' },
      { name: 'Состояния', path: '/components/DateInput/state' },
      { name: 'Статусы', path: '/components/DateInput/status' },
      { name: 'Type "date-range"', path: '/components/DateInput/range' },
      { name: 'Варианты отображения дат', path: '/components/DateInput/variants' },
      { name: 'С альтернативной иконкой', path: '/components/DateInput/custom' },
      { name: 'Выделение определённых дат', path: '/components/DateInput/specialDates' },
      { name: 'DateField. Базовый пример', path: '/components/DateInput/dateField' },
      { name: 'DateField. Состояния', path: '/components/DateInput/dateFieldState' },
    ],
  },
  {
    name: 'Anchor',
    path: '/components/anchor',
    routes: [
      { name: 'Базовый пример', path: '/components/anchor' },
      { name: 'Размеры', path: '/components/anchor/sizes' },
      { name: 'Tree', path: '/components/anchor/tree' },
      { name: 'Состояния', path: '/components/anchor/state' },
    ],
  },
  {
    name: 'DateTimeField',
    path: '/components/dateTimeField',
    routes: [
      { name: 'Базовый пример', path: '/components/dateTimeField' },
      { name: 'Размеры', path: '/components/dateTimeField/dimension' },
      { name: 'Дополнительный текст', path: '/components/dateTimeField/extraText' },
      { name: 'С подписью в одну линию', path: '/components/dateTimeField/displayInline' },
      { name: 'Состояние/статус', path: '/components/dateTimeField/status' },
    ],
  },
  {
    name: 'Divider',
    path: '/components/divider',
    routes: [
      { name: 'Базовый пример', path: '/components/divider' },
      { name: 'Тип (ориентация)', path: '/components/divider/type' },
      { name: 'Стиль', path: '/components/divider/style' },
      { name: 'Толщина линии', path: '/components/divider/thikness' },
      { name: 'Длина', path: '/components/divider/length' },
    ],
  },
  {
    name: 'Calendar',
    path: '/components/calendar',
    routes: [
      { name: 'Базовый пример', path: '/components/calendar' },
      { name: 'Range', path: '/components/calendar/range' },
      { name: 'Ограничение максимальной даты', path: '/components/calendar/maxDate' },
      { name: 'Недоступные для выбора даты', path: '/components/calendar/filterDate' },
      { name: 'Callback', path: '/components/calendar/callback' },
      { name: 'Переключение экранов выбора дат', path: '/components/calendar/activeViewDate' },
      {
        name: 'Пример с открытием экрана выбора месяца после выбора года',
        path: '/components/calendar/viewDateAfterChoose',
      },
      {
        name: 'Пример с выбором только месяца/года',
        path: '/components/calendar/viewDateMonthsYears',
      },
      {
        name: 'Выделение определённых дат',
        path: '/components/calendar/specialDates',
      },
    ],
  },
  {
    name: 'EditMode',
    path: '/components/editmode',
    routes: [
      { name: 'Базовый пример', path: '/components/editmode' },
      { name: 'Размеры', path: '/components/editmode/dimensions' },
      { name: 'Статусы/состояния', path: '/components/editmode/status' },
      { name: 'Многострочный компонент', path: '/components/editmode/multiline' },
      { name: 'Невозможность копирования', path: '/components/editmode/disablecopying' },
      { name: 'Тултип', path: '/components/editmode/tooltip' },
      { name: 'Дополнительный текст', path: '/components/editmode/extratext' },
    ],
  },
];

export const components = data.sort((a, b) => (a.name > b.name ? 1 : -1));
