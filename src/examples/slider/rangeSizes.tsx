import { ExampleSection } from '#examples/-helpers';
import { useState } from 'react';
import { Range } from '@admiral-ds/react-ui';

export const SliderRangeSizes = () => {
  const [rangeValueS, setRangeValueS] = useState<[number, number]>([4, 5]);
  const [rangeValueM, setRangeValueM] = useState<[number, number]>([4, 5]);

  return (
    <>
      <ExampleSection text="Размер S">
        <Range
          dimension="s"
          value={rangeValueS}
          onChange={(e: React.SyntheticEvent, value: [number, number]) => {
            // eslint-disable-next-line no-console
            console.log({ e, value });
            setRangeValueS(value);
          }}
        />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <Range
          dimension="m"
          value={rangeValueM}
          onChange={(e: React.SyntheticEvent, value: [number, number]) => {
            // eslint-disable-next-line no-console
            console.log({ e, value });
            setRangeValueM(value);
          }}
        />
      </ExampleSection>
    </>
  );
};
