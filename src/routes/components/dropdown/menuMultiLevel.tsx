import { createFileRoute } from '@tanstack/react-router';
import { MenuMultiLevel } from '#examples/dropdown/menuMultiLevel';

export const Route = createFileRoute('/components/dropdown/menuMultiLevel')({
  component: () => <MenuMultiLevel />,
  staticData: {
    title: 'Menu. Многоуровневое меню',
    description:
      'Многоуровневая структура меню задается в модели данных, через указание дочерних элементов в свойстве subItems. Ограничения по количеству уровней вложенности нет, но не следует забывать о комфорте пользователей.',
  },
});
