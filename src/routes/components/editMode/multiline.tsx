import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { EditModeArea, EditModeAreaField } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ExampleSection } from '../../-helpers/examples';

const Wrapper = styled.div`
  width: 250px;
`;

const Example = () => {
  const value =
    'Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить больше игр';
  const placeholder = 'Placeholder';
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <>
      <ExampleSection text="Для многострочного ввода используйте компонент EditModeArea">
        <Wrapper>
          <EditModeArea value={localValue} onChange={handleChange} placeholder={placeholder} />
        </Wrapper>
      </ExampleSection>
    </>
  );
};

const ExampleField = () => {
  const value =
    'Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить больше игр';
  const placeholder = 'Placeholder';
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <>
      <ExampleSection text="Для многострочного ввода с лэйблом и дополнительным текстом используйте компонент EditModeAreaField">
        <Wrapper>
          <EditModeAreaField
            value={localValue}
            onChange={handleChange}
            placeholder={placeholder}
            label="Лэйбл"
            extraText="Дополнительный текст"
          />
        </Wrapper>
      </ExampleSection>
    </>
  );
};

export const EditModeMultiline = () => {
  return (
    <>
      <Example />
      <ExampleField />
    </>
  );
};

export const Route = createFileRoute('/components/editMode/multiline')({
  component: () => <EditModeMultiline />,
  staticData: {
    title: 'Edit mode. Многострочное отображение',
  },
});
