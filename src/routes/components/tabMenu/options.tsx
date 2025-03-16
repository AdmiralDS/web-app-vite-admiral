import { createFileRoute } from '@tanstack/react-router';
import { OptionsExample } from '#examples/tabMenu/options';

export const Route = createFileRoute('/components/tabMenu/options')({
  component: () => <OptionsExample />,
  staticData: {
    title: 'TabMenuHorizontal. Опции',
  },
});
