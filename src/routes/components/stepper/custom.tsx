import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Step, Stepper } from '@admiral-ds/react-ui';

const steps = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { key: 1, content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
];

export const Template = () => {
  return (
    <ExampleSection>
      <Stepper lineClamp={1} activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <i style={{ color: 'olive' }}>{content}</i>
            </Step>
          );
        })}
      </Stepper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/stepper/custom')({
  component: () => <Template />,
  staticData: {
    title: 'Stepper. Кастомный StepContent',
  },
});
