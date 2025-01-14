import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { Step, StepContent, Stepper } from '@admiral-ds/react-ui';
import { useState } from 'react';

const initialSteps = [
  {
    key: 0,
    content: '1. Пройденный шаг',
    completed: true,
  },
  { key: 1, content: '2. Ранее пройденный шаг, на котрый мы вернулись с 4го шага' },
  { key: 2, content: '3. Пройденный шаг', completed: true },
  { key: 3, content: '4. Отсюда мы вернулись на 2 шаг.', completed: true },
  { key: 4, content: '5. Неактивный шаг, еще не пройденный' },
];

const initialSteps2 = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { key: 1, content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
];

const initialSteps3 = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    link: '#',
    completed: true,
  },
  {
    key: 1,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    link: '#',
    completed: true,
  },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки', link: '#' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки', link: '#' },
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
      <ExampleSection text="Кликабельные шаги">
        <Stepper activeStep={activeStep}>
          {initialSteps2.map(({ content, ...step }) => {
            return (
              // eslint-disable-next-line no-console
              <Step {...step} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection text="Шаги в виде ссылок">
        <Stepper activeStep={activeStep}>
          {initialSteps3.map(({ content, ...step }) => {
            return (
              <Step {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection text="В случаях необходимости и когда это позволяет логика шагов, например, результаты предыдущих шагов не влияют на последующие, допускается возможность возврата к предыдущим шагам. В этом сценарии уже выполненные шаги становятся кликабельными и при нажатии возвращают к пройденому шагу.  Возможны заблокированные для перехода шаги - Disable. Зоной клика является вся площадь сегмента.">
        <Stepper lineClamp={2} activeStep={activeStep}>
          {steps.map(({ content, ...step }) => {
            return (
              <Step {...step} onClick={handleStepClick}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection text="В последнем шаге опционально можно выключать статусную полосу">
        <Stepper hideLastStepLine={true} lineClamp={3} activeStep={2}>
          {initialSteps2.map(({ content, ...step }) => {
            return (
              // eslint-disable-next-line no-console
              <Step {...step} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection
        text={
          <>
            <PStyled>
              В случае переполнения текста при наведении на текст появляется подсказка с полным содержанием, также можно
              регулировать максимальное количество отображаемых строк
            </PStyled>
            <PStyled>Максимум 1 строка</PStyled>
          </>
        }
      >
        <Stepper hideLastStepLine={true} lineClamp={1} activeStep={2}>
          {initialSteps2.map(({ content, ...step }) => {
            return (
              // eslint-disable-next-line no-console
              <Step {...step} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection text="Максимум 2 строки">
        <Stepper hideLastStepLine={true} lineClamp={2} activeStep={2}>
          {initialSteps2.map(({ content, ...step }) => {
            return (
              // eslint-disable-next-line no-console
              <Step {...step} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection text="Максимум 3 строки">
        <Stepper hideLastStepLine={true} lineClamp={2} activeStep={2}>
          {initialSteps2.map(({ content, ...step }) => {
            return (
              // eslint-disable-next-line no-console
              <Step {...step} onClick={(step) => console.log(step.index)}>
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
