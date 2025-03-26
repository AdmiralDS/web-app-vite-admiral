import { useMemo, useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { MenuItem, OverflowMenu, RenderOptionProps, MenuModelItemProps } from '@admiral-ds/react-ui';

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(`selected: ${id}`);
};

type ItemProps = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
  children?: Array<ItemProps>;
};
const items: Array<ItemProps> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
    children: [
      {
        id: '1-1',
        label: 'SubOption with long text 1-1',
        value: 11,
      },
      {
        id: '1-2',
        label: 'SubOption 1-2',
        value: 12,
      },
      {
        id: '1-3',
        label: 'SubOption 1-3',
        value: 13,
      },
    ],
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
    children: [
      {
        id: '2-1',
        label: 'SubOption with long text 2-1',
        value: 21,
      },
      {
        id: '2-2',
        label: 'SubOption 2-2',
        value: 22,
      },
      {
        id: '2-3',
        label: 'SubOption 2-3',
        value: 23,
      },
    ],
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
];

export const OverflowMenuMultiLevel = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const convertStoryItem = (storyItem: ItemProps): MenuModelItemProps => {
    const item: MenuModelItemProps = {
      id: storyItem.id,
      render: (options: RenderOptionProps) => (
        <MenuItem {...options} key={storyItem.id}>
          {storyItem.label}
        </MenuItem>
      ),
    };

    if (storyItem.children) {
      item.subItems = storyItem.children?.map((child) => convertStoryItem(child));
    }

    return item;
  };

  const model = useMemo(() => {
    return items.map((item) => convertStoryItem(item));
  }, []);

  return (
    <ExampleSection>
      <OverflowMenu
        items={model}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChange}
        aria-label="Overflow Menu component"
        alignSelf="flex-start"
      />
    </ExampleSection>
  );
};
