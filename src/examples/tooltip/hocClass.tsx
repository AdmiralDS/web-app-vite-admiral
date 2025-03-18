import { Component, forwardRef } from 'react';
import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { TooltipHoc, typography } from '@admiral-ds/react-ui';

type TestType = {
  innerRef: React.ForwardedRef<HTMLHeadingElement>;
  label: string;
};

const StyledH2 = styled.h2`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${typography['Header/H4']};
`;

class Test extends Component<TestType> {
  render() {
    const { innerRef, label } = this.props;
    return <StyledH2 ref={innerRef}>{label}</StyledH2>;
  }
}

const TestForwardingRef = forwardRef<HTMLHeadingElement, Omit<TestType, 'innerRef'>>((props, ref) => (
  <Test innerRef={ref} {...props} />
));
const TooltipedTest = TooltipHoc(TestForwardingRef);

export const TooltipHocClass = () => {
  return (
    <ExampleSection>
      <TooltipedTest
        renderContent={() => `Пример использования TooltipHoc с классовым компонентом.`}
        label={'Наведи на меня мышью и увидишь тултип'}
      />
    </ExampleSection>
  );
};
