import { createFileRoute } from '@tanstack/react-router';
import { AccordionDimension } from '#examples/accordion/accordionDimension';

export const Route = createFileRoute('/components/accordion/accordionDimension')({
  component: () => <AccordionDimension />,
  staticData: {
    title: 'Accordion. Размеры',
    description: 'Два размера: 56 и 40 px.',
  },
});
