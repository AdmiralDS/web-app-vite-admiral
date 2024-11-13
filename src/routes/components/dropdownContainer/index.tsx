import { createFileRoute } from '@tanstack/react-router';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import { Button, DropdownContainer, mediumGroupBorderRadius, typography } from '@admiral-ds/react-ui';
import { ContentArea } from '../../-helpers/examples';

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

export const SimpleContainer = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const clickOutside = (e: Event) => {
    if (e.target && buttonRef.current?.contains(e.target as Node)) {
      return;
    }
    setOpen(!open);
  };

  return (
    <ContentArea>
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
    </ContentArea>
  );
};

export const Route = createFileRoute('/components/dropdownContainer/')({
  component: () => <SimpleContainer />,
  staticData: {
    title: 'Простой контейнер',
    description: '',
  },
});
