import { ExampleSection } from '#examples/-helpers';
import { InputField, TooltipHoc } from '@admiral-ds/react-ui';

const TooltipedInput = TooltipHoc(InputField);

export const TooltipHocBase = () => {
  return (
    <ExampleSection>
      <TooltipedInput
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        label={'TooltipHoc. Базовый пример.'}
      />
    </ExampleSection>
  );
};
