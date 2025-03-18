import styled from 'styled-components';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

export const MenuWrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

export type StoryItem = {
  id: string;
  label: string;
  value?: number;
  disabled?: boolean;
  readOnly?: boolean;
  children?: Array<StoryItem>;
};
