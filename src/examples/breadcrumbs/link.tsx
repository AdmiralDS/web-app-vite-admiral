import { Breadcrumbs } from '@admiral-ds/react-ui';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import { ExampleSection } from '#routes/-helpers/examples';

const items = [
  { linkAs: RouterLink, text: 'page 1', linkProps: { to: '/page1' } },
  { linkAs: RouterLink, text: 'page 2222222222222222222222222222222222222222', linkProps: { to: '/page2' } },
  { linkAs: RouterLink, text: 'page 3', linkProps: { to: '/page3' } },
  { text: 'current page' },
];

export const BreadcrumbsLink = () => {
  return (
    <Router>
      <ExampleSection>
        <Breadcrumbs items={items} />
      </ExampleSection>
    </Router>
  );
};
