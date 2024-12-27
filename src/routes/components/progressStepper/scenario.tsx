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

export const Route = createFileRoute('/components/progressStepper/scenario')({
  component: () => <Template />,
  staticData: {
    title: 'ProgressStepper. Сценарий прогресса',
  },
});
