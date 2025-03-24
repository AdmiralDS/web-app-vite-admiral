import { createFileRoute } from '@tanstack/react-router';
import { BreadcrumbsLink } from '#examples/breadcrumbs/link';

export const Route = createFileRoute('/components/breadcrumbs/link')({
  component: () => <BreadcrumbsLink />,
  staticData: {
    title: 'Breadcrumbs. Пример с react-router',
    description:
      'С помощью параметров linkAs и linkProps (входят в состав BreadcrumbProps) можно вместо обычного anchor отрендерить внутри хлебной крошки любой другой компонент. Этот компонент можно задать с помощью свойства linkAs и передать в него необходимые параметры через linkProps.',
  },
});
