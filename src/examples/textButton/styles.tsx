import { createFileRoute } from '@tanstack/react-router';
import AttachFileOutline from '@admiral-ds/icons/build/system/AttachFileOutline.svg?react';
import { ExampleSection, rowFlexMixin } from '#routes/-helpers/examples';
import { TextButton } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <>
      <ExampleSection cssMixin={rowFlexMixin} text="Primary">
        <TextButton text="Text Button" dimension="m" />
        <TextButton text="Text Button" dimension="s" />
        <TextButton text="Text Button" iconStart={<AttachFileOutline />} dimension="m" />
        <TextButton text="Text Button" iconEnd={<AttachFileOutline />} dimension="s" />
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Seondary">
        <TextButton text="Text Button" appearance="secondary" dimension="m" />
        <TextButton text="Text Button" appearance="secondary" dimension="s" />
        <TextButton text="Text Button" appearance="secondary" iconStart={<AttachFileOutline />} dimension="m" />
        <TextButton text="Text Button" appearance="secondary" iconEnd={<AttachFileOutline />} dimension="s" />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/textButton/styles')({
  component: () => <Template />,
  staticData: {
    title: 'TextButton. Размеры и стили',
    description: 'Существует в двух размерах (M, S) и стилях (primary, secondary).',
  },
});
