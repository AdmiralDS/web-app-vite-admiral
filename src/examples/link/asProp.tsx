import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import { columnFlexMixin, ExampleSection } from '#routes/-helpers/examples';
import { Link } from '@admiral-ds/react-ui';

export const LinkAsProp = () => {
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
