import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { columnFlexMixin, ExampleSection } from '#routes/-helpers/examples';
import { LinkComponentCssMixin, LinkComponentProps } from '@admiral-ds/react-ui';

const StyledRouterLink = styled(RouterLink)<LinkComponentProps>`
  ${LinkComponentCssMixin}
`;

export const LinkCssMixin = () => {
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
