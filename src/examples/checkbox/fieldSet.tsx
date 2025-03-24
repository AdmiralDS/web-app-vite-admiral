import { CheckboxField, FieldSet } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const FieldSetCheckbox = () => {
  return (
    <>
      <ExampleSection text="Группа чекбоксов">
        <FieldSet data-container-id="fieldSetIdOne" legend={'Выберите города:'}>
          <CheckboxField name="check1">Москва</CheckboxField>
          <CheckboxField name="check2">Воронеж</CheckboxField>
          <CheckboxField name="check3">Самара</CheckboxField>
        </FieldSet>
      </ExampleSection>
      <ExampleSection text="Disabled группа чекбоксов">
        <FieldSet data-container-id="fieldSetIdTwo" disabled legend={'Выберите города:'}>
          <CheckboxField name="check1">Москва</CheckboxField>
          <CheckboxField name="check2" defaultChecked>
            Воронеж
          </CheckboxField>
          <CheckboxField name="check3">Самара</CheckboxField>
        </FieldSet>
      </ExampleSection>
      <ExampleSection text="Группа маленьких чекбоксов">
        <FieldSet data-container-id="fieldSetIdThree" dimension="s" legend={'Выберите города:'} required>
          <CheckboxField name="check1">Москва</CheckboxField>
          <CheckboxField name="check2">Воронеж</CheckboxField>
          <CheckboxField name="check3">Самара</CheckboxField>
        </FieldSet>
      </ExampleSection>
      <ExampleSection text="Горизонтальная группа чекбоксов">
        <FieldSet data-container-id="fieldSetIdFour" legend={'Выберите города:'} flexDirection="row">
          <CheckboxField name="check1">Москва</CheckboxField>
          <CheckboxField name="check2">Воронеж</CheckboxField>
          <CheckboxField name="check3">Самара</CheckboxField>
        </FieldSet>
      </ExampleSection>
    </>
  );
};
