import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { ProgressPage } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <ExampleSection>
      <ProgressPage
        label={
          <>
            <div>{'Загрузка данных...'}</div>
            <div> {50}%</div>
          </>
        }
        percent={50}
        role="alert"
        aria-live="assertive"
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/progressPage/')({
  component: () => <Template />,
  staticData: {
    title: 'ProgressPage. Базовый пример',
    description: (
      <>
        Компонент для отображения прогресса загрузки страницы, либо контента на странице. Компонент может изменяться по
        ширине, минимальный размер 140px.
        <br />
        <br />
        Компонент имеет два сценария применения:
        <br />
        <br />
        Первый, когда мы, например, загружаем тяжелую страницу (или контент на ней) и показываем прогресс ее загрузки,
        при этом блокируется содержимое страницы и прогресс отображается оверлеем.
        <br />
        <br />
        Второй сценарий, более редкий, когда компонент используется как часть интерфейсов на странице и отображает
        прогресс какого-либо процесса, например опроса.
      </>
    ),
  },
});
