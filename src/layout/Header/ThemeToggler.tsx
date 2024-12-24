import { IconButton, TooltipHoc } from '@admiral-ds/react-ui';
import DarkModeSolid from '@admiral-ds/icons/build/system/DarkModeSolid.svg?react';
import LightModeSolid from '@admiral-ds/icons/build/system/LightModeSolid.svg?react';
import { useContext } from 'react';

import { SettingsContext } from '../../SettingsContext';

const ButtonWithTooltip = TooltipHoc(IconButton);

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(SettingsContext);
  return (
    <ButtonWithTooltip
      renderContent={() => (theme === 'light' ? 'Dark theme' : 'Light theme')}
      dimension="m"
      onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <DarkModeSolid /> : <LightModeSolid />}
    </ButtonWithTooltip>
  );
};
