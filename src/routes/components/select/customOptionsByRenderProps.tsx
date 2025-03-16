import { createFileRoute } from '@tanstack/react-router';
import { SelectCustomOptionsByRenderProps } from '#examples/select/customOptionsByRenderProps';

export const Route = createFileRoute('/components/select/customOptionsByRenderProps')({
  component: () => <SelectCustomOptionsByRenderProps />,
  staticData: {
    title: 'Кастомные опции через renderProps',
  },
});
