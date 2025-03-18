import { ExampleSection } from '#examples/-helpers';
import { useState } from 'react';
import { Range } from '@admiral-ds/react-ui';

export const SliderRangeState = () => {
  const [rangeValue, setRangeValue] = useState<[number, number]>([4, 5]);

  return (
    <>
      <ExampleSection text="Disabled">
        <Range
          disabled
          value={rangeValue}
          onChange={(e: React.SyntheticEvent, value: [number, number]) => {
            // eslint-disable-next-line no-console
            console.log({ e, value });
            setRangeValue(value);
          }}
        />
      </ExampleSection>
      <ExampleSection text="Skeleton">
        <Range
          skeleton
          value={rangeValue}
          onChange={(e: React.SyntheticEvent, value: [number, number]) => {
            // eslint-disable-next-line no-console
            console.log({ e, value });
          }}
        />
      </ExampleSection>
    </>
  );
};
