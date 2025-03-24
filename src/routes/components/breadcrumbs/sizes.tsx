import { createFileRoute } from '@tanstack/react-router';
import { BreadcrumbsSizes } from '#examples/breadcrumbs/sizes';

export const Route = createFileRoute('/components/breadcrumbs/sizes')({
  component: () => <BreadcrumbsSizes />,
  staticData: {
    title: 'Breadcrumbs. Размеры',
    description: 'Компонент имеет три размера — L, M, S.',
  },
});
