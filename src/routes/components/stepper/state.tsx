import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { Step, StepContent, Stepper } from '@admiral-ds/react-ui';

const steps = [
  { key: 0, content: 'Warning шаг', warning: true },
  { key: 1, content: 'Disabled шаг', disabled: true },
  { key: 2, content: 'Error шаг', error: true },
  { key: 3, content: 'Сompleted шаг', completed: true },
  { key: 4, content: 'Активный шаг' },
  { key: 5, content: 'Неактивный шаг' },
];

export const Template = () => {
  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Для обозначения активного шага в компонент Stepper нужно передать параметр activeStep, равный индексу
            активного шага. Либо для самого Step можно задать параметр active (перезаписывает собой параметр
            activeStep).
          </PStyled>
          <PStyled>
            Чтобы обозначить завершенные (пройденные) шаги, для соответствующих шагов необходимо задать параметр
            completed. Также компонент Step имеет параметры disabled, error, warning.
          </PStyled>
          <PStyled>
            Пройденные шаги могут быть кликабельными, для этого у них должен быть задан колбек onClick или параметр
            link.
          </PStyled>
        </>
      }
    >
      <Stepper activeStep={4}>
        {steps.map(({ content, ...step }) => {
          return (
            // eslint-disable-next-line no-console
            <Step {...step} onClick={(step) => console.log(step.index)}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/stepper/state')({
  component: () => <Template />,
  staticData: {
    title: 'Stepper. Состояния',
  },
});
