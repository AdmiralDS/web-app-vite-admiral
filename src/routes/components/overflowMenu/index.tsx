import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { ExampleSection } from '../../-helpers/examples';
import { MenuItem, OverflowMenu, RenderOptionProps } from '@admiral-ds/react-ui';

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

interface ItemProps {
  id: string;
  display: React.ReactNode;
  disabled?: boolean;
}
const items: ItemProps[] = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

export const Template = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
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
        data-dropdown-container-id="overflow-menu-with-dropdown"
        className="overflow-menu-class"
        dropContainerClassName="dropContainerClass"
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/overflowMenu/')({
  component: () => <Template />,
  staticData: {
    title: 'OverflowMenu. Базовый пример',
    description:
      'Компонент используется для открытия меню дополнительных опций, например, в случаях ограниченного пространства. В основном применяется в составе других комопнентов.',
  },
});
