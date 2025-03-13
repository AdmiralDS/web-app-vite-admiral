import { createFileRoute } from '@tanstack/react-router';
import { AvatarXXS } from '#examples/avatar/sizeXXS';

export const Route = createFileRoute('/components/avatar/sizeXXS')({
  component: () => <AvatarXXS />,
  staticData: {
    title: 'Avatar. Размер XXS',
    description:
      'Не используется самостоятельно, как отдельно стоящий и в группах. Применяется в составе других компонентов с размерным рядом элементов 20px. Имеет только два типа: с инициалами или с фото.',
  },
});
