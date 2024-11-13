import { createFileRoute } from '@tanstack/react-router';
import { Breadcrumbs } from '@admiral-ds/react-ui';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import { ExampleWrapperWithWidth } from '../../-helpers/examples';

const items = [
  { linkAs: RouterLink, text: 'page 1', linkProps: { to: '/page1' } },
  { linkAs: RouterLink, text: 'page 2222222222222222222222222222222222222222', linkProps: { to: '/page2' } },
  { linkAs: RouterLink, text: 'page 3', linkProps: { to: '/page3' } },
  { text: 'current page' },
];

export const BreadcrumbsLink = () => {
  return (
    <Router>
      <ExampleWrapperWithWidth>
        <Breadcrumbs items={items} />
      </ExampleWrapperWithWidth>
    </Router>
  );
};

export const Route = createFileRoute('/components/breadcrumbs/link')({
  component: () => <BreadcrumbsLink />,
  staticData: {
    title: 'Breadcrumbs. Пример с react-router',
    description:
      'С помощью параметров linkAs и linkProps (входят в состав BreadcrumbProps) можно вместо обычного anchor отрендерить внутри хлебной крошки любой другой компонент. Этот компонент можно задать с помощью свойства linkAs и передать в него необходимые параметры через linkProps.',
  },
});
