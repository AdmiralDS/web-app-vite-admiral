import { createFileRoute } from '@tanstack/react-router';
import { SelectForceHideOverflowTooltip } from '#examples/select/forceHideOverflowTooltip';

export const Route = createFileRoute('/components/select/forceHideOverflowTooltip')({
  component: () => <SelectForceHideOverflowTooltip />,
  staticData: {
    title: 'Select с принудительным скрытием Tooltip при переполнении Title',
  },
});
