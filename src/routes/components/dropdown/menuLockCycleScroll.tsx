import { createFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';

import { ExampleSection } from '../../-helpers/examples';
import { Menu, MenuItem, type RenderOptionProps } from '@admiral-ds/react-ui';
import { MenuWrapper } from '../../-helpers/menu';

const items = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
    disabled: true,
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
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
    disabled: true,
  },
];

const MenuLockCycleScroll = () => {
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      disabled: item.disabled,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="l" {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, []);

  return (
    <ExampleSection>
      <MenuWrapper style={{ width: 'fit-content' }}>
        <Menu
          defaultIsActive={false}
          model={model}
          onForwardCycleApprove={() => false}
          onBackwardCycleApprove={() => false}
        />
      </MenuWrapper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dropdown/menuLockCycleScroll')({
  component: () => <MenuLockCycleScroll />,
  staticData: {
    title: 'Menu. Пример без цикла обхода пунктов',
    description:
      'Для блокировки цикличного обхода пунктов меню можно использовать onForwardCycleApprove и onBackwardCycleApprove.',
  },
});
