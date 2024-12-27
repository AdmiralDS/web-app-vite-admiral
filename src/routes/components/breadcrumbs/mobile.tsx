import { createFileRoute } from '@tanstack/react-router';
import { Breadcrumbs } from '@admiral-ds/react-ui';
import { ExampleSection, MobileTopContainer } from '../../-helpers/examples';

const items = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'page 5' },
  { url: '#', text: 'page 6' },
  { url: '#', text: 'page 7' },
  { url: '#', text: 'page 8' },
  { url: '#', text: 'page 9' },
  { url: '#', text: 'page 10' },
  { url: '#', text: 'page 11' },
  { text: 'current page' },
];

export const BreadcrumbsMobile = () => {
  return (
    <ExampleSection>
      <MobileTopContainer>
        <Breadcrumbs items={items} mobile />
      </MobileTopContainer>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/breadcrumbs/mobile')({
  component: () => <BreadcrumbsMobile />,
  staticData: {
    title: 'Breadcrumbs. Mobile',
    description:
      'На мобильных устройствах предполагается использовать компонент в режиме адаптива (mobile). Компонент настроен таким образом, что если закладки не помещаются в ширину экрана, то они “выходят” за область экрана и их можно прокручивать свайпом, при этом текущая вкладка видна по дефолту, а вкладки, которые не помещаются, “уходят” за левую часть экрана (как на примере).',
  },
});
