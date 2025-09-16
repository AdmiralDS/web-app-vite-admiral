import '@tanstack/react-table';
import type { Column, RowData } from '@tanstack/react-table';
import type { css } from 'styled-components';
import type { CSSProperties } from 'react';

type FilterColumn = {
  /** Функция отрисовки содержимого фильтра (выпадающего меню фильтра). Если её не передать, значок фильтра отображаться не будет */
  renderFilter?: (closeMenu: () => void, column: Column<any, unknown>) => React.ReactNode;
  /** Функция отрисовки иконки фильтра. По умолчанию в качестве иконки фильтра применяется OverflowIcon (троеточие) */
  renderFilterIcon?: () => React.ReactNode;
  /** Колбек на клик вне меню фильтра */
  onFilterMenuClickOutside?: (closeMenu: () => void, event: Event) => void;
  /** Колбек на открытие меню фильтра */
  onFilterMenuOpen?: () => void;
  /** Колбек на закрытие меню фильтра */
  onFilterMenuClose?: () => void;
  /**
   *  Позволяет выравнивать меню фильтра относительно столбца
   *  https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  filterMenuAlignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Позволяет добавлять миксин для меню фильтра, созданный с помощью styled css  */
  filterMenuCssMixin?: ReturnType<typeof css>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  filterMenuClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  filterMenuStyle?: CSSProperties;
};

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    gridColumnTemplate?: string;
    extraText?: string;
    filter?: FilterColumn;
    /** Выравнивание контента ячеек столбца по левому или правому краю. По умолчанию left */
    cellAlign?: 'left' | 'right';
  }
}
