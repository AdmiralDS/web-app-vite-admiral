import { createFileRoute } from '@tanstack/react-router';
import { WithPaddingExample } from '#examples/tabMenu/withPadding';

export const Route = createFileRoute('/components/tabMenu/withPadding')({
  component: () => <WithPaddingExample />,
  staticData: {
    title: 'CardTabMenu. С отступами',
  },
});
