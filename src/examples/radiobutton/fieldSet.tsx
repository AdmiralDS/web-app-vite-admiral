import { useState } from 'react';

import { FieldSet, RadioButton } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

export const FieldSetRadioButton = () => {
  const [selected, setSelected] = useState(values[1]);
  return (
    <>
      <ExampleSection text="Управляемая группа радиокнопок">
        <FieldSet
          onChange={(e) => {
            setSelected((e.target as HTMLInputElement).value);
          }}
          legend="Выберите город:"
        >
          <RadioButton value={values[0]} name="test1" checked={values[0] === selected} onChange={() => {}}>
            Москва
          </RadioButton>
          <RadioButton value={values[1]} name="test1" checked={values[1] === selected} onChange={() => {}}>
            Воронеж
          </RadioButton>
          <RadioButton value={values[2]} name="test1" checked={values[2] === selected} onChange={() => {}}>
            Самара
          </RadioButton>
        </FieldSet>
      </ExampleSection>
      <ExampleSection text="Неуправляемая группа радиокнопок">
        <FieldSet legend="Выберите город:" required>
          <RadioButton value={values[3]} name="test2">
            Москва
          </RadioButton>
          <RadioButton value={values[4]} name="test2">
            Воронеж
          </RadioButton>
          <RadioButton value={values[5]} name="test2">
            Самара
          </RadioButton>
        </FieldSet>
      </ExampleSection>
      <ExampleSection text="Disabled группа радиокнопок">
        <FieldSet legend="Выберите город:" disabled>
          <RadioButton value={values[6]} name="test3">
            Москва
          </RadioButton>
          <RadioButton value={values[7]} name="test3">
            Воронеж
          </RadioButton>
          <RadioButton value={values[8]} name="test3">
            Самара
          </RadioButton>
        </FieldSet>
      </ExampleSection>
      <ExampleSection text="Группа радиокнопок с одной задизейбленной кнопкой">
        <FieldSet legend="Выберите город:">
          <RadioButton value={values[9]} name="test4">
            Москва
          </RadioButton>
          <RadioButton value={values[10]} disabled name="test4">
            Воронеж
          </RadioButton>
          <RadioButton value={values[11]} name="test4">
            Самара
          </RadioButton>
        </FieldSet>
      </ExampleSection>
      <ExampleSection text="Группа радиокнопок маленького размера">
        <FieldSet legend="Выберите город:" dimension="s">
          <RadioButton value={values[12]} name="test5">
            Москва
          </RadioButton>
          <RadioButton value={values[13]} name="test5">
            Воронеж
          </RadioButton>
          <RadioButton value={values[14]} name="test5">
            Самара
          </RadioButton>
        </FieldSet>
      </ExampleSection>
      <ExampleSection text="Горизонтальная группа радиокнопок">
        <FieldSet legend="Выберите город:" flexDirection="row">
          <RadioButton value={values[12]} name="test6">
            Москва
          </RadioButton>
          <RadioButton value={values[13]} name="test6">
            Воронеж
          </RadioButton>
          <RadioButton value={values[14]} name="test6">
            Самара
          </RadioButton>
        </FieldSet>
      </ExampleSection>
    </>
  );
};
