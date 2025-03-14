import { createFileRoute } from '@tanstack/react-router';
import { ChipsSelect } from '#examples/chips/select';

export const Route = createFileRoute('/components/chips/select')({
  component: () => <ChipsSelect />,
  staticData: {
    title: 'Chips с текстом и выбором',
    description:
      'Набор из двух и более чипсов, которые могут быть в активном (выбранном) состоянии или пассивном (выключенном) состоянии. Chips в режиме радио кнопок, когда можно выбрать только одно значение из списка.',
  },
});
