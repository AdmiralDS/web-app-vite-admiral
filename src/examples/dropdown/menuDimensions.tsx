import { createFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';

import { ExampleSection } from '#routes/-helpers/examples';
import { Menu, MenuItem, type RenderOptionProps } from '@admiral-ds/react-ui';
import { MenuWrapper } from '#routes/-helpers/menu';

const STORY_ITEMS = [
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
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
    disabled: true,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 6,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 7,
  },
];

const MenuDimensions = () => {
  const model = useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, []);

  return (
    <>
      <ExampleSection header="Размер L" text="Высота строки 48px, для полей ввода размера XL.">
        <MenuWrapper style={{ width: 'fit-content' }}>
          <Menu dimension="l" defaultIsActive={false} model={model} />
        </MenuWrapper>
      </ExampleSection>
      <ExampleSection header="Размер M" text="Высота строки 40px, для полей ввода размера M.">
        <MenuWrapper style={{ width: 'fit-content' }}>
          <Menu dimension="m" defaultIsActive={false} model={model} />
        </MenuWrapper>
      </ExampleSection>
      <ExampleSection header="Размер S" text="Высота строки 32px, для полей ввода размера S.">
        <MenuWrapper style={{ width: 'fit-content' }}>
          <Menu dimension="s" defaultIsActive={false} model={model} />
        </MenuWrapper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/dropdown/menuDimensions')({
  component: () => <MenuDimensions />,
  staticData: {
    title: 'Menu. Размеры',
    description: '',
  },
});
