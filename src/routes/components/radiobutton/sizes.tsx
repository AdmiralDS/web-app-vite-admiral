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

export const RadioButtonSize = () => {
  return (
    <Wrapper>
      <RadioButton value={1}>Dimension - m</RadioButton>
      <RadioButton value={1} dimension="s">
        Dimension - s
      </RadioButton>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/radiobutton/sizes')({
  component: () => <RadioButtonSize />,
  staticData: {
    title: 'RadioButton. Размеры',
    description: '',
  },
});
