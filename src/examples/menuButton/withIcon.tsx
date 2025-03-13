import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { MenuButton, MenuItem, RenderOptionProps } from '@admiral-ds/react-ui';
import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';
import { ExampleSection, rowFlexMixin } from '#routes/-helpers/examples';

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
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 56
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 48
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 40
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 32
        </MenuButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Secondary">
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 56
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 48
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 40
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 32
        </MenuButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Tertiary">
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 56
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 48
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 40
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
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
          Button 32
        </MenuButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Ghost">
        <MenuButton
          iconStart={<StarSolid />}
          appearance="ghost"
          dimension="xl"
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
          iconStart={<StarSolid />}
          appearance="ghost"
          dimension="l"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelL}
          onVisibilityChange={handleVisibilityChange}
        >
          Button 48
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
          appearance="ghost"
          dimension="m"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelM}
          onVisibilityChange={handleVisibilityChange}
        >
          Button 40
        </MenuButton>
        <MenuButton
          iconStart={<StarSolid />}
          appearance="ghost"
          dimension="s"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={modelS}
          onVisibilityChange={handleVisibilityChange}
        >
          Button 32
        </MenuButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="White">
        <DarkDiv>
          <MenuButton
            iconStart={<StarSolid />}
            appearance="white"
            dimension="xl"
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
            iconStart={<StarSolid />}
            appearance="white"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 48
          </MenuButton>
        </DarkDiv>
        <DarkDiv>
          <MenuButton
            iconStart={<StarSolid />}
            appearance="white"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 40
          </MenuButton>
        </DarkDiv>
        <DarkDiv>
          <MenuButton
            iconStart={<StarSolid />}
            appearance="white"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 32
          </MenuButton>
        </DarkDiv>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/menuButton/withIcon')({
  component: () => <WithIcon />,
  staticData: {
    title: 'MenuButton. С иконкой',
    description: '',
  },
});
