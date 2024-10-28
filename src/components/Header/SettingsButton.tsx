import { useRef, useState, useContext, useCallback } from 'react';
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
} from '@admiral-ds/react-ui';
import SettingsOutline from '@admiral-ds/icons/build/system/SettingsOutline.svg?react';

import { SettingsContext } from '../../SettingsContext';
import type { CSSPropsIn } from '../../SettingsContext';

const ButtonWithTooltip = TooltipHoc(IconButton);

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const StyledDrop = styled(DropdownContainer)`
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
`;

const SettingsMenu = styled.div`
  width: 320px;
  padding: 20px;
  ${typography['Body/Body 2 Long']}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export interface ColumnsButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const SettingsButton = ({ ...props }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { CSSProps, setCSSProps } = useContext(SettingsContext);

  const renderMenu = useCallback(
    ({ closeMenu }: any) => (
      <SettingsMenu>
        {/* <FieldSet
        onChange={(e) => {
          setBorderRadius((e.target as HTMLInputElement).value);
        }}
        legend="Border Radius"
      >
        {radiusValues.map((radius) => (
          <RadioButton key={radius} name="radius" checked={radius === borderRadius} onChange={() => {}}>
            {radius}
          </RadioButton>
        ))}
      </FieldSet> */}
        <FieldSet
          onChange={(e) => {
            setCSSProps((e.target as HTMLInputElement).value as CSSPropsIn);
          }}
          legend="CSS Custom Props"
        >
          <RadioButton name="CSSProps" value="enable" checked={CSSProps === 'enable'}>
            Enable
          </RadioButton>
          <RadioButton name="CSSProps" value="disable" checked={CSSProps === 'disable'}>
            Disable
          </RadioButton>
        </FieldSet>
        <TextButton
          text="Reset to default"
          onClick={() => {
            setCSSProps('enable');
          }}
        />
      </SettingsMenu>
    ),
    [CSSProps, setCSSProps],
  );

  const closeMenu = () => {
    setOpened(false);
    buttonRef.current?.focus();
  };

  const handleBtnClick = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  const handleClickOutside = (e: Event) => {
    if (e.target && buttonRef.current?.contains(e.target as Node)) {
      return;
    }
    setOpened(false);
  };

  return (
    <>
      <ButtonWithTooltip
        renderContent={() => 'Settings'}
        ref={buttonRef}
        dimension="m"
        onClick={handleBtnClick}
        {...props}
      >
        <SettingsOutline />
      </ButtonWithTooltip>
      {opened && (
        <StyledDrop targetElement={buttonRef.current} alignSelf={'flex-end'} onClickOutside={handleClickOutside}>
          {renderMenu?.({ closeMenu })}
        </StyledDrop>
      )}
    </>
  );
};
