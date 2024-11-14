import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

export const ContentArea = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  padding: 36px 40px;
  margin-bottom: 40px;
`;

export const ExampleWrapperWithWidth = styled(ContentArea)`
  > * {
    width: 90%;
  }
`;

export const SubHeader = styled.div`
  ${typography['Subtitle/Subtitle 3']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  margin-bottom: 4px;
  padding: 0;
`;

export const Text = styled.div`
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  margin-bottom: 16px;
  padding: 0;
`;

export const Section = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 0;
`;

export interface SectionDescriptionProps {
  header?: string;
  text?: string;
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 0;
`;
export interface ExampleSectionProps extends SectionDescriptionProps, HTMLAttributes<HTMLDivElement> {}

export const ExampleSection = ({ header, text, children, ...props }: ExampleSectionProps) => {
  return (
    <SectionWrapper>
      {(header || text) && <SectionDescription header={header} text={text} />}
      <ContentArea {...props}>{children}</ContentArea>
    </SectionWrapper>
  );
};
