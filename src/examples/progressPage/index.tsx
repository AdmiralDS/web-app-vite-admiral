import { ExampleSection } from '#examples/-helpers';
import { ProgressPage } from '@admiral-ds/react-ui';

export const ProgressPageBasic = () => {
  return (
    <ExampleSection>
      <ProgressPage
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
  );
};
