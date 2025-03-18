import { ExampleSection } from '#examples/-helpers';
import { ProgressPage } from '@admiral-ds/react-ui';

export const ProgressPageStyles = () => {
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
