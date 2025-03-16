import { createFileRoute } from '@tanstack/react-router';
import { Base } from '#examples/iconButtonGroup';

export const Route = createFileRoute('/components/iconButtonGroup/')({
  component: () => <Base />,
  staticData: {
    title: 'IconButtonGroup. Базовый пример',
    description: 'Группа кнопок-иконок со связанными по смыслу действиями или действиями, лежащими в одном контексте.',
  },
});
