import { ExampleSection } from '#examples/-helpers';
import { Toggle } from '@admiral-ds/react-ui';

export const ToggleLabelPosition = () => {
  return (
    <>
      <ExampleSection text="Без текста">
        <Toggle />
      </ExampleSection>
      <ExampleSection text="Текст справа">
        <Toggle>Text</Toggle>
      </ExampleSection>
      <ExampleSection text="Текст слева">
        <Toggle labelPosition="left">Text</Toggle>
      </ExampleSection>
    </>
  );
};
