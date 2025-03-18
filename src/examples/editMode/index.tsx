import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { EditMode, EditModeField } from '@admiral-ds/react-ui';
import { ExampleSection, PStyled } from '#examples/-helpers';

const Description = () => {
  return (
    <>
      <PStyled>
        Компонент можно разделить на 4 вида: EditMode, EditModeArea, а также компоненты, у которых присутствует лэйбл и
        дополнительный текст - EditModeField и EditModeAreaField
      </PStyled>
      <PStyled>
        Присутствует в 4 размерах: S, M (имеют написание Regular и Bold) и XL, XXL (только Bold). Переключение между
        Regular и Bold не изменяют размеры компонента. В режиме редактирования может применяться с поясняющим текстом
        или без него.
      </PStyled>
      <PStyled>
        Размер компонента в состоянии Default зависит от объема текста. Размер в состоянии редактирования задается
        вручную, в зависимости от предполагаемого количества текста.
      </PStyled>
      <PStyled>На мобильных устройствах компонент занимает всю ширину экрана в режиме редактирования.</PStyled>
    </>
  );
};

const EditModeBasic = () => {
  const value = 'Привет!';
  const placeholder = 'Placeholder';
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <>
      <EditMode value={localValue} onChange={handleChange} placeholder={placeholder} />
    </>
  );
};

const EditModeFieldExample = () => {
  const value = 'Привет!';
  const placeholder = 'Placeholder';
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <EditModeField
      value={localValue}
      onChange={handleChange}
      placeholder={placeholder}
      label="Лейбл"
      extraText="Дополнительный текст"
    />
  );
};

export const Example = () => {
  return (
    <>
      <ExampleSection text={<Description />}>
        <EditModeBasic />
      </ExampleSection>
      <ExampleSection>
        <EditModeFieldExample />
      </ExampleSection>
    </>
  );
};
