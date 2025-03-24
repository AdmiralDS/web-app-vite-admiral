import { createFileRoute } from '@tanstack/react-router';
import { BreadcrumbsBasic } from '#examples/breadcrumbs';

export const Route = createFileRoute('/components/breadcrumbs/')({
  component: () => <BreadcrumbsBasic />,
  staticData: {
    title: 'Breadcrumbs. Базовый пример',
    description:
      'Вторичный элемент навигации, который позволяет пользователю понять, на каком уровне сайта он находится, и вернуться на один из предыдущих уровней.',
  },
});
