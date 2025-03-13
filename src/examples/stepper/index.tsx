import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import { Step, StepContent, Stepper } from '@admiral-ds/react-ui';

const steps = [
  {
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
  { content: 'Активный шаг, текст занимает максимум три строки' },
  { content: 'Неактивный шаг, текст занимает максимум три строки' },
];

export const Template = () => {
  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Компонент Stepper — визуальное отображение пользовательского прогресса через набор шагов. Уведомляет
            пользователя о текущем положении на пути при выполнении конкретной задачи.
          </PStyled>
          <PStyled>
            Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на
            каждом из этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.
          </PStyled>
          <PStyled>Компонент представлен в двух вариантах — горизонтальном и вертикальном.</PStyled>
          <PStyled>
            Компонент является наборным, то есть нужно размещать рядом необходимое количество шагов с нулевым отступом
            между элементами. Компонент можно изменять по ширине, все шаги должны быть одинаковой ширины и высоты.
          </PStyled>
          <PStyled>
            В зависимости от количества текста выбирается вариант с одной, двумя или тремя строками, при этом изменяется
            высота компонента. Нельзя использовать рядом элементы с разной настройкой количества строк, исходите из
            максимально возможного объема текста.
          </PStyled>
        </>
      }
    >
      <Stepper lineClamp={3} activeStep={2}>
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

export const Route = createFileRoute('/components/stepper/')({
  component: () => <Template />,
  staticData: {
    title: 'Stepper. Базовый пример',
  },
});
