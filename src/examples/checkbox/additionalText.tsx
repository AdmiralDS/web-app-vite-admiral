import styled from 'styled-components';

import { CheckboxField } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const CheckboxAdditionalText = () => {
  return (
    <>
      <ExampleSection text="Дополнительный текст">
        <Container>
          <CheckboxField extraText="Additional text" data-container-id="checkboxFieldIdOneM">
            Text
          </CheckboxField>
          <CheckboxField dimension="s" extraText="Additional text" data-container-id="checkboxFieldIdOneS">
            Text
          </CheckboxField>
        </Container>
      </ExampleSection>
      <ExampleSection text="Дополнительно декорированный текст">
        <Container>
          <CheckboxField
            extraText={
              <span>
                Additional text <i>with </i>
                <br />
                <i>custom </i>
                <b>decoration</b>
              </span>
            }
            data-container-id="checkboxFieldIdSecondM"
          >
            Text
          </CheckboxField>
          <CheckboxField
            dimension="s"
            extraText={
              <span>
                Additional text <i>with </i>
                <br />
                <i>custom </i>
                <b>decoration</b>
              </span>
            }
            data-container-id="checkboxFieldIdSecondS"
          >
            Text
          </CheckboxField>
        </Container>
      </ExampleSection>
    </>
  );
};
