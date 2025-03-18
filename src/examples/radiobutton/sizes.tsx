import { RadioButton } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const RadioButtonSize = () => {
  return (
    <>
      <ExampleSection text="Размер M">
        <RadioButton value={1}>Text</RadioButton>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <RadioButton value={1} dimension="s">
          Text
        </RadioButton>
      </ExampleSection>
    </>
  );
};
