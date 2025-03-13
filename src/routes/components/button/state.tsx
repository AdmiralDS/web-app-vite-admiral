import { createFileRoute } from '@tanstack/react-router';
import { ButtonLoader } from '#examples/button/state';

export const Route = createFileRoute('/components/button/state')({
  component: () => <ButtonLoader />,
  staticData: {
    title: 'Состояния',
    description:
      'Кнопки в таких состояниях не активны, не реагируют на нажатие и при наведении отображают соответствующий курсор',
  },
});
