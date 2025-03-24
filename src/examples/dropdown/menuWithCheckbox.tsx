import { useMemo, useState } from 'react';

import { ExampleSection } from '#examples/-helpers';
import { Menu, MenuItemWithCheckbox, MenuModelItemProps, type RenderOptionProps } from '@admiral-ds/react-ui';
import { MenuWrapper, StoryItem } from '#examples/-helpers/menu';

const checkboxItems: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    disabled: true,
  },
  {
    id: '2',
    label: 'Option two',
  },
  {
    id: '3',
    label: 'Option three',
    readOnly: true,
  },
  {
    id: '4',
    label: 'Option four',
  },
  {
    id: '5',
    label: 'Option five',
  },
  {
    id: '6',
    label: 'Option six',
  },
  {
    id: '7',
    label: 'Option seven',
  },
];

export const MenuWithCheckbox = () => {
  const dimension: 'l' | 'm' | 's' = 'l';

  const [checkedOptions, setCheckedOptions] = useState<Record<string, boolean>>({});
  const [active, setActive] = useState<string | undefined>();
  const modelCheckbox = useMemo<Array<MenuModelItemProps>>(() => {
    return checkboxItems.map(({ id, label, ...itemProps }) => ({
      id: id,
      ...itemProps,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox checked={checkedOptions[id]} dimension={dimension} {...options} key={id}>
          {label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [dimension, checkedOptions]);

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(`Option ${id} clicked`);
    setCheckedOptions((cheked) => {
      cheked[id] = !cheked[id];
      return { ...cheked };
    });
  };

  return (
    <ExampleSection>
      <MenuWrapper style={{ width: 'fit-content' }}>
        <Menu
          active={active}
          onActivateItem={setActive}
          defaultIsActive={false}
          preselectedModeActive={false}
          model={modelCheckbox}
          onSelectItem={handleSelectItem}
          disableSelectedOptionHighlight={true}
        />
      </MenuWrapper>
    </ExampleSection>
  );
};
