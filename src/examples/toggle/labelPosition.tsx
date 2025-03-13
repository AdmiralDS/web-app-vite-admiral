import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Toggle } from '@admiral-ds/react-ui';

const LabelPosition = () => {
  return (
    <>
      <ExampleSection text="Без текста">
        <Toggle />
      </ExampleSection>
      <ExampleSection text="Текст справа">
        <Toggle>Text</Toggle>
      </ExampleSection>
      <ExampleSection text="Текст слева">
        <Toggle labelPosition="left">Text</Toggle>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/toggle/labelPosition')({
  component: () => <LabelPosition />,
  staticData: {
    title: 'Toggle. Расположение подписи',
    description: 'Варианты компонента без подписи, с подписью слева и справа.',
  },
});
