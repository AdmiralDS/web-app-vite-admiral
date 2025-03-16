import { createFileRoute } from '@tanstack/react-router';
import { TagBasic } from '#examples/tag';

export const Route = createFileRoute('/components/tag/')({
  component: () => <TagBasic />,
  staticData: {
    title: 'Tag. Базовый пример',
    description:
      'Тэг — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг загружаются все элементы имеющие эту метку (опционально).',
  },
});
