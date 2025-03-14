import { createFileRoute } from '@tanstack/react-router';
import { ChipsBasic } from '#examples/chips';

export const Route = createFileRoute('/components/chips/')({
  component: () => <ChipsBasic />,
  staticData: {
    title: 'Chips. Базовый пример',
    description: 'Чипсы представляют собой перечень выбранных фильтров, опций или каких-либо элементов из списка.',
  },
});
