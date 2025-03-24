import { createFileRoute } from '@tanstack/react-router';
import { PillsTooltip } from '#examples/pills/tooltip';

export const Route = createFileRoute('/components/pills/tooltip')({
  component: () => <PillsTooltip />,
  staticData: {
    title: 'Pills. Тултип',
    description:
      'В случаях ограниченного пространства задавайте максимальную ширину компонента, подсвечивая полный текст при наведении.',
  },
});
