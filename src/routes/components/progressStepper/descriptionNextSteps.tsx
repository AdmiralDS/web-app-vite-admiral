import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { ProgressStepper } from '@admiral-ds/react-ui';

const steps = [
  'Название первого шага',
  'Название второго шага',
  'Название третьего шага',
  'Название четвертого шага',
  'Название пятого шага',
  'Название шестого шага',
];

export const Template = () => {
  return (
    <>
      <ExampleSection header="Кастомная подпись о следующем шаге">
        <ProgressStepper
          steps={steps}
          activeStep={2}
          locale={{ renderNextStepName: (nextStepName) => `Далее следует шаг: ${nextStepName}` }}
        />
      </ExampleSection>
      <ExampleSection header="Отключение подписи о следующем шаге">
        <ProgressStepper steps={steps} activeStep={2} displayNextStepName={false} mobile />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/progressStepper/descriptionNextSteps')({
  component: () => <Template />,
  staticData: {
    title: 'ProgressStepper. Примеры настройки подписи о следующем шаге',
  },
});
