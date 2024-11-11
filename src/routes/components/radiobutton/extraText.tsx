import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { RadioButton } from '@admiral-ds/react-ui';

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

export const RadioButtonExtraText = () => {
  return (
    <Wrapper>
      <RadioButton value={1} extraText="Additional text">
        Text
      </RadioButton>
      <RadioButton value={1} dimension="s" extraText="Additional text">
        Text
      </RadioButton>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/radiobutton/extraText')({
  component: () => <RadioButtonExtraText />,
  staticData: {
    title: 'RadioButton. Дополнительный текст',
    description: '',
  },
});
