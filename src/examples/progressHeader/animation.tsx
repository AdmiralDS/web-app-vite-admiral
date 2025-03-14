import { useEffect, useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { ProgressHeader } from '@admiral-ds/react-ui';
import { PageTemplate } from '#routes/-helpers/propgressHeader';

export const ProgressHeaderAnimation = () => {
  const [tik, setTick] = useState(0);

  useEffect(() => {
    const counter = () => setTick((prev) => prev + 10);
    const timerId = setTimeout(counter, 1000);
    if (tik > 100) {
      setTick(0);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);

  return (
    <ExampleSection>
      <PageTemplate>
        <ProgressHeader appearance="primary" percent={tik} role="alert" aria-live="assertive" />
      </PageTemplate>
    </ExampleSection>
  );
};
