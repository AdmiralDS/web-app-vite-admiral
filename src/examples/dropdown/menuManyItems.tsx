import { useMemo } from 'react';

import { ExampleSection } from '#routes/-helpers/examples';
import { Menu, MenuItem, type RenderOptionProps } from '@admiral-ds/react-ui';
import { MenuWrapper } from '#routes/-helpers/menu';

const createItems = (length: number) => {
  return Array.from({ length }).map((_option, index) => ({ label: `${index}0000`, id: String(index) }));
};

const items = createItems(200);

export const MenuManyItems = () => {
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

  return (
    <ExampleSection>
      <MenuWrapper style={{ width: 'fit-content' }}>
        <Menu defaultIsActive={false} model={model} />
      </MenuWrapper>
    </ExampleSection>
  );
};
