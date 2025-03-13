import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { EditMode } from '@admiral-ds/react-ui';
import type { EditModeProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const Component = ({
  disabled,
  readOnly,
  status,
  skeleton,
}: {
  disabled?: boolean;
  readOnly?: boolean;
  status?: EditModeProps['status'];
  skeleton?: boolean;
}) => {
  const value = 'Привет!';
  const placeholder = 'Placeholder';
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <EditMode
      value={localValue}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      status={status}
      skeleton={skeleton}
    />
  );
};

const Example = () => {
  return (
    <>
      <ExampleSection text={'Состояние disabled'}>
        <Component disabled />
      </ExampleSection>
      <ExampleSection text={'Состояние readOnly'}>
        <Component readOnly />
      </ExampleSection>
      <ExampleSection text={'Статус success'}>
        <Component status="success" />
      </ExampleSection>
      <ExampleSection text={'Статус error'}>
        <Component status="error" />
      </ExampleSection>
      <ExampleSection text={'Состояние загрузки'}>
        <Component skeleton />
      </ExampleSection>
    </>
  );
};

export const EditModeStatus = () => {
  return <Example />;
};

export const Route = createFileRoute('/components/editMode/status')({
  component: () => <EditModeStatus />,
  staticData: {
    title: 'Edit mode. Состояние/статус',
  },
});
