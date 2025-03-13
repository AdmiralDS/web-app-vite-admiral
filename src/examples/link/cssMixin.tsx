import { createFileRoute } from '@tanstack/react-router';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { columnFlexMixin, ExampleSection } from '#routes/-helpers/examples';
import { LinkComponentCssMixin, LinkComponentProps } from '@admiral-ds/react-ui';

const StyledRouterLink = styled(RouterLink)<LinkComponentProps>`
  ${LinkComponentCssMixin}
`;

export const Template = () => {
  return (
    <ExampleSection cssMixin={columnFlexMixin}>
      <Router>
        <StyledRouterLink to="">Styled RouterLink - dimension m</StyledRouterLink>
        <StyledRouterLink to="" $dimension="s">
          Styled RouterLink - dimension s
        </StyledRouterLink>
        <StyledRouterLink to="" $appearance="secondary">
          Styled RouterLink - appearance secondary
        </StyledRouterLink>
      </Router>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/link/cssMixin')({
  component: () => <Template />,
  staticData: {
    title: 'Link. Css Mixin',
    description:
      'Помимо компонента Link библиотека предоставляет LinkComponentCssMixin - миксин, включающий в себя все стили компонента Link согласно дизайну Admiral 2.1. Данный миксин целесообразно применять, если пользователь хочет использовать свой собственный компонент, стилизованный согласно дизайну Admiral 2.1.',
  },
});
