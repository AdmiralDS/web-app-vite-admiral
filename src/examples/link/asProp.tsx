import { createFileRoute } from '@tanstack/react-router';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import { columnFlexMixin, ExampleSection } from '#routes/-helpers/examples';
import { Link } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <ExampleSection cssMixin={columnFlexMixin}>
      <Link as="button" type="button">
        Render button instead of anchor
      </Link>
      <Link as="div" dimension="s">
        Render div instead of anchor
      </Link>
      <Router>
        <Link as={RouterLink} to="">
          Render RouterLink instead of anchor
        </Link>
      </Router>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/link/asProp')({
  component: () => <Template />,
  staticData: {
    title: 'Link. Link As Prop',
    description:
      'Компонент Link является полиморфным компонентом. По умолчанию компонент Link возвращает стандартный html anchor элемент. Однако с помощью параметра as можно перезадать тип элемента, который будет отрисован. В качестве значения as можно передать строку, в которой будет прописан тип html элемента, или компонент.',
  },
});
