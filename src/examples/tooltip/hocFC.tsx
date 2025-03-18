import { forwardRef } from 'react';
import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { TooltipHoc, typography } from '@admiral-ds/react-ui';

const StyledH2 = styled.h2`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${typography['Header/H4']};
`;

const H2 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <StyledH2 ref={ref} {...props}>
      Наведи на меня мышью и увидишь тултип
    </StyledH2>
  );
});
const TooltipedHeading = TooltipHoc(H2);

export const TooltipHocFC = () => {
  return (
    <ExampleSection>
      <TooltipedHeading renderContent={() => `Пример использования TooltipHoc с функциональным компонентом.`} />
    </ExampleSection>
  );
};
