import { useState } from 'react';
import styled from 'styled-components';

import { Accordion, AccordionItem, FieldSet, Option, RadioButton, SelectField as Select } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const SelectField = styled(Select)`
  margin-top: 24px;
`;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

export const AccordionBasic = () => {
  const values = ['1', '2', '3'];
  const [selected, setSelected] = useState<number | string | null>('');
  const [selectValue, setSelectValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };
  return (
    <ExampleSection
      text="Компонент настроен на автоподстройку высоты, при вводе текста под заголовком. Ширину можно менять вручную, так
        же происходит автоподстройка контента. Если открыта одна закладка, то открытие другой не приводит к ее закрытию.
        При открытии вкладки весь контент страницы под аккордионом сдвигается вниз на высоту текста открытой вкладки."
    >
      <Accordion>
        <AccordionItem
          id="accordion1-item1"
          title="Первый пункт"
          // eslint-disable-next-line no-console
          onClick={(title, expanded, event) => console.log({ title, expanded, event })}
        >
          Контент первого пункта
        </AccordionItem>
        <AccordionItem
          id="accordion1-item2"
          title="Второй пункт"
          // eslint-disable-next-line no-console
          onClick={(title, expanded, event) => console.log({ title, expanded, event })}
        >
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
          <FieldSet
            style={{ marginTop: 8 }}
            onChange={(e) => {
              setSelected((e.target as HTMLInputElement).value);
            }}
            legend="Управляемая группа радиокнопок:"
            dimension="m"
          >
            <RadioButton value={values[0]} name="test1" defaultChecked={values[0] === selected}>
              First option
            </RadioButton>
            <RadioButton value={values[1]} name="test1" defaultChecked={values[1] === selected}>
              Second option
            </RadioButton>
            <RadioButton value={values[2]} name="test1" defaultChecked={values[2] === selected}>
              Third option
            </RadioButton>
          </FieldSet>
          <SelectField
            mode="searchSelect"
            label="label"
            className="Search"
            value={selectValue}
            onChange={onChange}
            placeholder="Placeholder"
          >
            {OPTIONS_SIMPLE.map((option, ind) => (
              <Option key={option} value={option} disabled={ind === 4}>
                {option}
              </Option>
            ))}
          </SelectField>
        </AccordionItem>
        <AccordionItem
          id="accordion1-item3"
          defaultExpanded
          title="Третий пункт"
          // eslint-disable-next-line no-console
          onClick={(title, expanded, event) => console.log({ title, expanded, event })}
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
