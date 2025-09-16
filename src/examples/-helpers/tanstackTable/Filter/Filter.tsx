import * as React from 'react';
import styled from 'styled-components';

import type { Dimension } from '../styled';
import { keyboardKey, refSetter, StyledDropdownContainer } from '@admiral-ds/react-ui';
import type { Column } from '@tanstack/react-table';
import { Button } from './Button';

const FilterDropdownContainer = styled(StyledDropdownContainer)`
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
`;

export interface FilterCompProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  column: Column<any, unknown>;
  /** Размер компонента */
  dimension?: Dimension;
  /** Элемент, относительно которого будет позиционироваться меню фильтра */
  targetElement: HTMLElement | null;
}

export const Filter = React.forwardRef<HTMLButtonElement, FilterCompProps>(
  ({ column, targetElement, ...props }, ref) => {
    const {
      renderFilter,
      renderFilterIcon,
      onFilterMenuClickOutside,
      onFilterMenuOpen,
      onFilterMenuClose,
      filterMenuAlignSelf = 'auto',
      filterMenuCssMixin,
      filterMenuClassName,
      filterMenuStyle,
    } = column.columnDef.meta?.filter ?? {};

    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
    const btnRef = React.useRef<HTMLButtonElement>(null);

    const reverseMenu = () => {
      setMenuOpened((prevOpened) => {
        prevOpened ? onFilterMenuClose?.() : onFilterMenuOpen?.();
        return !prevOpened;
      });
    };

    const closeMenu = () => {
      setMenuOpened(false);
      onFilterMenuClose?.();
      btnRef.current?.focus();
    };

    const clickOutside = (e: Event) => {
      if (e.target && btnRef.current?.contains(e.target as Node)) {
        return;
      }
      onFilterMenuClickOutside?.(closeMenu, e);
    };

    const handleBtnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const code = keyboardKey.getCode(e);
      if (code === keyboardKey.ArrowDown || code === keyboardKey.Enter || code === keyboardKey[' ']) {
        setMenuOpened(true);
        onFilterMenuOpen?.();
        e.preventDefault();
      }
    };

    const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const code = keyboardKey.getCode(e);
      if (code === keyboardKey.Escape || code === keyboardKey.Tab) {
        closeMenu();
      }
    };

    return (
      <>
        <Button
          ref={refSetter(ref, btnRef)}
          onKeyDown={handleBtnKeyDown}
          onClick={reverseMenu}
          aria-expanded={menuOpened}
          aria-haspopup={menuOpened}
          isFilterActive={column.getIsFiltered()}
          renderFilterIcon={renderFilterIcon}
          {...props}
        />
        {menuOpened && (
          <FilterDropdownContainer
            role="listbox"
            targetElement={targetElement}
            alignSelf={filterMenuAlignSelf}
            onClickOutside={clickOutside}
            onKeyDown={handleMenuKeyDown}
            dropContainerCssMixin={filterMenuCssMixin}
            className={filterMenuClassName}
            style={filterMenuStyle}
          >
            {renderFilter?.(closeMenu, column)}
          </FilterDropdownContainer>
        )}
      </>
    );
  },
);
