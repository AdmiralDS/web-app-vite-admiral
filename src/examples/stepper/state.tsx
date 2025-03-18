import { ExampleSection, PStyled } from '#examples/-helpers';
import { Step, StepContent, Stepper } from '@admiral-ds/react-ui';

const steps = [
  { content: 'Warning шаг', warning: true },
  { content: 'Disabled шаг', disabled: true },
  { content: 'Error шаг', error: true },
  { content: 'Сompleted шаг', completed: true },
  { content: 'Активный шаг' },
  { content: 'Неактивный шаг' },
];

export const StepperState = () => {
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
        {steps.map(({ content, ...step }, id) => {
          return (
            // eslint-disable-next-line no-console
            <Step {...step} key={id} onClick={(step) => console.log(step.index)}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </ExampleSection>
  );
};
