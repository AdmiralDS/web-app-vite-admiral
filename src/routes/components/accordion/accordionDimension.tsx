import { createFileRoute } from '@tanstack/react-router';

import { Accordion, AccordionItem, NotificationItem, NotificationItemContent } from '@admiral-ds/react-ui';
import { ExampleWrapper } from '../../-helpers/examples';

export const AccordionDimension = () => {
  return (
    <ExampleWrapper>
      <NotificationItem displayStatusIcon>
        <NotificationItemContent>Размер L.</NotificationItemContent>
      </NotificationItem>
      <Accordion>
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
      <NotificationItem displayStatusIcon>
        <NotificationItemContent>Размер M.</NotificationItemContent>
      </NotificationItem>
      <Accordion dimension="m">
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт" contentMaxHeight="150px">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей. Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые
          сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям.
          Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с
          теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет
          нового поколения консолей.
        </AccordionItem>
      </Accordion>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/accordion/accordionDimension')({
  component: () => <AccordionDimension />,
  staticData: {
    title: 'Accordion. Размеры',
    description: 'Небольшое описание функционала',
  },
});
