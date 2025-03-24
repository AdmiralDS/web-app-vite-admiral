import { createFileRoute } from '@tanstack/react-router';
import { CheckboxCompositeGroupExample } from '#examples/checkbox/compositeGroup';

export const Route = createFileRoute('/components/checkbox/compositeGroup')({
  component: () => <CheckboxCompositeGroupExample />,
  staticData: {
    title: 'Составная группа чекбоксов',
    description: 'Используется в случае необходимости вывода сложносоставной группы чекбоксов с выпадающим списком.',
  },
});
