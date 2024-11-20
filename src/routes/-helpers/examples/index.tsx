import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

export const ContentArea = styled.div<{ $cssMixin?: ReturnType<typeof css> }>`
  box-sizing: border-box;
  border-radius: 8px;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  padding: 36px 40px;
  ${(p) => p.$cssMixin && p.$cssMixin};
`;

export const columnFlexMixin = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SubHeader = styled.div`
  ${typography['Subtitle/Subtitle 3']}
  margin-bottom: 8px;
`;

export const Text = styled.div`
  ${typography['Body/Body 2 Long']}
  max-width: 720px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
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
      <ContentArea {...props} $cssMixin={cssMixin}>{children}</ContentArea>
    </SectionWrapper>
  );
};
