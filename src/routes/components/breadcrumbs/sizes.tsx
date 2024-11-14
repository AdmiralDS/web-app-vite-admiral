import { createFileRoute } from '@tanstack/react-router';
import { Breadcrumbs } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const items = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2222222222222222222222222222222222222222' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { text: 'current page' },
];

export const BreadcrumbsSizes = () => {
  return (
    <ExampleSection>
      <Breadcrumbs items={items} />
      <Breadcrumbs items={items} dimension="m" />
      <Breadcrumbs items={items} dimension="s" />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/breadcrumbs/sizes')({
  component: () => <BreadcrumbsSizes />,
  staticData: {
    title: 'Breadcrumbs. Размеры',
    description: 'Компонент имеет три размера — L, M, S.',
  },
});
