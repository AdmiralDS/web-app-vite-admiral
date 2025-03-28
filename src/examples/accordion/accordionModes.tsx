import { useState } from 'react';
import { Accordion, AccordionItem } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const AccordionModes = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <ExampleSection>
      <Accordion>
        <AccordionItem
          defaultExpanded
          title="Неконтролируемый режим использования (uncontrolled)"
          // eslint-disable-next-line no-console
          onClick={(title, expanded, event) => console.log({ title, expanded, event })}
        >
          Контент первого пункта
        </AccordionItem>
        <AccordionItem
          expanded={expanded}
          title="Контролируемый режим использования (controlled)"
          onClick={(_title, expanded) => setExpanded(expanded)}
        >
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
    </ExampleSection>
  );
};
