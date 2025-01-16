import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { Slider } from '@admiral-ds/react-ui';

export const Template = () => {
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
      <ExampleSection text="Sceleton">
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

export const Route = createFileRoute('/components/slider/state')({
  component: () => <Template />,
  staticData: {
    title: 'Slider. Состояния',
  },
});
