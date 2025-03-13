import { createFileRoute } from '@tanstack/react-router';
import AttachFileOutline from '@admiral-ds/icons/build/system/AttachFileOutline.svg?react';
import { ExampleSection, rowFlexMixin } from '#routes/-helpers/examples';
import { TextButton } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <ExampleSection cssMixin={rowFlexMixin}>
      <TextButton text="Text Button" />
      <TextButton text="Text Button" iconStart={<AttachFileOutline />} />
      <TextButton text="Text Button" iconEnd={<AttachFileOutline />} />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/textButton/')({
  component: () => <Template />,
  staticData: {
    title: 'TextButton. Базовый пример',
    description: 'Может быть с иконкой в начале, в конце или только с текстом.',
  },
});
