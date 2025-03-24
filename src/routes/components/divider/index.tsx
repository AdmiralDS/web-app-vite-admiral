import { createFileRoute } from '@tanstack/react-router';
import { DividerBasic } from '#examples/divider';

export const Route = createFileRoute('/components/divider/')({
  component: () => <DividerBasic />,
  staticData: {
    title: 'Divider. Базовый пример',
    description:
      'Компонент для визуального разделения групп контента, создания визуальной иерархии или упорядочивания длинного списка элементов.',
  },
});
