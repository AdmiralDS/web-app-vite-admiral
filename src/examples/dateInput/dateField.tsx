import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import { DateField } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const DateFieldStyled = styled(DateField)`
  max-width: 300px;
`;
export const DateInputField = () => {
  const [localValue, setValue] = useState('');
  const [localValue2, setValue2] = useState('');

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Компонент DateInput в составе форм может использоваться с компонентом Field, что позволяет использовать
              такие возможности, как label, extraText и др.
            </PStyled>
            <PStyled>
              Компоненту можно прокидывать дата аттрибуты вида [data-container-...]. Этот аттрибут попадет только на
              контейнер самого компонента.
            </PStyled>
            <PStyled>
              Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут
              data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.
            </PStyled>
            <PStyled>
              DateField имеет такие же состояния, размеры, статусы, кастомизацию и статусы, за исключением тех, которые
              описаны во вкладке DateField. Состояния.
            </PStyled>
          </>
        }
      >
        <DateFieldStyled
          data-container-id="dateFieldIdOne"
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          id={'date 1'}
          placeholder="placeholder"
          dropContainerClassName="dropContainerClass"
          label="label"
          extraText="extraText"
        />
      </ExampleSection>
      <ExampleSection text="Date-Range">
        <DateFieldStyled
          type="date-range"
          data-container-id="dateFieldIdTwo"
          value={localValue2}
          onChange={(e) => setValue2(e.currentTarget.value)}
          id={'date 1'}
          dropContainerClassName="dropContainerClass"
          label="label"
          extraText="extraText"
        />
      </ExampleSection>
    </>
  );
};
