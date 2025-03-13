import { createFileRoute } from '@tanstack/react-router';
import { BreadcrumbsActiveCrumb } from '#examples/breadcrumbs/activeCrumb';

export const Route = createFileRoute('/components/breadcrumbs/activeCrumb')({
  component: () => <BreadcrumbsActiveCrumb />,
  staticData: {
    title: 'Breadcrumbs. Пример с активной/неактивной последней вкладкой',
    description:
      'Последняя вкладка в компоненте может быть либо неактивной (по умолчанию), в таком случае она отображает текущее местоположение. Либо последняя вкладка активна и отображает предыдущий уровень сайта. Управляет поведением последней вкладки параметр lastBreadcrumbActive.',
  },
});
