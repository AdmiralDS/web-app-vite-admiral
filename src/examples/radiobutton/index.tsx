import { useEffect, useState } from 'react';

import { Button, RadioButton } from '@admiral-ds/react-ui';
import type { RadioButtonProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const RadioButtonBasic = ({ checked: argChecked, ...props }: RadioButtonProps) => {
  const [checked, setChecked] = useState(argChecked || false);

  useEffect(() => {
    setChecked(!!argChecked);
  }, [argChecked]);

  return (
    <ExampleSection style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <RadioButton value={1} checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} {...props}>
        Some text
      </RadioButton>
      <Button onClick={() => setChecked(false)}>Сбросить состояние радиокнопки</Button>
    </ExampleSection>
  );
};
