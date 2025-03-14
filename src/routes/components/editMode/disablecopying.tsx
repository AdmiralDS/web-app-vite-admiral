import { createFileRoute } from '@tanstack/react-router';
import { EditModeDisableCopying } from '#examples/editMode/disablecopying';

export const Route = createFileRoute('/components/editMode/disablecopying')({
  component: () => <EditModeDisableCopying />,
  staticData: {
    title: 'Edit mode. Невозможность копирования',
    description: 'Наличие этого атрибута отключает возможность выделения и копирования значения поля',
  },
});
