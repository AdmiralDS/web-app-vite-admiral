import { createFileRoute } from '@tanstack/react-router';
import { TagWithIcon } from '#examples/tag/withIcon';

export const Route = createFileRoute('/components/tag/withIcon')({
  component: () => <TagWithIcon />,
  staticData: {
    title: 'Tag. С иконкой',
    description:
      'Тэги могут быть с иконками, но только в том случае, если статус отображается через цвет обводки и фона (параметр statusViaBackground установлен в true).',
  },
});
