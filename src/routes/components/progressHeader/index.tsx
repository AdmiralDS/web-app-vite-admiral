import { createFileRoute } from '@tanstack/react-router';
import { ProgressHeaderBasic } from '#examples/progressHeader';

export const Route = createFileRoute('/components/progressHeader/')({
  component: () => <ProgressHeaderBasic />,
  staticData: {
    title: 'ProgressHeader. Базовый пример',
    description:
      'Показывает визуальный прогресс загрузки страницы. Компонент отображается наверху страницы, непосредственно под шапкой браузера на самом верху рабочей области сайта. Ширина равняется ширине окна браузера.',
  },
});
