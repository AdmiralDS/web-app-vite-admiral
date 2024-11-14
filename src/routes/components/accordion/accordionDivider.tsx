import { createFileRoute } from '@tanstack/react-router';
import { Accordion, AccordionItem } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

export const AccordionDivider = () => {
  return (
    <>
      <ExampleSection>
        <Accordion hideTopDivider hideBottomDivider>
          <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
          <AccordionItem title="Второй пункт">
            Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под
            ними.
          </AccordionItem>
          <AccordionItem title="Третий пункт">
            Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
            находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
            огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми
            игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет
            нового поколения консолей.
          </AccordionItem>
        </Accordion>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/accordion/accordionDivider')({
  component: () => <AccordionDivider />,
  staticData: {
    title: 'Accordion. Скрытие разделителей',
    description:
      'В зависимости от контекста можно включать-выключать разделители блоков компонента (верхнюю и нижнюю полоски). Например при использовании на подложке. Высота компонента при этом не меняется.',
  },
});
