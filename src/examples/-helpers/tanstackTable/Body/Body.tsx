import { Fragment } from 'react';
import { type Row, type RowData, type Table } from '@tanstack/react-table';
import styled from 'styled-components';

import type { Dimension, MetaRowProps } from '../types';

import { BodyTr } from './style';
import { ExpandedRow } from './ExpandedRow';
import { RowContent } from './RowContent';
import { EmptyRow } from './EmptyRow';

const BodyEl = styled.div`
  display: grid;
`;

export interface BodyProps<T> {
  table: Table<T>;
  greyZebraRows?: boolean;
  showRowsActions: boolean;
  dimension: Dimension;
  tableRef: React.MutableRefObject<null>;
  headerHeight: number;
  showLastRowUnderline: boolean;
  showBorders: boolean;
  showCheckboxTitleGroup: boolean;
  showDividerForLastColumn: boolean;
  emptyMessage?: React.ReactNode;
  renderRowWrapper?: (row: Row<T>, index: number, rowNode: React.ReactNode) => React.ReactNode;
}

export const Body = <T,>({
  table,
  dimension,
  tableRef,
  greyZebraRows,
  showRowsActions,
  headerHeight,
  showLastRowUnderline,
  showBorders,
  showCheckboxTitleGroup,
  showDividerForLastColumn,
  emptyMessage,
  renderRowWrapper,
}: BodyProps<T>) => {
  const isEmptyArrayRows = table.getRowModel().rows.length === 0;

  const renderRow = (row: Row<T>, index: number, isLastRow: boolean) => {
    const original = row.original as RowData & MetaRowProps<T>;
    const showUnderline = isLastRow ? showLastRowUnderline && !showBorders : true;
    const isSelected =
      row.getIsSelected() ||
      original.meta?.selected ||
      row.getIsSomeSelected() ||
      (!row.getCanSelect() && row.getIsAllSubRowsSelected());

    const node = (
      <Fragment key={row.id}>
        <BodyTr
          className="tr"
          data-row={index}
          $dimension={dimension}
          selected={isSelected}
          disabled={original.meta?.disabled}
          $hover={original.meta?.hover}
          $grey={greyZebraRows && index % 2 === 1}
          $status={original.meta?.status}
          $showRowsActions={showRowsActions}
          $showUnderline={!original.meta?.expandedRowRender && showUnderline}
        >
          <RowContent
            original={original}
            row={row}
            dimension={dimension}
            showCheckboxTitleGroup={showCheckboxTitleGroup}
            showDividerForLastColumn={showDividerForLastColumn}
            showRowsActions={showRowsActions}
            tableRef={tableRef}
            headerHeight={headerHeight}
          />
        </BodyTr>
        {row.getCanExpand() && original.meta?.expandedRowRender && (
          <ExpandedRow dimension={dimension} row={row} showUnderline={showUnderline} />
        )}
      </Fragment>
    );

    return node ? (renderRowWrapper?.(row, index, node) ?? node) : node;
  };

  return (
    <BodyEl className="tbody">
      {isEmptyArrayRows ? (
        <EmptyRow dimension={dimension} underline={showLastRowUnderline && !showBorders}>
          {emptyMessage}
        </EmptyRow>
      ) : (
        table.getRowModel().rows.map((row, index, rows) => {
          const isLastRow = index === rows.length - 1;

          return renderRow(row, index, isLastRow);
        })
      )}
    </BodyEl>
  );
};
