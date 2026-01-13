import styled from 'styled-components';
import type { Dimension } from '../types';

/** Экспорт компонентов, доступных для внешнего использования */

export * from './CheckboxCell';
export * from './ExpandCell';

/** Компонент с отступами для оборачивания контента ячеек */
export const CellText = styled.div<{ $dimension?: Dimension }>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /** учтены 2px отступы по вертикали */
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '8px 12px 7px 12px';
      case 'l':
        return '14px 16px 13px 16px';
      case 'xl':
        return '18px 16px 17px 16px';
      case 'm':
      default:
        return '12px 12px 11px 12px';
    }
  }};
`;

/** Компонент-обертка для заголовка колонки. Применяется для ячеек со стрелками или чекбоксами */
export const HeaderCellWrapper = styled.div.attrs(() => ({
  className: 'th',
}))`
  padding: 0;
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: flex-start;
  box-sizing: border-box;
  cursor: default;
  width: 100%;
  height: 100%;
`;

/** Компонент-обертка для контента строки с детализацией */
export const ExpandContentWrapper = styled.div<{ $dimension?: Dimension; $depth: number }>`
  padding-left: ${({ $depth, $dimension }) => `${$depth * ($dimension === 's' || $dimension === 'm' ? 44 : 56)}px`};
  display: inline-flex;
  overflow: hidden;
`;
