import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { EditModeField } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const Example = () => {
  const value = 'Привет!';
  const placeholder = 'Placeholder';
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <>
      <ExampleSection text="Пример с лэйблом и дополнительным текстом, компонент EditModeField">
        <EditModeField
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          label="Label"
          extraText="Extra text"
        />
      </ExampleSection>
      <ExampleSection text="Пример в статусе error, компонент EditModeField">
        <EditModeField
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
          status="error"
          extraText="Extra text"
          label="Label"
        />
      </ExampleSection>
    </>
  );
};

export const EditModeExtraText = () => {
  return <Example />;
};

export const Route = createFileRoute('/components/editMode/extratext')({
  component: () => <EditModeExtraText />,
  staticData: {
    title: 'Edit mode. Дополнительный текст и лэйбл',
  },
});
