import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { MenuItem, MultiButton, RenderOptionProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

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

const items = [
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
    disabled: true,
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

const Base = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="l" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  return (
    <ExampleSection>
      <MultiButton
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
        MultiButton
      </MultiButton>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/multiButton/')({
  component: () => <Base />,
  staticData: {
    title: 'MultiButton. Базовый пример',
    description: '',
  },
});
