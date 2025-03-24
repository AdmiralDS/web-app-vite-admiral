import { createFileRoute } from '@tanstack/react-router';
import { ListBasic } from '#examples/list';

export const Route = createFileRoute('/components/list/')({
  component: () => <ListBasic />,
  staticData: {
    title: 'List. Базовый пример',
    description:
      'Компонент для вертикальной группировки связанных по смыслу текстовых пунктов. Представлен в двух вариантах OrderedList и UnorderedList.',
  },
});
