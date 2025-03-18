import { ExampleSection } from '#examples/-helpers';
import { useState } from 'react';
import { Slider } from '@admiral-ds/react-ui';

export const SliderState = () => {
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <>
      <ExampleSection text="Disabled">
        <Slider
          disabled
          value={rangeValue}
          onChange={(e: React.SyntheticEvent, value: number) => {
            // eslint-disable-next-line no-console
            console.log({ e, value });
            setRangeValue(value);
          }}
        />
      </ExampleSection>
      <ExampleSection text="Skeleton">
        <Slider
          skeleton
          value={rangeValue}
          onChange={(e: React.SyntheticEvent, value: number) => {
            // eslint-disable-next-line no-console
            console.log({ e, value });
          }}
        />
      </ExampleSection>
    </>
  );
};
