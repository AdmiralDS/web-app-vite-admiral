import * as React from 'react';
import { CheckboxField, LIGHT_THEME } from '@admiral-ds/react-ui';
import { useTheme } from 'styled-components';
import type { Color } from '@admiral-ds/react-ui';
import { refSetter } from './refSetter';

import { HeaderCellComponent } from './HeaderCell';
import {
  CheckboxCell,
  ExpandCell,
  Filler,
  Header,
  HeaderCellsWrapper,
  HeaderWrapper,
  StickyWrapper,
  NormalWrapper,
  TableContainer,
  HiddenHeader,
  DragCell,
  LeftEdge,
  RightEdge,
  ActionMock,
} from './style';
import type {
  Column,
  TableRow,
  TableProps,
  RowId,
  IdSelectionStatusMap,
  Group,
  GroupRows,
  GroupInfo,
  ZebraRows,
} from './types';

export * from './RowAction';
export type { TableProps, TableRow, Column, RowId, Dimension } from './types';

export const DEFAULT_COLUMN_WIDTH = 100;
const COLUMN_MIN_WIDTH_M = 25;
const COLUMN_MIN_WIDTH_L = 33;
const TABLE_ROW_STATUS_MAP = {
  error: (color: Color) => color['Error/Error 20'],
  success: (color: Color) => color['Success/Success 20'],
};

export const Table = React.forwardRef<HTMLDivElement, TableProps>(
  (
    {
      columnList,
      rowList,
      displayRowSelectionColumn = false,
      displayRowExpansionColumn = false,
      headerCheckboxChecked = false,
      headerCheckboxIndeterminate = false,
      headerCheckboxDisabled = false,
      onHeaderSelectionChange,
      onRowSelectionChange,
      onRowExpansionChange,
      onRowClick,
      onRowDoubleClick,
      onSortChange,
      onColumnResize,
      renderCell,
      renderRowWrapper,
      dimension = 'm',
      greyHeader = false,
      greyZebraRows = false,
      spacingBetweenItems,
      headerLineClamp = 1,
      headerExtraLineClamp = 1,
      showDividerForLastColumn = false,
      disableColumnResize = false,
      showLastRowUnderline = true,
      showRowsActions: userShowRowsActions = false,
      virtualScroll,
      locale,
      onColumnDrag,
      onColumnDragEnd,
      rowsDraggable = false,
      onRowDrag,
      onRowDragEnd,
      rowBackgroundColorByStatusMap: userRowBackgroundColorByStatusMap,
      showBorders = false,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme() || LIGHT_THEME;
    const checkboxDimension = dimension === 's' || dimension === 'm' ? 's' : 'm';
    const columnMinWidth = dimension === 's' || dimension === 'm' ? COLUMN_MIN_WIDTH_M : COLUMN_MIN_WIDTH_L;

    const [tableHeight, setTableHeight] = React.useState(0);
    const [headerHeight, setHeaderHeight] = React.useState(0);

    const stickyColumns = [...columnList].filter((col) => col.sticky);

    const isAnyColumnDraggable = columnList.filter((col) => !col.sticky && col.draggable).length > 0;
    const isAnyStickyColumnDraggable = columnList.filter((col) => col.sticky && col.draggable).length > 0;

    // show column with backgrounds for row actions only if there are some strokes with
    // overflow menu or single action and userShowRowsActions = true
    const showRowsActions = React.useMemo(
      () => rowList.some((row) => row.actionRender || row.overflowMenuRender) && userShowRowsActions,
      [rowList, userShowRowsActions],
    );

    const rowStatusMap = React.useMemo(
      () => ({ ...TABLE_ROW_STATUS_MAP, ...userRowBackgroundColorByStatusMap }),
      [userRowBackgroundColorByStatusMap],
    );

    const tableRef = React.useRef<HTMLDivElement>(null);
    const headerRef = React.useRef<HTMLDivElement>(null);
    const hiddenHeaderRef = React.useRef<HTMLDivElement>(null);
    const bodyRef = React.useRef<HTMLDivElement>(null);
    const stickyColumnsWrapperRef = React.useRef<HTMLDivElement>(null);
    const normalColumnsWrapperRef = React.useRef<HTMLDivElement>(null);
    const fillerRef = React.useRef<HTMLDivElement>(null);
    const leftEdgeRef = React.useRef<HTMLDivElement>(null);
    const rightEdgeRef = React.useRef<HTMLDivElement>(null);

    const groupToRowsMap = rowList.reduce<Group>((acc: Group, row) => {
      if (typeof row.groupRows !== 'undefined') {
        acc[row.id] = {
          rows: [...row.groupRows],
          expanded: !!row.expanded,
        };
      }
      return acc;
    }, {});

    const rowToGroupMap = Object.entries(groupToRowsMap).reduce<GroupRows>((acc, [groupId, info]) => {
      info.rows.forEach((id) => {
        const row = rowList.find((item) => item.id.toString() === id);
        if (row && !groupToRowsMap[id]) {
          acc[id] = { groupId, checked: !!row.selected };
        }
      });
      return acc;
    }, {});

    const reorderRowsToGroup = () => {
      const tableRows: Array<TableRow> = [];
      rowList.forEach((row) => {
        const isGroupRow = !!groupToRowsMap[row.id];
        const rowInGroup = !!rowToGroupMap[row.id];
        if (!rowInGroup) {
          tableRows.push(row);
        }

        if (isGroupRow) {
          groupToRowsMap[row.id].rows.forEach((rowId) => {
            const row = rowList.find((item) => item.id.toString() === rowId);
            if (row) tableRows.push(row);
          });
        }
      });

      return tableRows;
    };

    const tableRows = React.useMemo(() => reorderRowsToGroup(), [rowList]);

    const zebraRows = greyZebraRows
      ? tableRows.reduce<ZebraRows>((acc: ZebraRows, row: TableRow, index: number) => {
          if (rowToGroupMap[row.id]) {
            const indexInGroup = groupToRowsMap[rowToGroupMap[row.id]?.groupId]?.rows.indexOf(String(row.id));
            acc[row.id] = `ingroup ${indexInGroup % 2 === 0 ? 'odd' : 'even'}`;
          } else if (groupToRowsMap[row.id]) {
            acc[row.id] = 'group';
          } else if (index === 0 || acc[tableRows[index - 1]?.id].includes('group')) {
            acc[row.id] = 'odd';
          } else {
            acc[row.id] = acc[tableRows[index - 1]?.id] === 'odd' ? 'even' : 'odd';
          }
          return acc;
        }, {})
      : {};

    const updateHeaderScrollWidth = () => {
      if (bodyRef.current && headerRef.current) {
        bodyRef.current.style.setProperty(`--header-scroll-width`, headerRef.current.scrollWidth + 'px');
      }
    };

    const updateColumnsWidth = () => {
      const hiddenColumns = hiddenHeaderRef.current?.querySelectorAll<HTMLElement>('.th');
      if (hiddenColumns) {
        Array.from(hiddenColumns)
          .map((column) => ({ index: column.dataset.index, width: column.getBoundingClientRect().width }))
          .map(({ index, width }) => {
            if (index) {
              headerRef.current?.style.setProperty(`--th-${index}-width`, width + 'px');
              bodyRef.current?.style.setProperty(`--td-${index}-width`, width + 'px');
            }
          });

        updateHeaderScrollWidth();
      }
    };

    // check column size updates
    React.useLayoutEffect(() => {
      if (hiddenHeaderRef.current) {
        const hiddenColumns = hiddenHeaderRef.current?.querySelectorAll<HTMLElement>('.th');
        const resizeObserver = new ResizeObserver(updateColumnsWidth);

        hiddenColumns?.forEach((col) => resizeObserver.observe(col));
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [hiddenHeaderRef.current, headerRef.current, bodyRef.current, columnList, rowList]);

    React.useLayoutEffect(() => {
      updateColumnsWidth();
    });

    // check table size updates
    React.useLayoutEffect(() => {
      const table = tableRef.current;

      if (table) {
        const resizeObserver = new ResizeObserver(() => {
          setTableHeight(table.getBoundingClientRect().height);
        });
        resizeObserver.observe(table);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [setTableHeight]);

    // check header size updates
    React.useLayoutEffect(() => {
      const header = headerRef.current;

      if (header) {
        const resizeObserver = new ResizeObserver(() => {
          setHeaderHeight(header.getBoundingClientRect().height);
        });
        resizeObserver.observe(header);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [setHeaderHeight]);

    // check filler size updates
    React.useLayoutEffect(() => {
      const filler = fillerRef.current;

      if (filler) {
        const resizeObserver = new ResizeObserver(() => {
          filler.dataset.empty = String(filler.getBoundingClientRect().width == 0);
        });
        resizeObserver.observe(filler);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, []);

    // scroll-triggered shadow animation via IntersectionObserver for left sticky columns
    // TODO: research ways to implement scroll-driven animation via css and polyfill
    React.useLayoutEffect(() => {
      const table = tableRef.current;
      const leftEdge = leftEdgeRef.current;
      const enableShadow =
        stickyColumns.length > 0 || displayRowSelectionColumn || displayRowExpansionColumn || rowsDraggable;

      function handleIntersection([entry]: IntersectionObserverEntry[]) {
        if (table) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
            table.setAttribute('data-shadow-left', 'false');
          } else {
            table.setAttribute('data-shadow-left', 'true');
          }
        }
      }

      if (table && leftEdge && enableShadow) {
        const observer = new IntersectionObserver(handleIntersection, {
          root: table,
          threshold: [0, 1.0],
        });
        observer.observe(leftEdge);
        return () => observer.disconnect();
      }
    }, [stickyColumns, displayRowExpansionColumn, displayRowSelectionColumn, rowsDraggable]);

    // scroll-triggered shadow animation via IntersectionObserver for right sticky column
    // TODO: research ways to implement scroll-driven animation via css and polyfill
    React.useLayoutEffect(() => {
      const table = tableRef.current;
      const rightEdge = rightEdgeRef.current;

      function handleIntersection([entry]: IntersectionObserverEntry[]) {
        if (table) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
            table.setAttribute('data-shadow-right', 'false');
          } else {
            table.setAttribute('data-shadow-right', 'true');
          }
        }
      }

      if (table && rightEdge && showRowsActions) {
        const observer = new IntersectionObserver(handleIntersection, {
          root: table,
          threshold: [0, 1.0],
        });
        observer.observe(rightEdge);
        return () => observer.disconnect();
      }
    }, [showRowsActions]);

    const calcGroupCheckStatus = (groupInfo: GroupInfo) => {
      const indeterminate =
        groupInfo.rows.some((rowId) => rowToGroupMap[rowId]?.checked) &&
        groupInfo.rows.some((rowId) => !rowToGroupMap[rowId]?.checked);
      const checked = groupInfo.rows.every((rowId) => rowToGroupMap[rowId]?.checked);
      return { checked, indeterminate };
    };

    const parentGroupWillBeChecked = (changedDepId: RowId | string) => {
      const groupId = rowToGroupMap[changedDepId]?.groupId;
      const groupInfo = groupId ? groupToRowsMap[groupId] : undefined;

      if (!groupInfo) return;

      const value = groupInfo?.rows.some((rowId) =>
        rowId === changedDepId.toString() ? !rowToGroupMap[rowId]?.checked : rowToGroupMap[rowId]?.checked,
      );
      return { groupId, value };
    };

    const isSelected = (row: { selected?: boolean }) => row.selected;
    // When invoked on an empty array, every() always returns true. So we need to check rowList.length.
    const allRowsChecked = rowList.length > 0 && rowList.every(isSelected);
    const someRowsChecked = rowList.some(isSelected);

    function handleHeaderCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
      const toRemove = rowList.reduce((ids: IdSelectionStatusMap, row) => {
        ids[row.id] = row.checkboxDisabled ? !!row.selected : !someRowsChecked;
        return ids;
      }, {});
      onRowSelectionChange?.(toRemove);
      onHeaderSelectionChange?.(e.target.checked);
    }

    const handleResizeChange = React.useCallback(
      ({ name, width }: { name: string; width: number }) => {
        onColumnResize?.({ name, width: width + 'px' });
      },
      [onColumnResize],
    );

    const handleSort = React.useCallback(
      (name: string, colSort: 'asc' | 'desc' | 'initial') => {
        let newSort: 'asc' | 'desc' | 'initial' = 'initial';
        if (colSort === 'asc') newSort = 'desc';
        if (colSort === 'desc') newSort = 'initial';
        if (colSort === 'initial') newSort = 'asc';

        onSortChange?.({ name, sort: newSort });
      },
      [onSortChange],
    );

    const multipleSort = React.useMemo<boolean>(() => {
      return columnList.filter((col) => !!col.sort).length > 1;
    }, [columnList]);

    const renderHeaderCell = (column: Column, index: number, hidden?: boolean) => (
      <HeaderCellComponent
        key={`head_${column.name}`}
        column={column}
        index={index}
        columnsAmount={columnList.length}
        showDividerForLastColumn={showDividerForLastColumn}
        disableColumnResize={disableColumnResize}
        headerLineClamp={headerLineClamp}
        headerExtraLineClamp={headerExtraLineClamp}
        handleResizeChange={handleResizeChange}
        handleSort={handleSort}
        dimension={dimension}
        spacingBetweenItems={spacingBetweenItems}
        multipleSort={multipleSort}
        columnMinWidth={columnMinWidth}
        hidden={hidden}
      />
    );

    const renderHiddenHeader = () => {
      return (
        <HiddenHeader ref={hiddenHeaderRef}>
          {(displayRowSelectionColumn || displayRowExpansionColumn || rowsDraggable || showRowsActions) && (
            <StickyWrapper>
              {rowsDraggable && <DragCell $dimension={dimension} />}
              {displayRowExpansionColumn && <ExpandCell $dimension={dimension} />}
              {displayRowSelectionColumn && (
                <CheckboxCell $dimension={dimension}>
                  <CheckboxField dimension={checkboxDimension} />
                </CheckboxCell>
              )}
              {showRowsActions && <ActionMock $dimension={dimension} />}
            </StickyWrapper>
          )}
          <HeaderCellsWrapper
            $expansionColumn={displayRowExpansionColumn}
            $selectionColumn={displayRowSelectionColumn}
            $dimension={dimension}
          >
            {stickyColumns.length > 0 &&
              stickyColumns.map((col, index) => renderHeaderCell(col as Column, index, true))}
            {columnList.map((col, index) => (col.sticky ? null : renderHeaderCell(col as Column, index, true)))}
          </HeaderCellsWrapper>
        </HiddenHeader>
      );
    };

    return (
      <TableContainer
        ref={refSetter(ref, tableRef)}
        data-shadow-left={false}
        data-shadow-right={false}
        data-borders={showBorders}
        data-dragging={false}
        {...props}
        className={`table ${props.className || ''}`}
      >
        {renderHiddenHeader()}
        <HeaderWrapper className="thead">
          <Header $dimension={dimension} $greyHeader={greyHeader} ref={headerRef} className="tr">
            {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0 || rowsDraggable) && (
              <>
                <LeftEdge ref={leftEdgeRef} />
                <StickyWrapper ref={stickyColumnsWrapperRef} $greyHeader={greyHeader}>
                  {displayRowSelectionColumn && (
                    <CheckboxCell
                      $dimension={dimension}
                      className="th_checkbox"
                      data-th-column="checkbox"
                      data-draggable={false}
                      data-droppable={false}
                    >
                      <CheckboxField
                        dimension={checkboxDimension}
                        checked={allRowsChecked || someRowsChecked || headerCheckboxChecked}
                        indeterminate={(someRowsChecked && !allRowsChecked) || headerCheckboxIndeterminate}
                        disabled={tableRows.length === 0 || headerCheckboxDisabled}
                        onChange={handleHeaderCheckboxChange}
                      />
                    </CheckboxCell>
                  )}
                </StickyWrapper>
              </>
            )}
            <NormalWrapper ref={normalColumnsWrapperRef}>
              {columnList.map((col, index) => (col.sticky ? null : renderHeaderCell(col as Column, index)))}
            </NormalWrapper>
            <Filler ref={fillerRef} />
            {showRowsActions && (
              <>
                <ActionMock $dimension={dimension} />
                <RightEdge ref={rightEdgeRef} />
              </>
            )}
          </Header>
        </HeaderWrapper>
      </TableContainer>
    );
  },
);

Table.displayName = 'Table';
