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
      <ExampleSection header="Первый шаг">
        <ProgressStepper steps={steps} activeStep={0} mobile />
      </ExampleSection>
      <ExampleSection header="Середина прогресса">
        <ProgressStepper steps={steps} activeStep={2} mobile />
      </ExampleSection>
      <ExampleSection header="Последний шаг">
        <ProgressStepper steps={steps} activeStep={5} mobile />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/progressStepper/mobile')({
  component: () => <Template />,
  staticData: {
    title: 'ProgressStepper. Адаптив (mobile)',
  },
});
