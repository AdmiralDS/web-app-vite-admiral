import { ExampleSection } from '#examples/-helpers';
import { TextField } from '@admiral-ds/react-ui';

export const TextAreaStatuses = () => {
  return (
    <>
      <ExampleSection text="Error">
        <div style={{ width: '70%' }}>
          <TextField defaultValue="test" status='error' label="Лэйбл" extraText="Дополнительный текст" />
        </div>
      </ExampleSection>
      <ExampleSection text="Success">
        <div style={{ width: '70%' }}>
          <TextField defaultValue="test" status='success' label="Лэйбл" extraText="Дополнительный текст" />
        </div>
      </ExampleSection>
    </>
  );
};
