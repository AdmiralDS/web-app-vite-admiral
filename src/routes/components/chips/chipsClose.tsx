import { createFileRoute } from '@tanstack/react-router';
import { ChipsClose } from '#examples/chips/chipsClose';

export const Route = createFileRoute('/components/chips/chipsClose')({
  component: () => <ChipsClose />,
  staticData: {
    title: 'Chips с текстом и иконкой закрыть',
    description:
      'Взаимодействовать можно только с чипсами имеющими иконку закрытия “Close”. При нажатии на иконку закрытия элемент удаляется из списка выбранных.',
  },
});
