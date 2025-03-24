import { createFileRoute } from '@tanstack/react-router';
import { MenuWithTooltip } from '#examples/dropdown/menuWithTooltip';

export const Route = createFileRoute('/components/dropdown/menuWithTooltip')({
  component: () => <MenuWithTooltip />,
  staticData: {
    title: 'Menu. Длинный текст',
    description: '',
  },
});
