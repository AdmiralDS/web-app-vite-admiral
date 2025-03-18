import { ExampleSection } from '#examples/-helpers';
import { useState } from 'react';
import { Range } from '@admiral-ds/react-ui';

export const SliderRangeOptions = () => {
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 35]);

  return (
    <>
      <ExampleSection>
        <Range
          value={rangeValue}
          onChange={(e: React.SyntheticEvent, value: [number, number]) => {
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
