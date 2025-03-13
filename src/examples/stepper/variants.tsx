import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import { Step, StepContent, Stepper } from '@admiral-ds/react-ui';

const steps = [
  {
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  {
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { content: 'Активный шаг, текст занимает максимум три строки' },
  { content: 'Неактивный шаг, текст занимает максимум три строки' },
];

export const Template = () => {
  return (
    <>
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
        <Stepper lineClamp={1} activeStep={2}>
          {steps.map(({ content, ...step }, id) => {
            return (
              // eslint-disable-next-line no-console
              <Step {...step} key={`first-example-${id}`} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection text="Максимум 2 строки">
        <Stepper lineClamp={2} activeStep={2}>
          {steps.map(({ content, ...step }, id) => {
            return (
              // eslint-disable-next-line no-console
              <Step {...step} key={`second-example-${id}`} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
      <ExampleSection text="Максимум 3 строки">
        <Stepper lineClamp={2} activeStep={2}>
          {steps.map(({ content, ...step }, id) => {
            return (
              // eslint-disable-next-line no-console
              <Step {...step} key={`third-example-${id}`} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/stepper/variants')({
  component: () => <Template />,
  staticData: {
    title: 'Stepper. Варианты отображения строк',
  },
});
