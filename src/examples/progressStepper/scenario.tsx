import { ExampleSection } from '#examples/-helpers';
import { ProgressStepper } from '@admiral-ds/react-ui';

const steps = [
  'Название первого шага',
  'Название второго шага',
  'Название третьего шага',
  'Название четвертого шага',
  'Название пятого шага',
  'Название шестого шага',
];

export const ProgressStepperScenario = () => {
  return (
    <>
      <ExampleSection text="Первый шаг">
        <ProgressStepper steps={steps} activeStep={0} />
      </ExampleSection>
      <ExampleSection text="Середина прогресса">
        <ProgressStepper steps={steps} activeStep={2} />
      </ExampleSection>
      <ExampleSection text="Последний шаг">
        <ProgressStepper steps={steps} activeStep={5} />
      </ExampleSection>
    </>
  );
};
