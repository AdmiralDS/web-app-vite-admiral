import styled from 'styled-components';
import { SystemArrowDownOutline, SystemArrowUpOutline } from '@admiral-ds/icons';
import { typography } from '@admiral-ds/react-ui';
import { SortDirection } from '@tanstack/react-table';
import { makeIcon } from './makeIcon';
import { makeScrollboxMixin } from './makeScrollboxMixin';
import { TextWithOverflowPopup } from './TextWithOverflow';

export const TableWrapper = styled.div<{ $headerRows: number }>`
  flex: 1;
  overflow: auto;
  position: relative;

  &:focus-visible {
    outline: none;
  }

  ${(p) =>
    makeScrollboxMixin({
      stickyHeaderHeightPx: 32 * p.$headerRows,
      scrollShadowHeightPx: 4,
    })};
`;

export const Table = styled.table`
  display: grid;
  width: 100%;
`;

export const TableRow = styled.tr<{ $disableBorder?: boolean; $gridTemplateColumns?: string }>`
  min-width: 100%;
  ${(p) => !p.$disableBorder && p.theme.shadow['Shadow Stroke']}

  display: grid;
  grid-template-columns: ${(p) => p.$gridTemplateColumns ?? 'repeat(auto-fit,minmax(0,1fr))'};
  align-items: stretch;
`;

export const TableHead = styled.thead`
  display: grid;
  position: sticky;
  top: 0;
  z-index: 1;

  ${(p) => p.theme.shadow['Shadow Stroke']}

  & ${TableRow} {
    background-color: ${(p) => p.theme.color['Special/Static White']};
  }
`;

export const TableHeaderCell = styled.th<{ $colspan: number; $isInteractive: boolean }>`
  text-align: left;
  white-space: nowrap;
  padding: 0;
  grid-column: span ${(p) => p.$colspan};
  ${typography['Subtitle/Subtitle 3']};

  display: flex;
  align-items: stretch;
  overflow: hidden;

  cursor: ${(p) => (p.$isInteractive ? 'pointer' : undefined)};
`;

export const TableHeaderCellForGroups = styled(TableHeaderCell)<{
  $colspan: number;
  $isPlaceholder: boolean;
  $hideRightBorder: boolean;
  $hideBottomBorder: boolean;
}>`
  text-align: left;
  white-space: nowrap;
  padding: 0;
  grid-column: span ${(p) => p.$colspan};
  ${typography['Body/Body 2 Short']};
  background: ${(p) => p.theme.color['Neutral/Neutral 05']};

  border-color: ${(p) => p.theme.color['Neutral/Neutral 20']};
  border-style: solid;
  border-width: 0 1px 1px 0;

  border-right-width: ${(p) => (p.$hideRightBorder ? 0 : undefined)};
  border-bottom-width: ${(p) => (p.$hideBottomBorder ? 0 : undefined)};

  box-shadow: none;
`;

export const TableBody = styled.tbody`
  ${typography['Body/Body 2 Short']};

  position: relative;
`;

export const Cell = styled.td`
  display: flex;
  padding: 0;
  overflow: hidden;
`;

export const ArrowDownIcon = styled(makeIcon(SystemArrowDownOutline, '18px'))`
  cursor: pointer;
  color: ${(p) => p.theme.color['Primary/Primary 70']};
`;

export const ArrowUpIcon = styled(makeIcon(SystemArrowUpOutline, '18px'))<{ $direction?: false | SortDirection }>`
  cursor: pointer;
  color: ${(p) => p.theme.color['Primary/Primary 70']};

  transition:
    transform 150ms ease,
    color 150ms ease,
    opacity 150ms ease;
  transform: ${(p) => (p.$direction === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: ${(p) => (p.$direction ? p.theme.color['Primary/Primary 60 Main'] : p.theme.color['Neutral/Neutral 50'])};

  &&& {
    opacity: ${(p) => (p.$direction ? 1 : 0)};
  }
`;

export const HeaderCell: React.FC<React.HTMLAttributes<HTMLSpanElement> & { $hideSeparator?: boolean }> = styled.div<{
  $hideSeparator?: boolean;
}>`
  flex: 1;

  position: relative;

  padding: 6px 12px;
  overflow: hidden;
  display: flex;

  cursor: pointer;

  ${typography['Subtitle/Subtitle 3']};

  &:empty::after {
    display: none;
  }

  &::after {
    display: ${({ $hideSeparator }) => ($hideSeparator ? 'none' : 'block')};

    margin-top: 6px;

    position: absolute;
    top: 1px;
    right: 0;

    width: 1px;
    height: 16px;

    background-color: ${({ theme }) => theme.color['Neutral/Neutral 20']};

    font-size: 16px;
    content: '';
  }

  & > ${ArrowUpIcon} {
    opacity: 0;
  }

  &:hover > ${ArrowUpIcon} {
    opacity: 1;
  }
`;

export const TextCellContent = styled(TextWithOverflowPopup)`
  align-self: center;
  padding: 8px 12px;
`;
