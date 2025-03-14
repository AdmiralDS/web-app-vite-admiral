import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { EditMode } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 250px;
`;

const Example = () => {
  const value = 'Текст, достаточно длинный для того, чтобы он уместился в видимое поле';
  const placeholder = 'Placeholder';
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <Wrapper>
      <EditMode value={localValue} onChange={handleChange} placeholder={placeholder} showTooltip />
    </Wrapper>
  );
};

export const EditModeTooltip = () => {
  return (
    <ExampleSection>
      <Example />
    </ExampleSection>
  );
};
