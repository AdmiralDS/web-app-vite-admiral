import { ExampleSection } from '#examples/-helpers';
import { ProgressStepper } from '@admiral-ds/react-ui';

const steps = [
  'название первого этапа',
  'название второго этапа',
  'название третьего этапа',
  'название четвертого этапа',
  'название пятого этапа',
  'название шестого этапа',
];

export const ProgressStepperStepsNaming = () => (
  <ExampleSection text="Пример настройки названия шага">
    <ProgressStepper steps={steps} activeStep={2} locale={{ stepName: ['этап', 'этапов'] }} />
  </ExampleSection>
);
