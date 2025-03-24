import { createFileRoute } from '@tanstack/react-router';
import { BreadcrumbsMobile } from '#examples/breadcrumbs/mobile';

export const Route = createFileRoute('/components/breadcrumbs/mobile')({
  component: () => <BreadcrumbsMobile />,
  staticData: {
    title: 'Breadcrumbs. Mobile',
    description:
      'На мобильных устройствах предполагается использовать компонент в режиме адаптива (mobile). Компонент настроен таким образом, что если закладки не помещаются в ширину экрана, то они “выходят” за область экрана и их можно прокручивать свайпом, при этом текущая вкладка видна по дефолту, а вкладки, которые не помещаются, “уходят” за левую часть экрана (как на примере).',
  },
});
