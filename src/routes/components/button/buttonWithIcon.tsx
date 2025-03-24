import { createFileRoute } from '@tanstack/react-router';
import { ButtonWithIcon } from '#examples/button/buttonWithIcon';

export const Route = createFileRoute('/components/button/buttonWithIcon')({
  component: () => <ButtonWithIcon />,
  staticData: {
    title: 'Button с иконкой',
    description: '',
  },
});
