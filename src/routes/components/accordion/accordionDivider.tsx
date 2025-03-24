import { createFileRoute } from '@tanstack/react-router';
import { AccordionDivider } from '#examples/accordion/accordionDivider';

export const Route = createFileRoute('/components/accordion/accordionDivider')({
  component: () => <AccordionDivider />,
  staticData: {
    title: 'Accordion. Скрытие разделителей',
    description:
      'В зависимости от контекста можно включать-выключать разделители блоков компонента (верхнюю и нижнюю полоски). Например при использовании на подложке. Высота компонента при этом не меняется.',
  },
});
