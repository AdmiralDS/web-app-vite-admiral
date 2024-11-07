import { useState, useRef, useEffect } from 'react';
import { Drawer, Tooltip, IconButton } from '@admiral-ds/react-ui';
import MenuOutline from '@admiral-ds/icons/build/service/MenuOutline.svg?react';
import { SideMenu } from '../SideMenu/SideMenu';

/**
 * Реализовано через IconButton + Tooltip
 *
 * Если использовать TooltipHOC, то при закрытии Drawerа тултип отображался бы на кнопке,
 * так как Drawer возвращает фокус последнему активному элементу при закрытии,
 * а  TooltipHOC отображает тултип при mouseenter/focus */

export const MenuButton = () => {
  const [tipVisible, setTipVisible] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function show() {
      setTipVisible(true);
    }
    function hide() {
      setTipVisible(false);
    }
    const button = btnRef.current;
    if (button) {
      button.addEventListener('mouseenter', show);
      button.addEventListener('mouseleave', hide);
      return () => {
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('mouseleave', hide);
      };
    }
  }, [setTipVisible]);

  return (
    <>
      <>
        <IconButton ref={btnRef} onClick={() => setOpened((opened) => !opened)} dimension="m" className="burger">
          <MenuOutline />
        </IconButton>
        {tipVisible && <Tooltip targetElement={btnRef.current} renderContent={() => 'Menu'} />}
        <Drawer
          isOpen={opened}
          position="left"
          closeOnBackdropClick
          closeOnEscapeKeyDown
          displayCloseIcon={false}
          onClose={() => setOpened(false)}
          style={{ minWidth: '288px', maxWidth: '288px' }}
          aria-labelledby="drawer-title"
        >
          <SideMenu />
        </Drawer>
      </>
    </>
  );
};
