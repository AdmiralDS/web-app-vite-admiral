import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Step, StepContent, Stepper } from '@admiral-ds/react-ui';
import { useState } from 'react';

const initialSteps = [
  {
    content: '1. Пройденный шаг',
    completed: true,
  },
  { content: '2. Ранее пройденный шаг, на котрый мы вернулись с 4го шага' },
  { content: '3. Пройденный шаг', completed: true },
  { content: '4. Отсюда мы вернулись на 2 шаг.', completed: true },
  { content: '5. Неактивный шаг, еще не пройденный' },
];

const initialSteps2 = [
  {
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
  { content: 'Активный шаг, текст занимает максимум три строки' },
  { content: 'Неактивный шаг, текст занимает максимум три строки' },
];

const initialSteps3 = [
  {
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    link: '#',
    completed: true,
  },
  {
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    link: '#',
    completed: true,
  },
  { content: 'Активный шаг, текст занимает максимум три строки', link: '#' },
  { content: 'Неактивный шаг, текст занимает максимум три строки', link: '#' },
];

export const Template = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [steps, setSteps] = useState(initialSteps);

  const handleStepClick = ({ index }: { index: number }) => {
    const newSteps = [...steps].map((step, i) => (i < 4 ? { ...step, completed: i !== index } : step));
    setSteps(newSteps);
    setActiveStep(index);
  };

  return (
    <>
      <ExampleSection text="В последнем шаге опционально можно выключать статусную полосу">
        <Stepper hideLastStepLine={true} lineClamp={3} activeStep={2}>
          {initialSteps2.map(({ content, ...step }, id) => {
            return (
              // eslint-disable-next-line no-console
              <Step {...step} key={`fourth-example-${id}`} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection text="Кликабельные шаги">
        <Stepper activeStep={activeStep}>
          {initialSteps2.map(({ content, ...step }, id) => {
            return (
              // eslint-disable-next-line no-console
              <Step {...step} key={`first-example-${id}`} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection text="Шаги в виде ссылок">
        <Stepper activeStep={activeStep}>
          {initialSteps3.map(({ content, ...step }, id) => {
            return (
              <Step {...step} key={`second-example-${id}`}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection text="В случаях необходимости и когда это позволяет логика шагов, например, результаты предыдущих шагов не влияют на последующие, допускается возможность возврата к предыдущим шагам. В этом сценарии уже выполненные шаги становятся кликабельными и при нажатии возвращают к пройденому шагу.  Возможны заблокированные для перехода шаги - Disable. Зоной клика является вся площадь сегмента.">
        <Stepper lineClamp={2} activeStep={activeStep}>
          {steps.map(({ content, ...step }, id) => {
            return (
              <Step {...step} key={`third-example-${id}`} onClick={handleStepClick}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/stepper/options')({
  component: () => <Template />,
  staticData: {
    title: 'Stepper. Опции',
  },
});
