import { createFileRoute } from '@tanstack/react-router';
import { NumberInputBasic } from '#examples/numberInput';

export const Route = createFileRoute('/components/numberInput/')({
  component: () => <NumberInputBasic />,
  staticData: {
    title: 'NumberInput. Базовый пример',
    description: 'Поле ввода с возможностью ввода числовых значений через нажатие с заданным шагом',
  },
});
