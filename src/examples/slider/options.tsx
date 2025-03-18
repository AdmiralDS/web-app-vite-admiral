import { ExampleSection } from '#examples/-helpers';
import { useState } from 'react';
import { Slider } from '@admiral-ds/react-ui';

export const SliderOptions = () => {
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <>
      <ExampleSection>
        <Slider
          value={rangeValue}
          onChange={(e: React.SyntheticEvent, value: number) => {
            // eslint-disable-next-line no-console
            console.log({ event: e.type, value });
            setRangeValue(value);
          }}
          minValue={10}
          maxValue={100}
        />
      </ExampleSection>
    </>
  );
};
