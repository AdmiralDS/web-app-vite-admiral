import { createFileRoute } from '@tanstack/react-router';
import { AccordionIcon } from '#examples/accordion/accordionIcon';

export const Route = createFileRoute('/components/accordion/accordionIcon')({
  component: () => <AccordionIcon />,
  staticData: {
    title: 'Accordion. Расположение шеврона слева',
    description:
      'Альтернативным вариантом является расположение шеврона слева от заголовка. Текст заголовка и иконка шеврона просто меняются местами с сохранением всех расстояний и размеров. При этом компоновка остальных элементов компонента никак не меняются.',
  },
});
