import { createFileRoute } from '@tanstack/react-router';
import { HintVariants } from '#examples/hint/variants';

export const Route = createFileRoute('/components/hint/variants')({
  component: () => <HintVariants />,
  staticData: {
    title: 'Hint. Наполнение',
    description:
      'Для удобства компонент имеет три фиксированных по ширине размера: 280px, 384px и 488px. Которые используются в зависимости от предполагаемого объема текста. Вы также можете задавать свою ширину вручную, в случаях, когда это необходимо. Высота компонента устанавливается автоматически при редактировании.',
  },
});
