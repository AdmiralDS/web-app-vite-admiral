import { createFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';

import { ExampleSection } from '../../-helpers/examples';
import { Menu, MenuItem, MenuModelItemProps, type RenderOptionProps } from '@admiral-ds/react-ui';
import { MenuWrapper } from '../../-helpers/menu';

const createItems = (length: number, level: number = 1) => {
  const title = level > 1 ? 'SubItem' : 'Item';
  return Array.from({ length }).map((_option, index) => ({ label: `${title} ${index}0000`, id: `${level}-${index}` }));
};

type ModelItems = { label: string; id: string; subItems?: Array<ModelItems> };

const items: Array<ModelItems> = createItems(40);
items.forEach((item) => {
  if (Math.random() > 0.5) {
    item.subItems = createItems(Math.round(40 * Math.random()), 2);
  }
});

const MenuVirtualScroll = () => {
  const model = useMemo(() => {
    return items.map((item) => {
      const modelItem = {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MenuItem dimension="l" {...options} key={item.id}>
            {item.label}
          </MenuItem>
        ),
      };

      if (item.subItems) {
        (modelItem as MenuModelItemProps).subItems = item.subItems.map((subItem) => {
          return {
            id: subItem.id,
            render: (options: RenderOptionProps) => (
              <MenuItem dimension="l" {...options} key={subItem.id}>
                {subItem.label}
              </MenuItem>
            ),
          };
        });
      }

      return modelItem;
    });
  }, []);

  return (
    <ExampleSection>
      <MenuWrapper style={{ width: 'fit-content' }}>
        <Menu defaultIsActive={false} virtualScroll={{ itemHeight: 'auto' }} model={model} />
      </MenuWrapper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dropdown/menuVirtualScroll')({
  component: () => <MenuVirtualScroll />,
  staticData: {
    title: 'Menu. Виртуальный скролл',
    description:
      'Для включения виртуального скролла, необходимо передать в параметр virtualScroll объект, содержаний размер 1 элемента меню, для расчета максимальной высоты контейнера меню. Или установить значение "auto". В этом случае максимальная высота будет рассчитана исходя из свойства "dimension".',
  },
});
