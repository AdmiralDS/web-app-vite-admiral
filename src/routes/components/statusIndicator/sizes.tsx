import { createFileRoute } from '@tanstack/react-router';
import { StatusIndicatorSizes } from '#examples/statusIndicator/sizes';

export const Route = createFileRoute('/components/statusIndicator/sizes')({
  component: () => <StatusIndicatorSizes />,
  staticData: {
    title: 'StatusIndicator. Размеры',
    description:
      'Представлены в двух размерностях по высоте — M и S. Ширина изменяется автоматически, в зависимости от объема текста.',
  },
});
