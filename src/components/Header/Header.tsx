import { IconButton, Link, PaneSeparator, TooltipHoc } from '@admiral-ds/react-ui';
import BugSolid from '@admiral-ds/icons/build/category/BugSolid.svg?react';
import GithubSolid from './GithubIcon.svg?react';
import styled from 'styled-components';

import { SettingsButton } from './SettingsButton';
import { ThemeToggler } from './ThemeToggler';

const ButtonWithTooltip = TooltipHoc(IconButton);

const StyledPaneSeparator = styled(PaneSeparator)`
  margin: 8px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

/** TODO: 4) меню с настройками 5) бургер 6) стили и размеры хедера причесать */
export const Header = () => {
  return (
    <HeaderWrapper>
      <div>Burger</div>
      <ButtonsWrapper>
        <Link
          appearance="secondary"
          dimension="s"
          href=""
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
        >
          Resources
        </Link>
        <StyledPaneSeparator />
        <a href="https://github.com/AdmiralDS/react-ui/issues" target="_blank">
          <ButtonWithTooltip renderContent={() => 'Bug report'} dimension="m">
            <BugSolid />
          </ButtonWithTooltip>
        </a>
        <a href="https://github.com/AdmiralDS/react-ui/" target="_blank">
          <ButtonWithTooltip renderContent={() => 'Github'} dimension="m">
            <GithubSolid />
          </ButtonWithTooltip>
        </a>
        <ThemeToggler />
        <SettingsButton />
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};
