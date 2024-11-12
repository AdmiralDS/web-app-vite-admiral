import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { RadioButton } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

export const RadioButtonState = () => {
  return (
    <Wrapper>
      <RadioButton value={1} checked onChange={() => undefined}>
        Checked
      </RadioButton>
      <RadioButton value={1} checked={false} onChange={() => undefined}>
        Not checked
      </RadioButton>
      <RadioButton value={1} checked readOnly>
        Checked readonly
      </RadioButton>
      <RadioButton value={1} checked={false} readOnly>
        Not checked readonly
      </RadioButton>
      <RadioButton value={1} checked disabled onChange={() => undefined}>
        Checked disabled
      </RadioButton>
      <RadioButton value={1} checked={false} disabled onChange={() => undefined}>
        Not checked disabled
      </RadioButton>
      <RadioButton value={1} checked={false} error onChange={() => undefined}>
        Not checked error
      </RadioButton>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/radiobutton/states')({
  component: () => <RadioButtonState />,
  staticData: {
    title: 'RadioButton. Состояния',
    description: '',
  },
});