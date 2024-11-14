import { createFileRoute } from '@tanstack/react-router';
import { Badge } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

export const BadgeBasic = () => {
  return (
    <ExampleSection>
      <Badge>4</Badge>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/badge/')({
  component: () => <BadgeBasic />,
  staticData: {
    title: 'Badge. Базовый пример',
    description:
      'Обычно дополняет другие компоненты и показывает количественные зачения. Например, в компоненте Tabs может показывать количество элементов в закладке. Или показывать количество оповещений в панели нотификации.',
  },
});
