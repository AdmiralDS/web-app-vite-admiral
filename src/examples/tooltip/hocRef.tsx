import { useRef } from 'react';
import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { Button, InputField, TooltipHoc } from '@admiral-ds/react-ui';

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;

const TooltipedInput = TooltipHoc(InputField);

export const TooltipHocRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleBtnClick = () => {
    inputRef.current?.focus();
  };

  return (
    <ExampleSection>
      <TooltipedInput
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        ref={inputRef}
        label={'Прокидывание ref на результат вызова TooltipHoc'}
      />
      <Separator />
      <Button onClick={handleBtnClick}>Click me and focus input</Button>
    </ExampleSection>
  );
};
