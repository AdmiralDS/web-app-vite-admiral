import { createFileRoute } from '@tanstack/react-router';
import { AccordionModes } from '#examples/accordion/accordionModes';

export const Route = createFileRoute('/components/accordion/accordionModes')({
  component: () => <AccordionModes />,
  staticData: {
    title: 'Accordion. Режимы использования',
    description: '',
  },
});
