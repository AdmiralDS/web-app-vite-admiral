import { createFileRoute } from '@tanstack/react-router';
import { Example } from '#examples/editMode';

export const Route = createFileRoute('/components/editMode/')({
  component: () => <Example />,
  staticData: {
    title: 'Edit mode. Базовый пример',
    description: 'Компонент для редактирования текста. Может быть с лэйблом или без него.',
  },
});
