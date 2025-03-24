import { createFileRoute } from '@tanstack/react-router';
import { ListUnordered } from '#examples/list/unorderedList';

export const Route = createFileRoute('/components/list/unorderedList')({
  component: () => <ListUnordered />,
  staticData: {
    title: 'UnorderedList. Виды и размеры.',
    description:
      'UnorderedList – компонент для вертикальной группировки связанных по смыслу текстовых пунктов. UnorderedList следует использовать, если вам необходим неупорядоченный список, когда смысл списка не меняется в зависимости от порядка элементов. Компонент представлен в трех видах (Bullet, Virgule, Icon) и двух размерах (S и M).',
  },
});
