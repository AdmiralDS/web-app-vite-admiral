import { Breadcrumbs } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

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
