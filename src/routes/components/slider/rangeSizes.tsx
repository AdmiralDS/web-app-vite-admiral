import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { Range } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/slider/rangeSizes')({
  component: () => <Template />,
  staticData: {
    title: 'SliderRange. Размеры',
    description: 'Компонент существует в 2 размерах S и M',
  },
});
