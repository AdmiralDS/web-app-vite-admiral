import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

export const ContentArea = styled.div<{ $cssMixin?: ReturnType<typeof css> }>`
  box-sizing: border-box;
  border-radius: 8px;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  padding: 36px 40px;
  margin-top: 16px;
  ${(p) => p.$cssMixin && p.$cssMixin};
`;

export const columnFlexMixin = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const rowFlexMixin = css`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;

export const SubHeader = styled.div`
  ${typography['Subtitle/Subtitle 3']}
  margin-bottom: 8px;
`;

export const Text = styled.div`
  ${typography['Body/Body 2 Long']}
  max-width: 720px;

  & > p:last-of-type {
    margin: 0;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const PStyled = styled.p`
  margin: 0 0 20px;
`;

export interface SectionDescriptionProps {
  header?: React.ReactNode;
  text?: React.ReactNode;
}
export const SectionDescription = ({ header, text }: SectionDescriptionProps) => {
  return (
    <Section>
      {header && <SubHeader>{header}</SubHeader>}
      {text && <Text>{text}</Text>}
    </Section>
  );
};

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
`;
export interface ExampleSectionProps extends SectionDescriptionProps, HTMLAttributes<HTMLDivElement> {
  cssMixin?: ReturnType<typeof css>;
}

export const ExampleSection = ({ header, text, children, cssMixin, ...props }: ExampleSectionProps) => {
  return (
    <SectionWrapper>
      {(header || text) && <SectionDescription header={header} text={text} />}
      {children && (
        <ContentArea {...props} $cssMixin={cssMixin}>
          {children}
        </ContentArea>
      )}
    </SectionWrapper>
  );
};

export function uid(): string {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, '');
}

const MobileTopWrapper = styled.div`
  width: 320px;
  padding: 20px 8px 80px;
  box-sizing: border-box;
  border: 8px solid var(--admiral-color-Neutral_Neutral50, ${({ theme }) => theme.color['Neutral/Neutral 50']});
  border-bottom-style: none;
  background-color: var(--admiral-color-Neutral_Neutral00, ${({ theme }) => theme.color['Neutral/Neutral 00']});
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-top: 20px;
`;

const MobileBottomWrapper = styled.div`
  width: 320px;
  padding-top: 16px;
  box-sizing: border-box;
  border: 8px solid var(--admiral-color-Neutral_Neutral50, ${({ theme }) => theme.color['Neutral/Neutral 50']});
  border-top-style: none;
  background-color: var(--admiral-color-Neutral_Neutral00, ${({ theme }) => theme.color['Neutral/Neutral 00']});
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface MobileProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const MobileTopContainer = ({ children, ...props }: MobileProps) => {
  return (
    <MobileTopWrapper {...props}>
      <Wrapper>{children}</Wrapper>
    </MobileTopWrapper>
  );
};

export const MobileBottomContainer = ({ children, ...props }: MobileProps) => {
  return (
    <MobileBottomWrapper {...props}>
      <Wrapper>{children}</Wrapper>
    </MobileBottomWrapper>
  );
};
