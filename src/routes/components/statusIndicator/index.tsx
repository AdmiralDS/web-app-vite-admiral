import { createFileRoute } from '@tanstack/react-router';

import { StatusIndicator } from '@admiral-ds/react-ui';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';
import { ExampleSection } from '../../-helpers/examples';

const Template = () => {
  return (
    <ExampleSection>
      <StatusIndicator text="Текст индикатора" icon={<CheckOutline />} />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/statusIndicator/')({
  component: () => <Template />,
  staticData: {
    title: 'StatusIndicator. Базовый пример',
    description: 'Используется, чтобы описать, в каком состоянии находится тот или иной объект или действие.',
  },
});
