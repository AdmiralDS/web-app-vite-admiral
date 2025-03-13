import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
import { FloatingButton } from '@admiral-ds/react-ui';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';

const MobileWrapper = styled.div`
  width: 320px;
  padding: 20px 8px 80px;
  box-sizing: border-box;
  border: 8px solid var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  border-top-style: none;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  transform: scale(1);
`;

export const Template = () => {
  return (
    <ExampleSection text="На мобильных устройствах отступ по умолчанию равен 16px от краев экрана (вместо стандартных 28px).">
      <MobileWrapper>
        <FloatingButton mobile>
          <EmailOutline />
        </FloatingButton>
      </MobileWrapper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/floatingButton/mobile')({
  component: () => <Template />,
  staticData: {
    title: 'FloatingButton. Mobile',
    description: '',
  },
});
