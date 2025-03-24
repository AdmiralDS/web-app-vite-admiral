import { createFileRoute } from '@tanstack/react-router';
import { SelectSearchWithClearInputAfterSelect } from '#examples/select/searchWithClearInputAfterSelect';

export const Route = createFileRoute('/components/select/searchWithClearInputAfterSelect')({
  component: () => <SelectSearchWithClearInputAfterSelect />,
  staticData: {
    title: 'mode="multiple" с опцией очистки введенного значения после выбора опции',
    description:
      'После выбора элемента значение, введенное для фильтрации очищается. Это поведение по умолчанию. Для того, чтобы изменить это поведение необходимо использовать свойтсво clearInputValueAfterSelect',
  },
});
