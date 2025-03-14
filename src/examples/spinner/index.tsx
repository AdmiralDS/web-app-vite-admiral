import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import { Spinner } from '@admiral-ds/react-ui';

export const SpinnerBasic = () => {
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Компонент служит для демонстрации процесса загрузки, ожидания. Может применяется как самостоятельный
              элемент, так и в составе других компонентов, например кнопок.
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
