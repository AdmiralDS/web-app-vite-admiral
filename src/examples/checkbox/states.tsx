import { useState } from 'react';
import styled from 'styled-components';

import { CheckboxField } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const CheckboxStates = () => {
  const [checkedM, setCheckedM] = useState<boolean>(false);
  const [checkedS, setCheckedS] = useState<boolean>(false);

  return (
    <>
      <ExampleSection text="Управляемый чекбокс">
        <Container>
          <CheckboxField
            checked={checkedM}
            onChange={(e) => {
              setCheckedM(e.target.checked);
            }}
            data-container-id="checkboxFieldIdOneM"
            id="checkboxFieldId"
            name="checkboxFieldName"
          >
            Text
          </CheckboxField>
          <CheckboxField
            dimension="s"
            checked={checkedS}
            onChange={(e) => {
              setCheckedS(e.target.checked);
            }}
            data-container-id="checkboxFieldIdOneS"
            id="checkboxFieldId"
            name="checkboxFieldName"
          >
            Text
          </CheckboxField>
        </Container>
      </ExampleSection>
      <ExampleSection text="Неуправляемый чекбокс">
        <Container>
          <CheckboxField data-container-id="checkboxFieldIdTwoM">Text</CheckboxField>
          <CheckboxField dimension="s" data-container-id="checkboxFieldIdTwoS">
            Text
          </CheckboxField>
        </Container>
      </ExampleSection>
      <ExampleSection text="В две строки">
        <Container>
          <CheckboxField data-container-id="checkboxFieldIdThreeM">
            Двойная
            <br />
            строка
          </CheckboxField>
          <CheckboxField dimension="s" data-container-id="checkboxFieldIdThreeS">
            Двойная
            <br />
            строка
          </CheckboxField>
        </Container>
      </ExampleSection>
      <ExampleSection text="Disabled">
        <Container>
          <CheckboxField disabled data-container-id="checkboxFieldIdFourM">
            Text
          </CheckboxField>
          <CheckboxField dimension="s" disabled data-container-id="checkboxFieldIdFourS">
            Text
          </CheckboxField>
        </Container>
      </ExampleSection>
      <ExampleSection text="Disabled active">
        <Container>
          <CheckboxField disabled defaultChecked data-container-id="checkboxFieldIdFiveM">
            Text
          </CheckboxField>
          <CheckboxField dimension="s" disabled defaultChecked data-container-id="checkboxFieldIdFiveS">
            Text
          </CheckboxField>
        </Container>
      </ExampleSection>
      <ExampleSection text="Readonly">
        <Container>
          <CheckboxField readOnly data-container-id="checkboxFieldIdSixM">
            Text
          </CheckboxField>
          <CheckboxField dimension="s" readOnly data-container-id="checkboxFieldIdSixS">
            Text
          </CheckboxField>
        </Container>
      </ExampleSection>
      <ExampleSection text="Readonly active">
        <Container>
          <CheckboxField defaultChecked readOnly data-container-id="checkboxFieldIdSevenM">
            Text
          </CheckboxField>
          <CheckboxField defaultChecked dimension="s" readOnly data-container-id="checkboxFieldIdSevenS">
            Text
          </CheckboxField>
        </Container>
      </ExampleSection>
      <ExampleSection text="Error">
        <Container>
          <CheckboxField error data-container-id="checkboxFieldIdEightM">
            Text
          </CheckboxField>
          <CheckboxField dimension="s" error data-container-id="checkboxFieldIdEightS">
            Text
          </CheckboxField>
        </Container>
      </ExampleSection>
      <ExampleSection text="Indeterminate">
        <Container>
          <CheckboxField indeterminate data-container-id="checkboxFieldIdNineM">
            Text
          </CheckboxField>
          <CheckboxField dimension="s" indeterminate data-container-id="checkboxFieldIdNineS">
            Text
          </CheckboxField>
        </Container>
      </ExampleSection>
    </>
  );
};
