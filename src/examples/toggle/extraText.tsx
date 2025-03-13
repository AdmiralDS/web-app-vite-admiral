import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { ExampleSection } from '#routes/-helpers/examples';
import { Toggle } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const ExtraText = () => {
  return (
    <>
      <ExampleSection text="Текст справа">
        <Toggle extraText="Add text">Text</Toggle>
        <Separator />
        <Toggle extraText="Add text" dimension="s">
          Text
        </Toggle>
      </ExampleSection>
      <ExampleSection text="Текст слева">
        <Toggle labelPosition="left" extraText="Add text">
          Text
        </Toggle>
        <Separator />
        <Toggle labelPosition="left" extraText="Add text" dimension="s">
          Text
        </Toggle>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/toggle/extraText')({
  component: () => <ExtraText />,
  staticData: {
    title: 'Toggle. Дополнительный текст',
    description: 'Варианты компонента с дополнительным текстом.',
  },
});
