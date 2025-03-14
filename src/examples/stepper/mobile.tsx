import { ExampleSection, MobileBottomContainer, PStyled } from '#routes/-helpers/examples';
import { Button, Step, StepContent, Stepper } from '@admiral-ds/react-ui';
import { useState } from 'react';

const initialSteps = [
  {
    content: 'Текст занимает максимум три строки, далее идет сокращение',
  },
  { content: 'Текст занимает максимум три строки, далее идет сокращение' },
  { content: 'Текст занимает максимум три строки, далее идет сокращение' },
  { content: 'Текст занимает максимум три строки, далее идет сокращение' },
];

export const StepperMobile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState(initialSteps);

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            В мобильной версии применяется только горизонтальный вариант компонента Stepper с автоматическим скроллом по
            горизонтали по мере прохождения шагов.
          </PStyled>
          <PStyled>Компонент можно скроллить пальцем, если нужно посмотреть пройденные или будущие шаги.</PStyled>
          <PStyled>
            При переходе на следующий шаг, который становится текущим, он выравнивается относительно левого края на
            расстоянии 16px (боковой падинг). Шаг перед текущим уходит за границы экрана.
          </PStyled>
        </>
      }
    >
      <MobileBottomContainer>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '40px' }}>
          <Button
            onClick={() => {
              const newSteps = [...steps].map((step, i) =>
                i === activeStep - 1 ? { ...step, completed: false } : step,
              );
              setSteps(newSteps);
              setActiveStep(activeStep - 1);
            }}
            disabled={activeStep === 0}
            dimension="s"
          >
            Шаг назад
          </Button>
          <Button
            onClick={() => {
              const newSteps = [...steps].map((step, i) => (i === activeStep ? { ...step, completed: true } : step));
              setSteps(newSteps);
              setActiveStep(activeStep + 1);
            }}
            disabled={activeStep === 3}
            dimension="s"
          >
            Шаг вперёд
          </Button>
        </div>
        <Stepper activeStep={activeStep} mobile>
          {steps.map(({ content, ...step }, id) => {
            return (
              <Step {...step} key={id}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </MobileBottomContainer>
    </ExampleSection>
  );
};
