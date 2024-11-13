import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import { Button, RadioButton } from '@admiral-ds/react-ui';
import type { RadioButtonProps } from '@admiral-ds/react-ui';
import { ExampleWrapper } from '../../-helpers/examples';

export const RadioButtonBasic = ({ checked: argChecked, ...props }: RadioButtonProps) => {
  const [checked, setChecked] = useState(argChecked || false);

  useEffect(() => {
    setChecked(!!argChecked);
  }, [argChecked]);

  return (
    <ExampleWrapper>
      <RadioButton value={1} checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} {...props}>
        Some text
      </RadioButton>
      <Button onClick={() => setChecked(false)}>Сбросить состояние радиокнопки</Button>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/radiobutton/')({
  component: () => <RadioButtonBasic />,
  staticData: {
    title: 'RadioButton. Базовый пример',
    description: '',
  },
});
