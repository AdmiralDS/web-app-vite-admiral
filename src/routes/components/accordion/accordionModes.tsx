import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { Accordion, AccordionItem } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

export const AccordionModes = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Wrapper>
      <Accordion>
        <AccordionItem
          defaultExpanded
          title="Неконтролируемый режим использования (uncontrolled)"
          onClick={(title, expanded, event) => console.log({ title, expanded, event })}
        >
          Контент первого пункта
        </AccordionItem>
        <AccordionItem
          expanded={expanded}
          title="Контролируемый режим использования (controlled)"
          onClick={(title, expanded) => setExpanded(expanded)}
        >
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/accordion/accordionModes')({
  component: () => <AccordionModes />,
  staticData: {
    title: 'Accordion. Режимы использования',
    description: 'Небольшое описание функционала',
  },
});
