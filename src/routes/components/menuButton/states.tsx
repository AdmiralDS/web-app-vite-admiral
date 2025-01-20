import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { MenuButton, MenuItem, RenderOptionProps } from '@admiral-ds/react-ui';
import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';
import { ExampleSection } from '../../-helpers/examples';

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
    display: (
      <div
        style={{
          display: 'flex',
          width: '115px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <MinusCircleOutline width={20} height={20} />
        Option two
      </div>
    ),
    disabled: true,
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
];

export const States = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const modelL = useMemo(() => {
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
    <>
      <ExampleSection text="Loading">
        <MenuButton
          appearance="primary"
          loading
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelL}
          onVisibilityChange={handleVisibilityChange}
        >
          Button 56
        </MenuButton>
      </ExampleSection>
      <ExampleSection text="Disabled">
        <MenuButton
          appearance="primary"
          disabled
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelL}
          onVisibilityChange={handleVisibilityChange}
        >
          Button 56
        </MenuButton>
      </ExampleSection>
      <ExampleSection text="Skeleton">
        <MenuButton
          appearance="primary"
          skeleton
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelL}
          onVisibilityChange={handleVisibilityChange}
        >
          Button 56
        </MenuButton>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/menuButton/states')({
  component: () => <States />,
  staticData: {
    title: 'MenuButton. Состояния',
    description: 'Состояния аналогичны Button.',
  },
});
