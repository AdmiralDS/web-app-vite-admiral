import { createFileRoute } from '@tanstack/react-router';
import { TreeSizes } from '#examples/tree/sizes';

export const Route = createFileRoute('/components/tree/sizes')({
  component: () => <TreeSizes />,
  staticData: {
    title: 'Tree. Базовый пример',
    description:
      'Присутствует два размера — с высотой строк M 40px и S 32px. Отступ слева 40px для каждого следующего уровня в размере M и 36px в размере S.',
  },
});
