import type { HTMLAttributes } from 'react';
import * as React from 'react';
import { useRef, useState } from 'react';
import { IconButton, DropdownContainer, refSetter } from '@admiral-ds/react-ui';
import SettingsOutline from '@admiral-ds/icons/build/system/SettingsOutline.svg?react';
import styled from 'styled-components';
// import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
// import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';

const StyledDrop = styled(DropdownContainer)`
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
`;
// box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
// border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});

export interface ColumnsButtonProps extends HTMLAttributes<HTMLButtonElement> {
  renderMenu?: (obj: { closeMenu: () => void }) => React.ReactNode;
}

export const SettingsButton = React.forwardRef<HTMLButtonElement, ColumnsButtonProps>(
  ({ renderMenu, ...props }, ref) => {
    const [opened, setOpened] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

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
        <IconButton ref={refSetter(ref, buttonRef)} dimension="m" onClick={handleBtnClick} {...props}>
          <SettingsOutline />
        </IconButton>
        {opened && (
          <StyledDrop targetElement={buttonRef.current} alignSelf={'flex-end'} onClickOutside={handleClickOutside}>
            {renderMenu?.({ closeMenu })}
          </StyledDrop>
        )}
      </>
    );
  },
);
