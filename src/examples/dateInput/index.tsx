import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import { DateInput } from '@admiral-ds/react-ui';
import { useState } from 'react';

export const Template = () => {
  const [localValue, setValue] = useState('');

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Поле для ввода даты или диапозона дат. Предлагает ввод даты вручную маской или через выбор даты календарем.
          </PStyled>
          <PStyled>
            Следует помнить, что Placeholder поля ввода даты и маска поля — это разные сущности. Placeholder может быть
            любым, в том числе совпадать с маской поля, а маска имеет вид «дд.мм.гггг»
          </PStyled>
        </>
      }
    >
      <DateInput
        value={localValue}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Some placeholder"
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dateInput/')({
  component: () => <Template />,
  staticData: {
    title: 'DateInput. Базовый пример',
  },
});
