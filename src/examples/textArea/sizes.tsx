import { ExampleSection } from '#examples/-helpers';
import { TextArea } from '@admiral-ds/react-ui';

export const TextAreaSizes = () => {
  return (
    <>
      <ExampleSection text="Размер S">
        <div style={{ width: '70%' }}>
          <TextArea defaultValue="test" dimension="s" />
        </div>
      </ExampleSection>
      <ExampleSection text="Размер M">
        <div style={{ width: '70%' }}>
          <TextArea defaultValue="test" dimension="m" />
        </div>
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <div style={{ width: '70%' }}>
          <TextArea defaultValue="test" dimension="xl" />
        </div>
      </ExampleSection>
    </>
  );
};
