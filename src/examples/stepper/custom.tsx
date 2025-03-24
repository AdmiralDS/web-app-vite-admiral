import { ExampleSection } from '#examples/-helpers';
import { Step, Stepper } from '@admiral-ds/react-ui';

const steps = [
  {
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
  { content: 'Активный шаг, текст занимает максимум три строки' },
  { content: 'Неактивный шаг, текст занимает максимум три строки' },
];

export const StepperCustom = () => {
  return (
    <ExampleSection>
      <Stepper lineClamp={1} activeStep={2}>
        {steps.map(({ content, ...step }, id) => {
          return (
            <Step key={id} {...step}>
              <i style={{ color: 'olive' }}>{content}</i>
            </Step>
          );
        })}
      </Stepper>
    </ExampleSection>
  );
};
