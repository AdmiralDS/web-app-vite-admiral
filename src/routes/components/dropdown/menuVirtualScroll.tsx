import { createFileRoute } from '@tanstack/react-router';
import { MenuVirtualScroll } from '#examples/dropdown/menuVirtualScroll';

export const Route = createFileRoute('/components/dropdown/menuVirtualScroll')({
  component: () => <MenuVirtualScroll />,
  staticData: {
    title: 'Menu. Виртуальный скролл',
    description:
      'Для включения виртуального скролла, необходимо передать в параметр virtualScroll объект, содержаний размер 1 элемента меню, для расчета максимальной высоты контейнера меню. Или установить значение "auto". В этом случае максимальная высота будет рассчитана исходя из свойства "dimension".',
  },
});
