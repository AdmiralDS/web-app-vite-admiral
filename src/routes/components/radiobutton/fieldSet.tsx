import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

import { FieldSet, RadioButton } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

export const FieldSetRadioButton = () => {
  const [selected, setSelected] = useState(values[1]);
  return (
    <Wrapper>
      <FieldSet
        onChange={(e) => {
          setSelected((e.target as HTMLInputElement).value);
        }}
        legend="Управляемая группа радиокнопок"
      >
        <RadioButton value={values[0]} name="test1" checked={values[0] === selected} onChange={() => {}}>
          First option
        </RadioButton>
        <RadioButton value={values[1]} name="test1" checked={values[1] === selected} onChange={() => {}}>
          Second option
        </RadioButton>
        <RadioButton value={values[2]} name="test1" checked={values[2] === selected} onChange={() => {}}>
          Third option
        </RadioButton>
      </FieldSet>
      <FieldSet legend="Неуправляемая группа радиокнопок" required>
        <RadioButton value={values[3]} name="test2">
          First option
        </RadioButton>
        <RadioButton value={values[4]} name="test2">
          Second option
        </RadioButton>
        <RadioButton value={values[5]} name="test2" extraText="some extra text">
          Third option
        </RadioButton>
      </FieldSet>
      <FieldSet legend="Disabled группа радиокнопок" disabled>
        <RadioButton value={values[6]} name="test3">
          First option
        </RadioButton>
        <RadioButton value={values[7]} name="test3">
          Second option
        </RadioButton>
        <RadioButton value={values[8]} name="test3">
          Third option
        </RadioButton>
      </FieldSet>
      <FieldSet legend="Группа радиокнопок с одной задизейбленной кнопкой">
        <RadioButton value={values[9]} name="test4">
          First option
        </RadioButton>
        <RadioButton value={values[10]} disabled name="test4">
          Second option
        </RadioButton>
        <RadioButton value={values[11]} name="test4">
          Third option
        </RadioButton>
      </FieldSet>
      <FieldSet legend="Группа радиокнопок маленького размера" dimension="s">
        <RadioButton value={values[12]} name="test5">
          First option
        </RadioButton>
        <RadioButton value={values[13]} name="test5">
          Second option
        </RadioButton>
        <RadioButton value={values[14]} name="test5">
          Third option
        </RadioButton>
      </FieldSet>
      <FieldSet legend="Горизонтальная группа радиокнопок" flexDirection="row">
        <RadioButton value={values[12]} name="test6">
          First option
        </RadioButton>
        <RadioButton value={values[13]} name="test6">
          Second option
        </RadioButton>
        <RadioButton value={values[14]} name="test6">
          Third option
        </RadioButton>
      </FieldSet>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/radiobutton/fieldSet')({
  component: () => <FieldSetRadioButton />,
  staticData: {
    title: 'RadioButton. Группа',
    description: '',
  },
});