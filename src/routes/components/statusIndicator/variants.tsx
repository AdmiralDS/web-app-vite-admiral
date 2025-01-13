import { createFileRoute } from '@tanstack/react-router';

import { StatusIndicator } from '@admiral-ds/react-ui';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';
import { ExampleSection } from '../../-helpers/examples';

const Template = () => {
  return (
    <>
      <ExampleSection text="С иконкой слева">
        <StatusIndicator text="Текст" icon={<CheckOutline />} />
      </ExampleSection>
      <ExampleSection text="С иконкой справа">
        <StatusIndicator displayRight={false} text="Текст" icon={<CheckOutline />} />
      </ExampleSection>
      <ExampleSection text="Только иконка">
        <StatusIndicator text="" icon={<CheckOutline />} />
      </ExampleSection>
      <ExampleSection text="Только текст">
        <StatusIndicator text="Текст" />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/statusIndicator/variants')({
  component: () => <Template />,
  staticData: {
    title: 'StatusIndicator. Варианты',
    description: '',
  },
});
