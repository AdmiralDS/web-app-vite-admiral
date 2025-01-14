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
            Компонент является наборным, то есть нужно размещать рядом необходимое количество шагов с нулевым отступом
            между элементами. Компонент можно изменять по ширине, все шаги должны быть одинаковой ширины.
          </PStyled>
          <PStyled>
            В зависимости от количества текста выбирается вариант с одной-двумя или тремя строками, при этом изменяется
            высота компонента.
          </PStyled>
          <PStyled>
            В мобильной версии, ввиду ограниченного пространства, рекомендуется применять горизонтальную версию
            степпера.
          </PStyled>
          <PStyled>В последнем шаге выключается статусная полоса</PStyled>
          <PStyled>Вертикальный Stepper имеет такие же опции, кастом и состояния как и горизонтальный</PStyled>
        </>
      }
    >
      <Stepper activeStep={2} orientation="vertical" style={{ width: '225px' }}>
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

export const Route = createFileRoute('/components/stepper/vertical')({
  component: () => <Template />,
  staticData: {
    title: 'Stepper. Вертикальный',
  },
});
