import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { Slider } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/slider/options')({
  component: () => <Template />,
  staticData: {
    title: 'Slider. C настройками minValue, maxValue',
  },
});
