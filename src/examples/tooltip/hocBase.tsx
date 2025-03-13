import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { InputField, TooltipHoc } from '@admiral-ds/react-ui';

const TooltipedInput = TooltipHoc(InputField);

export const Template = () => {
  return (
    <ExampleSection>
      <TooltipedInput
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        label={'TooltipHoc. Базовый пример.'}
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/tooltip/hocBase')({
  component: () => <Template />,
  staticData: {
    title: 'TooltipHoc. Базовый пример',
    description: 'Компонент позволяет использовать тултип с преднастроенной базовой логикой',
  },
});
