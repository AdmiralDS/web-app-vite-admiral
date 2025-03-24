import { createFileRoute } from '@tanstack/react-router';
import { DividerStyle } from '#examples/divider/style';

export const Route = createFileRoute('/components/divider/style')({
  component: () => <DividerStyle />,
  staticData: {
    title: 'Divider. Стиль (appearance)',
  },
});
