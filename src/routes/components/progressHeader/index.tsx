import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { ProgressHeader } from '@admiral-ds/react-ui';
import { PageTemplate } from '../../-helpers/propgressHeader';

export const Template = () => {
  return (
    <ExampleSection>
      <PageTemplate>
        <ProgressHeader appearance="primary" percent={50} role="alert" aria-live="assertive" />
      </PageTemplate>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/progressHeader/')({
  component: () => <Template />,
  staticData: {
    title: 'ProgressHeader. Базовый пример',
    description:
      'Показывает визуальный прогресс загрузки страницы. Компонент отображается наверху страницы, непосредственно под шапкой браузера на самом верху рабочей области сайта. Ширина равняется ширине окна браузера.',
  },
});
