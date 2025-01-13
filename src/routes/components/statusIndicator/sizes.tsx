import { createFileRoute } from '@tanstack/react-router';

import { StatusIndicator } from '@admiral-ds/react-ui';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';
import { ExampleSection } from '../../-helpers/examples';

const Template = () => {
  return (
    <>
      <ExampleSection text="Размер M">
        <StatusIndicator dimension="m" text="P 16px/24 book" icon={<CheckOutline />} />
      </ExampleSection>
      <ExampleSection text="Размер S">
        <StatusIndicator dimension="s" text="P 14px/20 book" icon={<CheckOutline />} />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/statusIndicator/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'StatusIndicator. Размеры',
    description:
      'Представлены в двух размерностях по высоте — M и S. Ширина изменяется автоматически, в зависимости от объема текста.',
  },
});
