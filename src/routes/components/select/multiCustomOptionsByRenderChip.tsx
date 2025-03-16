import { createFileRoute } from '@tanstack/react-router';
import { SelectMultiCustomOptionsByRenderChip } from '#examples/select/multiCustomOptionsByRenderChip';

export const Route = createFileRoute('/components/select/multiCustomOptionsByRenderChip')({
  component: () => <SelectMultiCustomOptionsByRenderChip />,
  staticData: {
    title: 'mode="multiple" с кастомными опциями через Option children',
  },
});
