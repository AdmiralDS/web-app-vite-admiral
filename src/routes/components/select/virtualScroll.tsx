import { createFileRoute } from '@tanstack/react-router';
import { SelectVirtualScroll } from '#examples/select/virtualScroll';

export const Route = createFileRoute('/components/select/virtualScroll')({
  component: () => <SelectVirtualScroll />,
  staticData: {
    title: 'VirtualScroll',
  },
});
