import { ExampleSection } from '#examples/-helpers';
import { SliderRange } from '@admiral-ds/react-ui';

export const SliderRangeInputState = () => {
  const handleChange = (
    value: [{ str: string; num: number }, { str: string; num: number }],
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(value, event);
  };

  return (
    <>
      <ExampleSection text="Disabled">
        <SliderRange defaultValue={['1', '5']} onChange={handleChange} disabled />
      </ExampleSection>
      <ExampleSection text="Read Only">
        <SliderRange defaultValue={['1', '5']} onChange={handleChange} readOnly />
      </ExampleSection>
      <ExampleSection text="Skeleton">
        <SliderRange defaultValue={['1', '5']} onChange={handleChange} skeleton />
      </ExampleSection>
    </>
  );
};
