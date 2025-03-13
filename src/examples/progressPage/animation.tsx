import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { ProgressPage } from '@admiral-ds/react-ui';

export const Template = () => {
  const [tik, setTick] = useState(0);

  useEffect(() => {
    const counter = () => setTick((prev) => prev + 1);
    const timerId = setTimeout(counter, 1000);
    if (tik >= 20) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);

  return (
    <ExampleSection>
      <ProgressPage
        label={
          <>
            <div>{'Загрузка данных...'}</div>
            <div> {tik}%</div>
          </>
        }
        percent={tik}
        role="alert"
        aria-live="assertive"
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/progressPage/animation')({
  component: () => <Template />,
  staticData: {
    title: 'ProgressPage. Анимация',
    description: '',
  },
});
