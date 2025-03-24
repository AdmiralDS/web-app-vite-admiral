import { createFileRoute } from '@tanstack/react-router';
import { FlexBasic } from '#examples/flex';

export const Route = createFileRoute('/components/flex/')({
  component: () => <FlexBasic />,
  staticData: {
    title: 'Flex. Базовый пример',
    description: '',
  },
});
