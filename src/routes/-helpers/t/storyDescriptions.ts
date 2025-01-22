import type { ColorName, ThemeTypographyType } from '@admiral-ds/react-ui';

interface FontProps {
  name: keyof ThemeTypographyType;
  style: { name: string; value: string }[];
  description: string;
}

interface GroupFontsProps {
  groupName: string;
  colors: ColorName[];
  fonts: FontProps[];
}

export const NEW_FONTS: GroupFontsProps[] = [
  {
    groupName: 'Headers',
    colors: ['Neutral/Neutral 90', 'Neutral/Neutral 50', 'Special/Static White'],
    fonts: [
      {
        name: 'Header/HL1',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '72px' },
          { name: 'Высота строки:', value: '80px' },
        ],
        description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
      },
      {
        name: 'Header/HL2',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '56px' },
          { name: 'Высота строки:', value: '64px' },
        ],
        description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
      },
      {
        name: 'Header/HL3',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '48px' },
          { name: 'Высота строки:', value: '56px' },
        ],
        description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
      },
      {
        name: 'Header/H1',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '40px' },
          { name: 'Высота строки:', value: '48px' },
        ],
        description:
          'Заголовок первого уровня. Используется в случаях, когда много пространства и используются компоненты размера XL.',
      },
      {
        name: 'Header/H2',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '34px' },
          { name: 'Высота строки:', value: '40px' },
        ],
        description:
          'Заголовок второго уровня. Используется в случаях, когда много пространства и используются компоненты размера XL.',
      },
      {
        name: 'Header/H3',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '28px' },
          { name: 'Высота строки:', value: '36px' },
        ],
        description:
          'Заголовок третьего уровня. Как правило, самый большой размер для стандартных интерфейсов размера M и S.',
      },
      {
        name: 'Header/H4',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '24px' },
          { name: 'Высота строки:', value: '32px' },
        ],
        description:
          'Заголовок четвертого уровня. Рекомендуемый максимальный размер заголовка для мобильных устройств.',
      },
      {
        name: 'Header/H5',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '20px' },
          { name: 'Высота строки:', value: '28px' },
        ],
        description: 'Заголовок пятого уровня.',
      },
      {
        name: 'Header/H6',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '18px' },
          { name: 'Высота строки:', value: '24px' },
        ],
        description: 'Заголовок шестого уровня.',
      },
    ],
  },
  {
    groupName: 'Subtitles',
    colors: ['Neutral/Neutral 90', 'Neutral/Neutral 50', 'Special/Static White'],
    fonts: [
      {
        name: 'Subtitle/Subtitle 1',
        style: [
          { name: 'Шрифт:', value: 'Book' },
          { name: 'Размер:', value: '18px' },
          { name: 'Высота строки:', value: '24px' },
        ],
        description: 'Крупный шрифт параграфа, может использоваться как подзаголовок.',
      },
      {
        name: 'Subtitle/Subtitle 2',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '16px' },
          { name: 'Высота строки:', value: '24px' },
        ],
        description: 'Акцентированный текст, подзаголовок.',
      },
      {
        name: 'Subtitle/Subtitle 3',
        style: [
          { name: 'Шрифт:', value: 'SemiBold' },
          { name: 'Размер:', value: '14px' },
          { name: 'Высота строки:', value: '20px' },
        ],
        description: 'Акцентированный текст, подзаголовок.',
      },
    ],
  },
  {
    groupName: 'Body',
    colors: [
      'Neutral/Neutral 90',
      'Neutral/Neutral 50',
      'Neutral/Neutral 30',
      'Special/Static White',
      'Primary/Primary 60 Main',
      'Error/Error 60 Main',
      'Success/Success 50 Main',
    ],
    fonts: [
      {
        name: 'Body/Body 1 Long',
        style: [
          { name: 'Шрифт:', value: 'Book' },
          { name: 'Размер:', value: '16px' },
          { name: 'Высота строки:', value: '24px' },
        ],
        description: 'Основной шрифт системы первого уровня для набора больших текстов.',
      },
      {
        name: 'Body/Body 1 Short',
        style: [
          { name: 'Шрифт:', value: 'Book' },
          { name: 'Размер:', value: '16px' },
          { name: 'Высота строки:', value: '20px' },
        ],
        description: 'Шрифт системы первого уровня для набора коротких текстов в 1-2 строки (необязательный сценарий).',
      },
      {
        name: 'Body/Body 2 Long',
        style: [
          { name: 'Шрифт:', value: 'Book' },
          { name: 'Размер:', value: '14px' },
          { name: 'Высота строки:', value: '20px' },
        ],
        description: 'Основной шрифт системы второго уровня для набора больших текстов.',
      },
      {
        name: 'Body/Body 2 Short',
        style: [
          { name: 'Шрифт:', value: 'Book' },
          { name: 'Размер:', value: '14px' },
          { name: 'Высота строки:', value: '16px' },
        ],
        description: 'Шрифт системы второго уровня для набора коротких текстов в 1-2 строки (необязательный сценарий).',
      },
    ],
  },
  {
    groupName: 'Button',
    colors: ['Neutral/Neutral 90', 'Neutral/Neutral 30', 'Special/Static White', 'Primary/Primary 60 Main'],
    fonts: [
      {
        name: 'Button/Button 1',
        style: [
          { name: 'Шрифт:', value: 'Medium' },
          { name: 'Размер:', value: '16px' },
          { name: 'Высота строки:', value: '24px' },
        ],
        description: 'Шрифт в кнопках первого уровня.',
      },
      {
        name: 'Button/Button 2',
        style: [
          { name: 'Шрифт:', value: 'Medium' },
          { name: 'Размер:', value: '14px' },
          { name: 'Высота строки:', value: '20px' },
        ],
        description: 'Шрифт в кнопках второго уровня.',
      },
    ],
  },
  {
    groupName: 'Caption',
    colors: ['Neutral/Neutral 90', 'Neutral/Neutral 30', 'Special/Static White', 'Primary/Primary 60 Main'],
    fonts: [
      {
        name: 'Caption/Caption 1',
        style: [
          { name: 'Шрифт:', value: 'Book' },
          { name: 'Размер:', value: '12px' },
          { name: 'Высота строки:', value: '16px' },
        ],
        description:
          'Применяется в компонентах, сносках, примечаниях, счетчиках и тд. Не рекомендуется для набора текстов.',
      },
      {
        name: 'Caption/Caption 2',
        style: [
          { name: 'Шрифт:', value: 'Book' },
          { name: 'Размер:', value: '10px' },
          { name: 'Высота строки:', value: '12px' },
        ],
        description:
          'Самый маленький шрифт системы. Не используется в компонентах системы, не рекомендуется для набора текстов. Использовать только в крайних случаях.',
      },
    ],
  },
];
