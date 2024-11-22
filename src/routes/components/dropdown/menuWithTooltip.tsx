import { createFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';

import { ExampleSection } from '../../-helpers/examples';
import { Menu, MenuItem, type RenderOptionProps, TooltipHoc } from '@admiral-ds/react-ui';
import { MenuWrapper, StoryItem } from '../../-helpers/menu';

const items: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Привет, пупсик! Хотел тебе сказать, что ты андроид.',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const MenuItemWithTooltip = TooltipHoc(MenuItem);

const MenuWithTooltip = () => {
  const dimension = 'l';

  const model = useMemo(() => {
    return items.map((item) => {
      const tooltip = item.label.length > 20;

      return {
        id: item.id,
        render: (options: RenderOptionProps) =>
          tooltip ? (
            <MenuItemWithTooltip renderContent={() => item.label} dimension={dimension} {...options} key={item.id}>
              {item.label.slice(0, 17) + '...'}
            </MenuItemWithTooltip>
          ) : (
            <MenuItem dimension={dimension} {...options} key={item.id}>
              {item.label}
            </MenuItem>
          ),
      };
    });
  }, [dimension]);

  return (
    <ExampleSection>
      <MenuWrapper style={{ width: 'fit-content' }}>
        <Menu defaultIsActive={false} model={model} />
      </MenuWrapper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dropdown/menuWithTooltip')({
  component: () => <MenuWithTooltip />,
  staticData: {
    title: 'Menu. Длинный текст',
    description: '',
  },
});
