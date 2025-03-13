import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { MenuItem, RenderOptionProps, TagMenu, TagOptionProps } from '@admiral-ds/react-ui';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';

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
const itemsDemo: Array<TagOptionProps> = [
  {
    id: '1',
    tagText: 'Option one',
    statusViaBackground: true,
    icon: <CheckOutline />,
    kind: 'danger',
  },
  {
    id: '2',
    tagText: 'Option two',
    statusViaBackground: true,
    kind: 'primary',
  },
  {
    id: '3',
    tagText: 'Option three',
    statusViaBackground: true,
    kind: 'success',
  },
  {
    id: '4',
    tagText: 'Option four',
    statusViaBackground: true,
    icon: <CheckOutline />,
    kind: 'warning',
  },
  {
    id: '5',
    tagText: 'Option five',
    kind: 'primary',
  },
  {
    id: '6',
    tagText: 'Option six',
    kind: 'neutral',
  },
  {
    id: '7',
    tagText: 'Option seven',
  },
];

export const Template = () => {
  const [selected, setSelected] = useState<TagOptionProps | undefined>(itemsDemo[0]);

  const model = useMemo(() => {
    return itemsDemo.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="m" {...options} key={item.id}>
          {item.tagText}
        </MenuItem>
      ),
    }));
  }, []);

  return (
    <ExampleSection>
      <TagMenu
        items={model}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(itemsDemo.find((item) => item.id === id));
        }}
        onVisibilityChange={handleVisibilityChange}
        data-dropdown-container-id="tag-menu-with-dropdown"
        className="tag-menu-class"
        dropContainerClassName="dropContainerClass"
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/tag/menu')({
  component: () => <Template />,
  staticData: {
    title: 'TagMenu. С выпадающим меню',
    description: 'Вариант тэгов, который нужен для принудительного выбора статуса из выпадающего меню.',
  },
});
