import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { ProgressStepper } from '@admiral-ds/react-ui';

const steps = [
  'название первого этапа',
  'название второго этапа',
  'название третьего этапа',
  'название четвертого этапа',
  'название пятого этапа',
  'название шестого этапа',
];

export const Template = () => (
  <ExampleSection text="Пример настройки названия шага">
    <ProgressStepper steps={steps} activeStep={2} locale={{ stepName: ['этап', 'этапов'] }} />
  </ExampleSection>
);

export const Route = createFileRoute('/components/progressStepper/stepsNaming')({
  component: () => <Template />,
  staticData: {
    title: 'ProgressStepper. Пример настройки названия шага',
  },
});
