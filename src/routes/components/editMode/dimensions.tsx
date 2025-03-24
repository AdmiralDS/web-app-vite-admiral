import { createFileRoute } from '@tanstack/react-router';
import { EditModeDimensions } from '#examples/editMode/dimensions';

export const Route = createFileRoute('/components/editMode/dimensions')({
  component: () => <EditModeDimensions />,
  staticData: {
    title: 'Edit mode. Размеры',
    description:
      'Присутствует в 4 размерах: S, M (имеют написание Regular и Bold) и XL, XXL (только Bold). Переключение между Regular и Bold не изменяют размеры компонента. В режиме редактирования может применяться с поясняющим текстом или без него.',
  },
});
