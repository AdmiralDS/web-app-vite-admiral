import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Link } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <ExampleSection>
      <Link href="https://admiralds.github.io/react-ui/?path=/docs/admiral-2-1-link--docs">Link</Link>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/link/')({
  component: () => <Template />,
  staticData: {
    title: 'Link. Базовый пример',
    description: 'Компонент используется для навигации. Может применяться отдельно или внутри текста.',
  },
});
