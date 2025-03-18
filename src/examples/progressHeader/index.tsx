import { ExampleSection } from '#examples/-helpers';
import { ProgressHeader } from '@admiral-ds/react-ui';
import { PageTemplate } from '#examples/-helpers/progressHeader';

export const ProgressHeaderBasic = () => {
  return (
    <ExampleSection>
      <PageTemplate>
        <ProgressHeader appearance="primary" percent={50} role="alert" aria-live="assertive" />
      </PageTemplate>
    </ExampleSection>
  );
};
