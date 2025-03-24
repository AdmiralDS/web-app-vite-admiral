import { createFileRoute } from '@tanstack/react-router';
import { BreadcrumbsIcons } from '#examples/breadcrumbs/icons';

export const Route = createFileRoute('/components/breadcrumbs/icons')({
  component: () => <BreadcrumbsIcons />,
  staticData: {
    title: 'Breadcrumbs. Пример вкладок с иконками',
    description:
      'При необходимости в любой хлебной крошке можно отобразить иконку слева от текста, для этого у хлебной крошки должен быть задан параметр iconStart.',
  },
});
