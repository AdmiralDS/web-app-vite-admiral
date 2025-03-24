import { createFileRoute } from '@tanstack/react-router';
import { ListOrdered } from '#examples/list/orderedList';

export const Route = createFileRoute('/components/list/orderedList')({
  component: () => <ListOrdered />,
  staticData: {
    title: 'OrderedList. Виды и размеры.',
    description:
      'OrderedList – компонент для вертикальной группировки связанных по смыслу текстовых пунктов. OrderedList следует использовать, если вам необходим упорядоченный, пронумерованный список. Компонент представлен в двух видах (Numbers и Letters) и двух размерах (S и M). В списках Letters можно использовать как прописные (lower-letters), так и заглавные буквы (upper-letters).',
  },
});
