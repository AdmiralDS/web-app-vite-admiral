import { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { Button, InputField, InputFieldProps, refSetter, TooltipHoc } from '@admiral-ds/react-ui';

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;

const Component = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleBtnClick = () => {
    inputRef.current?.focus();
  };
  return (
    <>
      <InputField ref={refSetter(ref, inputRef)} {...props} />
      <Separator />
      <Button onClick={handleBtnClick}>Click me and focus input</Button>
    </>
  );
});
const TooltipedComponent = TooltipHoc(Component);

export const TooltipHocRefSetter = () => {
  return (
    <ExampleSection>
      <TooltipedComponent
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        label={'Использование утилиты refSetter'}
      />
    </ExampleSection>
  );
};
