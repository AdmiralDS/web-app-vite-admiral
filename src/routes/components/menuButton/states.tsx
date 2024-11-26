import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { MenuButton, MenuItem, RenderOptionProps } from '@admiral-ds/react-ui';
import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';
import { ExampleSection, rowFlexMixin } from '../../-helpers/examples';

const DarkDiv = styled.div`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    ${(p) => p.theme.color['Special/Dark Static Neutral 00']}
  );
  padding: 2px;
`;

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
  return (
    <>
      <ExampleSection cssMixin={rowFlexMixin} text="Primary">
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
        <MenuButton
          appearance="primary"
          disabled
          iconStart={<StarSolid />}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelM}
          onVisibilityChange={handleVisibilityChange}
        >
          Button 56
        </MenuButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Secondary">
        <MenuButton
          appearance="secondary"
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
        <MenuButton
          appearance="secondary"
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
        <MenuButton
          appearance="secondary"
          disabled
          iconStart={<StarSolid />}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelM}
          onVisibilityChange={handleVisibilityChange}
        >
          Button 56
        </MenuButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Tertiary">
        <MenuButton
          appearance="tertiary"
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
        <MenuButton
          appearance="tertiary"
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
        <MenuButton
          appearance="tertiary"
          disabled
          iconStart={<StarSolid />}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelM}
          onVisibilityChange={handleVisibilityChange}
        >
          Button 56
        </MenuButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Ghost">
        <MenuButton
          appearance="ghost"
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
        <MenuButton
          appearance="ghost"
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
        <MenuButton
          appearance="ghost"
          disabled
          iconStart={<StarSolid />}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelM}
          onVisibilityChange={handleVisibilityChange}
        >
          Button 56
        </MenuButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="White">
        <DarkDiv>
          <MenuButton
            appearance="white"
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
        </DarkDiv>
        <DarkDiv>
          <MenuButton
            appearance="white"
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
        </DarkDiv>
        <DarkDiv>
          <MenuButton
            appearance="white"
            disabled
            iconStart={<StarSolid />}
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
        </DarkDiv>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/menuButton/states')({
  component: () => <States />,
  staticData: {
    title: 'Button. Состояния',
    description: 'Состояния аналогичны Button.',
  },
});
