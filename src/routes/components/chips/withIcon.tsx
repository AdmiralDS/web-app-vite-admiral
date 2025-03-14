import { createFileRoute } from '@tanstack/react-router';
import { ChipsIcon } from '#examples/chips/withIcon';

export const Route = createFileRoute('/components/chips/withIcon')({
  component: () => <ChipsIcon />,
  staticData: {
    title: 'Chips с иконкой',
    description: 'В компоненте можно включать иконки справа и/или слева от текста.',
  },
});
