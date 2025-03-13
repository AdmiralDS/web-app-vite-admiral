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
            Если даты диапазона находятся в разных месяцах (годах), то отображается тот месяц (год) к которому относится
            редактируемая дата.
          </PStyled>
          <PStyled>
            Если при редактировании ввести не релевантное значение, например неполную дату, и перейти к редактированию
            второй даты, то значение в календаре не поменяется. А при закрытии календаря вернется ранее введеное
            релевантное значение.
          </PStyled>
          <PStyled>
            Если при изменении первой даты кликнуть на дату, которая «старше» второй даты диапазона, то даты в поле
            ввода меняются местами, так, что «младшая» из выбранных дат всегда стоит первой.
          </PStyled>
          <PStyled>
            Аналогично, при изменении второй даты, клик на дату, которая «младше» первого значения в диапазоне, приводит
            к смене мест дат
          </PStyled>
          <PStyled>
            Клик на первое число в диапазоне. В этом случае первый выбор в календаре переопределит первое число в
            диапазоне, а второй клик - второе. После чего календарь закроется.
          </PStyled>
          <PStyled>
            Клик на второе число в диапазоне. Первый выбор в календаре переопределит второе число в диапазоне, второй
            клик – первое. Если нужно изменить только одно число, то клавиши «Enter», «Esc» или клик вне поля закроют
            календарь.
          </PStyled>
        </>
      }
    >
      <DateInput
        type="date-range"
        value={localValue}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Some placeholder"
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dateInput/range')({
  component: () => <Template />,
  staticData: {
    title: 'DateInput. Type "date-range"',
  },
});
