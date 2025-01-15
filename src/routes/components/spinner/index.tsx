import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { Spinner } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Компонент служит для демонстрации процесса загрузки, ожидания. Существует в пяти размерах - 16, 20, 24, 48
              и 64 px. Может применяется как самостоятельный элемент, так и в составе других компонентов, например
              кнопок.
            </PStyled>
            <PStyled>Вращение происходит по часовой стрелке, делая полный оборот за 1 секунду.</PStyled>
          </>
        }
      >
        <Spinner />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/spinner/')({
  component: () => <Template />,
  staticData: {
    title: 'Spinner. Базовый пример',
  },
});
