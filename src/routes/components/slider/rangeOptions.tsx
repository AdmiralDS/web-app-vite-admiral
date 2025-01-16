import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { Range } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/slider/rangeOptions')({
  component: () => <Template />,
  staticData: {
    title: 'SliderRange. C настройками minValue, maxValue',
  },
});
