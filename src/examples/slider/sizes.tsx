import { ExampleSection } from '#examples/-helpers';
import { useState } from 'react';
import { Slider } from '@admiral-ds/react-ui';

export const SliderSizes = () => {
  const [rangeValueM, setRangeValueM] = useState(0);
  const [rangeValueXL, setRangeValueXL] = useState(0);

  return (
    <>
      <ExampleSection text="Размер M">
        <Slider
          value={rangeValueM}
          onChange={(e: React.SyntheticEvent, value: number) => {
            // eslint-disable-next-line no-console
            console.log({ event: e.type, value });
            setRangeValueM(value);
          }}
          dimension="m"
        />
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <Slider
          value={rangeValueXL}
          onChange={(e: React.SyntheticEvent, value: number) => {
            // eslint-disable-next-line no-console
            console.log({ event: e.type, value });
            setRangeValueXL(value);
          }}
          dimension="xl"
        />
      </ExampleSection>
    </>
  );
};
