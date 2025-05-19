import { ExampleSection } from '#examples/-helpers';
import { SliderRange } from '@admiral-ds/react-ui';

export const SliderRangeInputSizes = () => {
  const handleChange = (
    value: [{ str: string; num: number }, { str: string; num: number }],
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(value, event);
  };

  return (
    <>
      <ExampleSection text="Размер XL">
        <SliderRange defaultValue={['1', '5']} onChange={handleChange} dimension="xl" />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <SliderRange defaultValue={['1', '5']} onChange={handleChange} dimension="m" />
      </ExampleSection>
      <ExampleSection text="Размер S">
        <SliderRange defaultValue={['1', '5']} onChange={handleChange} dimension="s" />
      </ExampleSection>
    </>
  );
};
