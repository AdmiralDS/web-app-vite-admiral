import { useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { Button, DropdownContainer, Menu, MenuItem, typography } from '@admiral-ds/react-ui';
import type { RenderOptionProps } from '@admiral-ds/react-ui';

import CardSolid from '@admiral-ds/icons/build/finance/CardSolid.svg?react';
import { ExampleSection } from '#examples/-helpers';

const StyledAdditionalText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;
`;

const containerContrastBorder = css`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

const cards = [
  {
    id: '1',
    label: 'Номер Карты /****45',
    value: 1,
  },
  {
    id: '2',
    label: 'Номер Карты /****75',
    value: 2,
  },
  { id: '3', label: 'Номер Карты /****22', value: 3 },
  {
    id: '4',
    label: 'Номер Карты /****33',
    value: 4,
  },
  {
    id: '5',
    label: 'Номер Карты /****21',
    value: 5,
  },
  {
    id: '6',
    label: 'Номер Карты /****35',
    value: 6,
  },
  { id: '7', label: 'Номер Карты /****39', value: 7 },
  {
    id: '8',
    label: 'Номер Карты /****41',
    value: 8,
  },
];

export const MenuContainer = () => {
  const model = useMemo(() => {
    return cards.map((item) => {
      return {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MenuItem key={item.id} {...options}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {item.label} <CardSolid width={24} height={24} />
            </div>
            <StyledAdditionalText>Дополнительный текст</StyledAdditionalText>
          </MenuItem>
        ),
      };
    }, []);
  }, []);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [active, setActive] = useState<string | undefined>(undefined);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSelectItem = (value?: string) => {
    setSelected(value);
    setOpen(false);
  };

  const clickOutside = (e: Event) => {
    if (e.target && buttonRef.current?.contains(e.target as Node)) {
      return;
    }
    setOpen(!open);
  };

  return (
    <ExampleSection text="При необходимости можно использовать вместо компонента DropMenu комбинацию компонентов DropdownContainer и Menu. Это дает более широкие возможности кастомизации.">
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Карты
      </Button>
      {open && (
        <DropdownContainer
          alignSelf="flex-start"
          targetElement={buttonRef.current}
          onClickOutside={clickOutside}
          dropContainerCssMixin={containerContrastBorder}
          className="dropContainerClass"
        >
          <Menu
            model={model}
            selected={selected}
            active={active}
            onActivateItem={setActive}
            onSelectItem={handleSelectItem}
          />
        </DropdownContainer>
      )}
    </ExampleSection>
  );
};
