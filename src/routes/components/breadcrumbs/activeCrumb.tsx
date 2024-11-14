import { createFileRoute } from '@tanstack/react-router';
import { Breadcrumbs } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const items1 = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'current page' },
];

const items2 = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'previous page' },
];

export const BreadcrumbsActiveCrumb = () => {
  return (
    <ExampleSection>
      <Breadcrumbs items={items1} />
      <Breadcrumbs items={items2} lastBreadcrumbActive />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/breadcrumbs/activeCrumb')({
  component: () => <BreadcrumbsActiveCrumb />,
  staticData: {
    title: 'Breadcrumbs. Пример с активной/неактивной последней вкладкой',
    description:
      'Последняя вкладка в компоненте может быть либо неактивной (по умолчанию), в таком случае она отображает текущее местоположение. Либо последняя вкладка активна и отображает предыдущий уровень сайта. Управляет поведением последней вкладки параметр lastBreadcrumbActive.',
  },
});
