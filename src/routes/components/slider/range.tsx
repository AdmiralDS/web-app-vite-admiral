import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { Range } from '@admiral-ds/react-ui';

export const Template = () => {
  const [rangeValue, setRangeValue] = useState<[number, number]>([4, 5]);

  return (
    <>
      <ExampleSection text="Двойной слайдер позволяет выбирать диапазон внутри обозначенного диапазона значений">
        <Range
          value={rangeValue}
          onChange={(e: React.SyntheticEvent, value: [number, number]) => {
            // eslint-disable-next-line no-console
            console.log({ e, value });
            setRangeValue(value);
          }}
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/slider/range')({
  component: () => <Template />,
  staticData: {
    title: 'SliderRange. Базовый пример',
  },
});
