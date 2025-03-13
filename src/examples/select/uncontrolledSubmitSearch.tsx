import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import React from 'react';

import styled from 'styled-components';

type BorderRadiusType =
  | 'Border radius 0'
  | 'Border radius 2'
  | 'Border radius 4'
  | 'Border radius 6'
  | 'Border radius 8'
  | 'Border radius 10';
type Shape = {
  borderRadiusKind: BorderRadiusType;
};

function mediumGroupBorderRadius(shape: Shape): string {
  switch (shape.borderRadiusKind) {
    case 'Border radius 0':
      return '0';
    case 'Border radius 2':
      return '2px';
    case 'Border radius 4':
      return '4px';
    case 'Border radius 6':
      return '6px';
    case 'Border radius 8':
      return '8px';
    case 'Border radius 10':
      return '10px';
    default:
      return '4px';
  }
}

const FormValuesWrapper = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid black;
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  min-height: 100px;
  padding: 12px;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;
const Form = styled.form`
  > * {
    margin-bottom: 12px;
  }
`;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'Гигантский текст, который настолько большой, что, когда он проходил мимо телевизора, ты пропустил 2 серии любимого сериала',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
  'text 7',
  'Ответ на «Главный вопрос жизни, вселенной и всего такого»',
  'text 69',
];

export const Template = (props: SelectProps) => {
  const [submitValues, setSubmitValues] = React.useState<null | Record<string, any>>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElem = e.target as HTMLFormElement;

    if (formElem) {
      setSubmitValues(formDataToObject(new FormData(formElem)));
    }
  };

  const formDataToObject = (data: FormData) => {
    const obj = {} as Record<string, FormDataEntryValue>;
    data.forEach((value, key) => (obj[key] = value));
    return obj;
  };

  return (
    <ExampleSection>
      <Form action="" onSubmit={onSubmit}>
        <Select {...props} name="myOwesomeField" mode="searchSelect" defaultValue={OPTIONS_SIMPLE[0]}>
          {OPTIONS_SIMPLE.map((option, ind) => (
            <Option key={option} value={option} disabled={ind === 4}>
              {option}
            </Option>
          ))}
        </Select>
        <Button type="submit" dimension="m">
          Submit
        </Button>
        <FormValuesWrapper>
          {submitValues === null
            ? 'Здесь будут выводится значения, которые ты засабмитишь...'
            : JSON.stringify(submitValues)}
        </FormValuesWrapper>
      </Form>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/select/uncontrolledSubmitSearch')({
  component: () => <Template />,
  staticData: {
    title: 'mode = "searchSelect". Неконтролируемый сабмит',
  },
});
