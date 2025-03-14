import { ExampleSection } from '#routes/-helpers/examples';
import { useState } from 'react';
import { Slider } from '@admiral-ds/react-ui';

export const SliderCustom = () => {
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <>
      <ExampleSection>
        <Slider
          tickMarks={[25, 50, 75]}
          value={rangeValue}
          maxValue={100}
          onChange={(e: React.SyntheticEvent, value: number) => {
            // eslint-disable-next-line no-console
            console.log({ event: e.type, value });
            setRangeValue(value);
          }}
          renderTickMark={(mark: string) => mark + ' ₽'}
        />
      </ExampleSection>
    </>
  );
};
