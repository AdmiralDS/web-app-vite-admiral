import { ExampleSection } from '#examples/-helpers';
import { TextArea } from '@admiral-ds/react-ui';

export const TextAreaState = () => {
  return (
    <>
      <ExampleSection text="Disabled">
        <div style={{ width: '70%' }}>
          <TextArea defaultValue="test" disabled />
        </div>
      </ExampleSection>
      <ExampleSection text="Read Only">
        <div style={{ width: '70%' }}>
          <TextArea defaultValue="test" readOnly />
        </div>
      </ExampleSection>
    </>
  );
};
