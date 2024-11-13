import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { CheckboxField, FieldSet } from '@admiral-ds/react-ui';
import { ExampleWrapper } from '../../-helpers/examples';

const Container = styled.div`
  > * {
    margin-top: 24px;
  }
`;

export const FieldSetCheckbox = () => {
  return (
    <ExampleWrapper>
      <Container>
        <FieldSet data-container-id="fieldSetIdOne" legend={'Группа чекбоксов:'}>
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdTwo" disabled legend={'Disabled группа чекбоксов:'}>
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2" defaultChecked>
            Text 2
          </CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdThree" dimension="s" legend={'Группа маленьких чекбоксов:'} required>
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdFour" legend={'Горизонтальная группа чекбоксов:'} flexDirection="row">
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
      </Container>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/checkbox/fieldSet')({
  component: () => <FieldSetCheckbox />,
  staticData: {
    title: 'Группа чекбоксов',
    description: '',
  },
});
