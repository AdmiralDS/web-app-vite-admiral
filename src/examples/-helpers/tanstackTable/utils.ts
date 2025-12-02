import type { Column } from '@tanstack/react-table';
import type { Dimension } from './types';

export const getRowHeight = (dimension: Dimension) => {
  switch (dimension) {
    case 's':
      return 32;
    case 'l':
      return 48;
    case 'xl':
      return 56;
    case 'm':
    default:
      return 40;
  }
};

export const getColumnWidth = <T>(column: Column<T>) => {
  return column.getCanResize()
    ? `${column.getSize()}px`
    : column.columnDef.meta?.gridColumnTemplate || `${column.getSize()}px`;
};
