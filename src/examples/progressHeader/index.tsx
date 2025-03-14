import { ExampleSection } from '#routes/-helpers/examples';
import { ProgressHeader } from '@admiral-ds/react-ui';
import { PageTemplate } from '#routes/-helpers/propgressHeader';

export const ProgressHeaderBasic = () => {
  return (
    <ExampleSection>
      <PageTemplate>
        <ProgressHeader appearance="primary" percent={50} role="alert" aria-live="assertive" />
      </PageTemplate>
    </ExampleSection>
  );
};
