import { IconButton, LinkComponentCssMixin, TooltipHoc } from '@admiral-ds/react-ui';
import type { LinkComponentProps } from '@admiral-ds/react-ui';
import BugSolid from '@admiral-ds/icons/build/category/BugSolid.svg?react';
import MenuOutline from '@admiral-ds/icons/build/service/MenuOutline.svg?react';
import { Link } from '@tanstack/react-router';

import GithubSolid from './GithubIcon.svg?react';
import styled from 'styled-components';

import { SettingsButton } from './SettingsButton';
import { ThemeToggler } from './ThemeToggler';

const ButtonWithTooltip = TooltipHoc(IconButton);
const RouterLink = styled(Link)<LinkComponentProps>`
  ${LinkComponentCssMixin}
`;

const PaneSeparator = styled.div<{ $dimension?: 's' | 'm' }>`
  width: 1px;
  height: 24px;
  background-color: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  align-self: center;
  margin: 8px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-end;
  padding: 16px 4px 7px 0;
  box-sizing: border-box;
  border-bottom: 1px solid var(--admiral-color-Neutral_neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      {/* <ButtonWithTooltip renderContent={() => 'Menu'} dimension="m">
        <MenuOutline />
      </ButtonWithTooltip> */}
      <ButtonsWrapper>
        <RouterLink to="/general/resources" $appearance="secondary" $dimension="s">
          Resources
        </RouterLink>
        <PaneSeparator />
        <a href="https://github.com/AdmiralDS/react-ui/" target="_blank">
          <ButtonWithTooltip renderContent={() => 'Github'} dimension="m">
            <GithubSolid />
          </ButtonWithTooltip>
        </a>
        <a href="https://github.com/AdmiralDS/react-ui/issues" target="_blank">
          <ButtonWithTooltip renderContent={() => 'Bug report'} dimension="m">
            <BugSolid />
          </ButtonWithTooltip>
        </a>
        <ThemeToggler />
        <SettingsButton />
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};
