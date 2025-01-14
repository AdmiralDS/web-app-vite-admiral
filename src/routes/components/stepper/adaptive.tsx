import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { Step, StepContent, Stepper } from '@admiral-ds/react-ui';

const steps = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  {
    key: 1,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
];

export const Template = () => {
  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            С помощью параметра stepWidth можно задать ширину шага. Если данный параметр не задан, то ширина шага будет
            рассчитываться следующим образом:
          </PStyled>
          <PStyled>
            <li>
              при горизонтальной ориентации все шаги будут в равной степени делить между собой свободное пространство;
            </li>
            <li>при вертикальной ориентации каждый шаг займет 100% ширины степпера.</li>
          </PStyled>
          <PStyled>
            Таким образом шаги будут пропорционально увеличиваться/уменьшаться при изменении ширины степпера.
          </PStyled>
        </>
      }
    >
      <Stepper activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Stepper activeStep={2} orientation="vertical" style={{ width: '25%', marginTop: '50px' }}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/stepper/adaptive')({
  component: () => <Template />,
  staticData: {
    title: 'Stepper. Адаптив',
  },
});
