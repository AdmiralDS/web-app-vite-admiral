import { useMemo, useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { MenuButton, MenuItem, MenuModelItemProps, RenderOptionProps } from '@admiral-ds/react-ui';

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
  children?: Array<StoryItem>;
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(`selected: ${id}`);
};

const items: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option with submenu',
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
        disabled: true,
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
    label: 'Disabled option',
    value: 2,
    disabled: true,
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
    label: 'Readonly option',
    readOnly: true,
    value: 5,
  },
];

export const MultiLevelMenu = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const convertStoryItem = (storyItem: StoryItem): MenuModelItemProps => {
    const { id, label, ...restProps } = storyItem;

    const item: MenuModelItemProps = {
      id: id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="l" {...options} key={id}>
          {label}
        </MenuItem>
      ),
      ...restProps,
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
      <MenuButton
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        items={model}
        onVisibilityChange={handleVisibilityChange}
        data-dropdown-container-id="menu-button-with-dropdown"
        className="menu-button-class"
        dropContainerClassName="dropContainerClass"
      >
        Button with multilevel menu
      </MenuButton>
    </ExampleSection>
  );
};
