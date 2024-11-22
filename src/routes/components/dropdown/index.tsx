import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { ExampleSection } from '../../-helpers/examples';
import {
  Button,
  DropdownContainer,
  DropMenu,
  mediumGroupBorderRadius,
  Menu,
  MenuItem,
  typography,
} from '@admiral-ds/react-ui';
import type { RenderOptionProps } from '@admiral-ds/react-ui';
import { MenuWrapper } from '../../-helpers/menu';

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const StyledText = styled.div`
  ${typography['Body/Body 1 Short']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  padding: 8px;
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  overflow: auto;
`;

const STORY_ITEMS = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
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
    disabled: true,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 6,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 7,
  },
];

const handleVisibilityChangeUnControlledState = (isVisible: boolean) => {
  // eslint-disable-next-line no-console
  console.log('onVisibilityChange with uncontrolled state');
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const DropdownDescription = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const clickOutside = (e: Event) => {
    if (e.target && buttonRef.current?.contains(e.target as Node)) {
      return;
    }
    setOpen(!open);
  };

  const [selected, setSelected] = useState<string | undefined>(undefined);

  const model = useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, []);

  return (
    <>
      <ExampleSection text="DropMenu">
        <DropMenu
          items={model}
          onSelectItem={(id) => {
            // eslint-disable-next-line no-console
            console.log(`selected: ${id}`);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChangeUnControlledState}
          selected={selected}
          dropContainerClassName="dropContainerClass"
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, disabled }) => {
            return (
              <Button
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                disabled={disabled}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
              >
                Нажми
                {statusIcon}
              </Button>
            );
          }}
        />
      </ExampleSection>
      <ExampleSection text="Menu">
        <MenuWrapper style={{ width: 'fit-content' }}>
          <Menu defaultIsActive={false} model={model} />
        </MenuWrapper>
      </ExampleSection>
      <ExampleSection text="DropdownContainer">
        <Button ref={buttonRef} onClick={() => setOpen(!open)}>
          Текст
        </Button>
        {open && (
          <DropdownContainer
            alignSelf="flex-end"
            targetElement={buttonRef.current}
            onClickOutside={clickOutside}
            className="dropContainerClass"
          >
            <StyledText>
              Это просто контейнер, в который можно поместить все что угодно. Он просто умеет позиционироваться
            </StyledText>
          </DropdownContainer>
        )}
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/dropdown/')({
  component: () => <DropdownDescription />,
  staticData: {
    title: 'DropdownMenu',
    description:
      'Для оформления выпадающего меню можно использовать компонент DropMenu. Если необходима кастомизация, то есть возможность использовать только Menu или DropdownContainer',
  },
});
