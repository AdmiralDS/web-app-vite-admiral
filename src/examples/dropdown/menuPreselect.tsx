import { useMemo, useState } from 'react';

import { ExampleSection } from '#examples/-helpers';
import { Menu, MenuItem, type RenderOptionProps } from '@admiral-ds/react-ui';
import { MenuWrapper, StoryItem } from '#examples/-helpers/menu';

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

export const MenuPreSelect = () => {
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="l" {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, []);

  const [preselected, setPreselected] = useState<string | undefined>(undefined);

  const handleMenuKeyDown = (e: KeyboardEvent) => {
    if (e.key.match(/^[A-Za-z0-9]/)) {
      const item = items.find((item) => item.label.toLowerCase().startsWith(`option ${e.key}`));
      if (item) {
        setPreselected(item.id);
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  return (
    <ExampleSection>
      <MenuWrapper style={{ width: 'fit-content' }}>
        <Menu
          defaultIsActive={false}
          model={model}
          preselectedModeActive
          preselected={preselected}
          onPreselectItem={setPreselected}
          onMenuKeyDown={handleMenuKeyDown}
        />
      </MenuWrapper>
    </ExampleSection>
  );
};
