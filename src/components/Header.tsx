import { IconButton, Link, PaneSeparator, Button, typography } from '@admiral-ds/react-ui';
import DarkModeSolid from '@admiral-ds/icons/build/system/DarkModeSolid.svg?react';
import BugSolid from '@admiral-ds/icons/build/category/BugSolid.svg?react';
import GithubSolid from './GithubIcon.svg?react';
import styled from 'styled-components';

import { SettingsButton } from './SettingsButton';

const StyledPaneSeparator = styled(PaneSeparator)`
  margin: 8px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const SettingsMenu = styled.div`
  width: 320px;
  padding: 20px;
  ${typography['Body/Body 2 Long']}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 28px;
  & > button:first-child {
    margin-right: 8px;
  }
`;

/** TODO: 1) переключатель темы 2) кнопка со ссылкой на гитхаб 3) кнопка со ссылкой на баг репорт 4) меню с настройками */
export const Header = () => {
  const renderSettingsMenu = ({ closeMenu }: any) => (
    <SettingsMenu>
      Здесь могут быть опции с настройками и кнопки для применения/сбрасывания настроек
      <ButtonWrapper>
        <Button dimension="s" onClick={closeMenu}>
          Сохранить
        </Button>
        <Button dimension="s" onClick={closeMenu}>
          Очистить
        </Button>
      </ButtonWrapper>
    </SettingsMenu>
  );
  return (
    <>
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
        <IconButton dimension="m">
          <BugSolid />
        </IconButton>
        <IconButton dimension="m">
          <GithubSolid />
        </IconButton>
        <IconButton dimension="m">
          <DarkModeSolid />
        </IconButton>
        <SettingsButton renderMenu={renderSettingsMenu} />
      </ButtonsWrapper>
    </>
  );
};
