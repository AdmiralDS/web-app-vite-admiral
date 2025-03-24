import { ExampleSection, PStyled } from '#examples/-helpers';
import { PhoneInputField } from '@admiral-ds/react-ui';
import { ChangeEvent, useState } from 'react';

export const Field = () => {
  const [localValue, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Компоненту можно прокидывать дата аттрибуты вида [data-container-...]. Этот аттрибут попадет только на
              контейнер самого компонента.
            </PStyled>
            <PStyled>
              Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут
              data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.
            </PStyled>
          </>
        }
      >
        <PhoneInputField
          data-container-id="phoneInputFieldIdOne"
          value={localValue}
          defaultCountry="RUS"
          onChange={handleChange}
          dropContainerClassName="dropContainerClass"
          label="label"
          extraText="extraText"
        />
      </ExampleSection>
    </>
  );
};
