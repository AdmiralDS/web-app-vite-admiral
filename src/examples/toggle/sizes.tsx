import { ExampleSection } from '#routes/-helpers/examples';
import { Toggle } from '@admiral-ds/react-ui';

export const ToggleSizes = () => {
  return (
    <>
      <ExampleSection text="Размер M">
        <Toggle>Text</Toggle>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <Toggle dimension="s">Text</Toggle>
      </ExampleSection>
    </>
  );
};
