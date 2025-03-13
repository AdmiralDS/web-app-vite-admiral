import { Breadcrumbs } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

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
