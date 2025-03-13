import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { ProgressPage } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <>
      <ExampleSection text="Primary">
        <ProgressPage
          appearance="primary"
          label={
            <>
              <div>{'Загрузка данных...'}</div>
              <div> {50}%</div>
            </>
          }
          percent={50}
          role="alert"
          aria-live="assertive"
        />
      </ExampleSection>
      <ExampleSection text="Error">
        <ProgressPage
          appearance="error"
          label={
            <>
              <div>{'Загрузка данных...'}</div>
              <div> {50}%</div>
            </>
          }
          percent={50}
          role="alert"
          aria-live="assertive"
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/progressPage/styles')({
  component: () => <Template />,
  staticData: {
    title: 'ProgressPage. Стили',
    description: '',
  },
});
