import { createFileRoute } from '@tanstack/react-router';
import { MultiInputSizeExample } from '#examples/multiInput/size';

export const Route = createFileRoute('/components/multiInput/size')({
  component: () => <MultiInputSizeExample />,
  staticData: {
    title: 'MultiInput. Размеры',
    description: 'Компонент существует в 3 размерах',
  },
});
