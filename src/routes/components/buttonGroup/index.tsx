import { createFileRoute } from '@tanstack/react-router';
import { ButtonGroupBasic } from '#examples/buttonGroup';

export const Route = createFileRoute('/components/buttonGroup/')({
  component: () => <ButtonGroupBasic />,
  staticData: {
    title: 'ButtonGroup. Базовый пример.',
    description: 'Состоит из компонентов Button, связаных друг с другом. Используется для организации схожих функций.',
  },
});
