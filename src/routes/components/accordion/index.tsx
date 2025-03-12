import { createFileRoute } from '@tanstack/react-router';
import { AccordionBasic } from '../../../examples/accordion';

export const Route = createFileRoute('/components/accordion/')({
  component: () => <AccordionBasic />,
  staticData: {
    title: 'Accordion. Базовый пример',
    description: 'Вертикальный список заголовков, которые при нажатии показывают контент, находящийся под ними.',
  },
});
