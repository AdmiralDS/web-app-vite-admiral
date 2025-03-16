import { createFileRoute } from '@tanstack/react-router';
import { SelectSizes } from '#examples/select/sizes';

export const Route = createFileRoute('/components/select/sizes')({
  component: () => <SelectSizes />,
  staticData: {
    title: 'Select. Размеры',
    description:
      'Для изменения размера выпадающего списка используется свойство dimension. Компонент существует в 3 размерах: 32px (s), 40px (m) и 56px (xl)',
  },
});
