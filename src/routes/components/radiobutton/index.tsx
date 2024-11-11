import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button, RadioButton } from '@admiral-ds/react-ui';
import type { RadioButtonProps } from '@admiral-ds/react-ui';

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

export const RadioButtonBasic = ({ checked: argChecked, ...props }: RadioButtonProps) => {
  const [checked, setChecked] = useState(argChecked || false);

  useEffect(() => {
    setChecked(!!argChecked);
  }, [argChecked]);

  return (
    <Wrapper>
      <RadioButton value={1} checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} {...props}>
        Some text
      </RadioButton>
      <Button onClick={() => setChecked(false)}>Сбросить состояние радиокнопки</Button>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/radiobutton/')({
  component: () => <RadioButtonBasic />,
  staticData: {
    title: 'RadioButton. Базовый пример',
    description: '',
  },
});
