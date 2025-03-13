import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { useState } from 'react';
import { Range } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/slider/rangeState')({
  component: () => <Template />,
  staticData: {
    title: 'SliderRange. Состояния',
  },
});
