import { ExampleSection } from '#routes/-helpers/examples';
import { ProgressStepper } from '@admiral-ds/react-ui';

const steps = [
  'Название первого шага',
  'Название второго шага',
  'Название третьего шага',
  'Название четвертого шага',
  'Название пятого шага',
  'Название шестого шага',
];

export const ProgressStepperNextStep = () => (
  <>
    <ExampleSection text="Кастомная подпись о следующем шаге">
      <ProgressStepper
        steps={steps}
        activeStep={2}
        locale={{ renderNextStepName: (nextStepName) => `Далее следует шаг: ${nextStepName}` }}
      />
    </ExampleSection>
    <ExampleSection text="Отключение подписи о следующем шаге">
      <ProgressStepper steps={steps} activeStep={2} displayNextStepName={false} mobile />
    </ExampleSection>
  </>
);
