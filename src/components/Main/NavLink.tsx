import { LinkComponentCssMixin, typography } from '@admiral-ds/react-ui';
import type { LinkComponentProps } from '@admiral-ds/react-ui';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)<LinkComponentProps>`
  ${LinkComponentCssMixin}
  ${({ $dimension }) => ($dimension === 's' ? typography['Subtitle/Subtitle 3'] : typography['Subtitle/Subtitle 1'])}
`;
