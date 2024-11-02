import { useState, useContext, useCallback } from 'react';
import styled from 'styled-components';
import {
  IconButton,
  DropdownContainer,
  TooltipHoc,
  mediumGroupBorderRadius,
  typography,
  FieldSet,
  RadioButton,
  TextButton,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';
import type { BorderRadiusType } from '@admiral-ds/react-ui';
import SettingsSolid from '@admiral-ds/icons/build/system/SettingsSolid.svg?react';

import { SettingsContext } from '../../SettingsContext';
import type { CSSPropsIn, Theme } from '../../SettingsContext';

const ButtonWithTooltip = TooltipHoc(IconButton);

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const StyledDrop = styled(DropdownContainer)`
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
`;

const SettingsMenu = styled.div`
  width: 280px;
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FieldSetStyled = styled(FieldSet)`
  margin: 8px 0;
  padding: 0;
  legend {
    padding: 0;
    ${typography['Subtitle/Subtitle 2']}
  }
`;

const DefaultButton = styled(TextButton)`
  margin: 12px 0;
`;

export const SettingsButton = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [button, setButton] = useState<HTMLButtonElement | null>(null);
  const { theme, toggleTheme, CSSProps, setCSSProps, borderRadius, setBorderRadius } = useContext(SettingsContext);

  const renderMenu = useCallback(
    () => (
      <SettingsMenu>
        <FieldSetStyled
          onChange={(e) => {
            toggleTheme((e.target as HTMLInputElement).value as Theme);
          }}
          legend="Theme"
        >
          <RadioButton name="theme" value="light" checked={theme === 'light'}>
            Light
          </RadioButton>
          <RadioButton name="theme" value="dark" checked={theme === 'dark'}>
            Dark
          </RadioButton>
        </FieldSetStyled>
        <FieldSetStyled
          onChange={(e) => {
            setBorderRadius((e.target as HTMLInputElement).value as BorderRadiusType);
          }}
          legend="Border Radius"
        >
          {ALL_BORDER_RADIUS_VALUES.map((radius) => (
            <RadioButton
              key={radius}
              name="radius"
              value={radius}
              checked={radius === borderRadius}
              onChange={() => {}}
            >
              {radius.replace(/^\D+/g, '') + ' px'}
            </RadioButton>
          ))}
        </FieldSetStyled>
        <FieldSetStyled
          onChange={(e) => {
            setCSSProps((e.target as HTMLInputElement).value as CSSPropsIn);
          }}
          legend="CSS Custom Props"
        >
          <RadioButton name="CSSProps" value="enable" checked={CSSProps === 'enable'} onChange={() => {}}>
            Enable
          </RadioButton>
          <RadioButton name="CSSProps" value="disable" checked={CSSProps === 'disable'} onChange={() => {}}>
            Disable
          </RadioButton>
        </FieldSetStyled>
        <DefaultButton
          text="Reset to default"
          onClick={() => {
            toggleTheme('light');
            setCSSProps('enable');
            setBorderRadius('Border radius 4');
          }}
        />
      </SettingsMenu>
    ),
    [theme, toggleTheme, CSSProps, setCSSProps, borderRadius, setBorderRadius],
  );

  const handleBtnClick = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  const handleClickOutside = (e: Event) => {
    if (e.target && button?.contains(e.target as Node)) {
      return;
    }
    setOpened(false);
  };

  return (
    <>
      <ButtonWithTooltip
        renderContent={() => 'Settings'}
        ref={(node) => setButton(node)}
        dimension="m"
        onClick={handleBtnClick}
      >
        <SettingsSolid />
      </ButtonWithTooltip>
      {opened && (
        <StyledDrop targetElement={button} onClickOutside={handleClickOutside}>
          {renderMenu()}
        </StyledDrop>
      )}
    </>
  );
};
