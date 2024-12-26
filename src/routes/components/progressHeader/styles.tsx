import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { ProgressHeader } from '@admiral-ds/react-ui';
import { PageTemplate } from '../../-helpers/propgressHeader';

export const Template = () => {
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

export const Route = createFileRoute('/components/progressHeader/styles')({
  component: () => <Template />,
  staticData: {
    title: 'ProgressHeader. Стили',
    description: '',
  },
});
