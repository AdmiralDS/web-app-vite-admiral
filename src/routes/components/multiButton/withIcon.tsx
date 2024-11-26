import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { MultiButton, MenuItem, RenderOptionProps } from '@admiral-ds/react-ui';
import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';
import { ExampleSection, rowFlexMixin } from '../../-helpers/examples';

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

export const WithIcon = () => {
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
  const modelM = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="m" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelS = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="s" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  return (
    <>
      <ExampleSection cssMixin={rowFlexMixin} text="Primary">
        <MultiButton
          appearance="primary"
          dimension="xl"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelL}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 56
        </MultiButton>
        <MultiButton
          appearance="primary"
          dimension="l"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelL}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 48
        </MultiButton>
        <MultiButton
          appearance="primary"
          dimension="m"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelM}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 40
        </MultiButton>
        <MultiButton
          appearance="primary"
          dimension="s"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelS}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 32
        </MultiButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Secondary">
        <MultiButton
          appearance="secondary"
          dimension="xl"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelL}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 56
        </MultiButton>
        <MultiButton
          appearance="secondary"
          dimension="l"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelL}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 48
        </MultiButton>
        <MultiButton
          appearance="secondary"
          dimension="m"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelM}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 40
        </MultiButton>
        <MultiButton
          appearance="secondary"
          dimension="s"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelS}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 32
        </MultiButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Tertiary">
        <MultiButton
          appearance="tertiary"
          dimension="xl"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelL}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 56
        </MultiButton>
        <MultiButton
          appearance="tertiary"
          dimension="l"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelL}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 48
        </MultiButton>
        <MultiButton
          appearance="tertiary"
          dimension="m"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelM}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 40
        </MultiButton>
        <MultiButton
          appearance="tertiary"
          dimension="s"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelS}
          onVisibilityChange={handleVisibilityChange}
        >
          <StarSolid />
          Button 32
        </MultiButton>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/multiButton/withIcon')({
  component: () => <WithIcon />,
  staticData: {
    title: 'MultiButton. С иконкой',
    description: '',
  },
});
