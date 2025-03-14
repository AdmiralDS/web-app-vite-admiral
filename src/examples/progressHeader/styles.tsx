import { ExampleSection } from '#routes/-helpers/examples';
import { ProgressHeader } from '@admiral-ds/react-ui';
import { PageTemplate } from '#routes/-helpers/propgressHeader';

export const ProgressHeaderStyles = () => {
  return (
    <>
      <ExampleSection text="Primary">
        <PageTemplate>
          <ProgressHeader appearance="primary" percent={50} role="alert" aria-live="assertive" />
        </PageTemplate>
      </ExampleSection>
      <ExampleSection text="Error">
        <PageTemplate>
          <ProgressHeader appearance="error" percent={50} role="alert" aria-live="assertive" />
        </PageTemplate>
      </ExampleSection>
    </>
  );
};
