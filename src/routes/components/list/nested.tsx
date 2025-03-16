import { createFileRoute } from '@tanstack/react-router';
import { ListNested } from '#examples/list/nested';

export const Route = createFileRoute('/components/list/nested')({
  component: () => <ListNested />,
  staticData: {
    title: 'List. Вложенные списки',
    description:
      'Списки могут быть вложенными, а разновидности могут смешиваться внутри вложенных группировок. Отступ слева равен расстоянию от текста до левого края компонента вышестоящего уровня. То есть выравнивание идет по краю текста вышестоящего уровня.',
  },
});
