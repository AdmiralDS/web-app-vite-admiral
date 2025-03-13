import { createFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';

import { ExampleSection } from '#routes/-helpers/examples';
import { Menu, MenuItem, RadioButton, type RenderOptionProps } from '@admiral-ds/react-ui';
import { MenuWrapper, StoryItem } from '#routes/-helpers/menu';

const radioButtonItems: Array<StoryItem> = [
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

const MenuWithRadioButton = () => {
  const dimension = 'l';

  const modelRadioButton = useMemo(() => {
    return radioButtonItems.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimension} {...options} key={item.id}>
          <RadioButton dimension="m" name="menuListOption" key={item.id}>
            {item.label}
          </RadioButton>
        </MenuItem>
      ),
    }));
  }, [dimension]);

  return (
    <ExampleSection>
      <MenuWrapper style={{ width: 'fit-content' }}>
        <Menu defaultIsActive={false} model={modelRadioButton} />
      </MenuWrapper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dropdown/menuWithRadioButton')({
  component: () => <MenuWithRadioButton />,
  staticData: {
    title: 'Menu. С RadioButton',
    description: '',
  },
});
