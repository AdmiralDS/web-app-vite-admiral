import { IconButton, LinkComponentCssMixin, TooltipHoc } from '@admiral-ds/react-ui';
import type { LinkComponentProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { Link } from '@tanstack/react-router';

import BugSolid from '@admiral-ds/icons/build/category/BugSolid.svg?react';
import GithubSolid from '../../assets/GithubIcon.svg?react';

import { useMediaQuery } from '../useMediaQuery';
import { MenuButton } from './MenuButton';
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
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  padding: 16px 4px 7px 0;
  box-sizing: border-box;
  background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
  border-bottom: 1px solid var(--admiral-color-Neutral_neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  @media (min-width: 1025px) {
    justify-content: flex-end;
  }

  @media (min-width: 1600px) {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
  }
`;

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <HeaderWrapper>
      {isMobile && <MenuButton />}
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
