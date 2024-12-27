import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { ProgressStepper } from '@admiral-ds/react-ui';

const steps = [
  'Название первого шага',
  'Название второго шага',
  'Название третьего шага',
  'Название четвертого шага',
  'Название пятого шага',
  'Название шестого шага',
];

export const Template = () => (
  <>
    <ExampleSection
      text={
        <>
          <PStyled>
            Компонент Stepper Progress — визуальное отображение пользовательского прогресса в виде заполняющейся линии.
            Уведомляет пользователя о текущем положении на пути при выполнении конкретной задачи.
          </PStyled>
          <PStyled>
            Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на
            каждом из этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.
          </PStyled>
          <PStyled>
            Линия условно делится на количество частей соответствующее количеству шагов. Может изменяться по ширине,
            минимальная ширина 388px.
          </PStyled>
        </>
      }
    >
      <ProgressStepper steps={steps} />
    </ExampleSection>
  </>
);

export const Route = createFileRoute('/components/progressStepper/')({
  component: () => <Template />,
  staticData: {
    title: 'ProgressStepper. Базовый пример',
  },
});
