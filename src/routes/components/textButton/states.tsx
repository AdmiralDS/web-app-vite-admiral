import { createFileRoute } from '@tanstack/react-router';
import AttachFileOutline from '@admiral-ds/icons/build/system/AttachFileOutline.svg?react';
import { ExampleSection, rowFlexMixin } from '../../-helpers/examples';
import { TextButton } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <ExampleSection cssMixin={rowFlexMixin}>
      <TextButton text="Text Button" iconStart={<AttachFileOutline />} />
      <TextButton text="Text Button" disabled iconStart={<AttachFileOutline />} />
      <TextButton text="Text Button" loading iconStart={<AttachFileOutline />} />
      <TextButton text="Text Button" skeleton iconEnd={<AttachFileOutline />} />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/textButton/states')({
  component: () => <Template />,
  staticData: {
    title: 'TextButton. Состояния',
    description: 'Disabled, loading, skeleton',
  },
});
