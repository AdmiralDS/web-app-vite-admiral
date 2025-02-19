import { createFileRoute } from '@tanstack/react-router';

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import { ExampleSection, PStyled } from '../../-helpers/examples';

const Description = () => {
  return (
    <>
      <PStyled>
        Совмещенное поле ввода для выбора даты и времени. Компонент можно изменять по ширине, минимальный размер –
        288px. Поле секции с вводом времени имеет фиксированный горизонтальный размер, изменяется ширина поля выбора
        даты.
      </PStyled>
      <PStyled>
        Компонент не поддерживает ввод диапазона дат в одном поле. Для ввода диапазона следует использовать две формы
        ввода рядом.
      </PStyled>
      <PStyled>
        Компоненту можно прокидывать дата аттрибуты вида [data-container-...]. Этот аттрибут попадет только на контейнер
        самого компонента. Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут
        data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.
      </PStyled>
    </>
  );
};

const CompoundComponent = () => {
  return (
    <Field label={'Подпись'}>
      <DateTimeContainer>
        <DateTimeDateInput />
        <DateTimeSeparator />
        <DateTimeTimeInput />
      </DateTimeContainer>
    </Field>
  );
};

export const DateTimeFieldBasic = () => {
  return (
    <ExampleSection text={<Description />}>
      <CompoundComponent />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dateTimeField/')({
  component: () => <DateTimeFieldBasic />,
  staticData: {
    title: 'DateTime Field. Базовый пример',
    description:
      'Совмещенное поле ввода для выбора даты и времени, состоит из нескольких компонентов, ипортируемых отдельно',
  },
});
