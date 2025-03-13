import styled from 'styled-components';

import { CheckboxField } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 16px;
  }
`;

export const CheckboxBasic = () => {
  return (
    <ExampleSection>
      <Container>
        <CheckboxField dimension="m" data-container-id="checkboxFieldIdOne">
          Text 1
        </CheckboxField>
        <CheckboxField dimension="m" data-container-id="checkboxFieldIdTwo">
          Text 2
        </CheckboxField>
        <CheckboxField dimension="m" data-container-id="checkboxFieldIdThree">
          Text 3
        </CheckboxField>
      </Container>
    </ExampleSection>
  );
};
