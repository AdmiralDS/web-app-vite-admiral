import { useState, useRef, useMemo } from 'react';
import { Table, PaginationTwo } from '@admiral-ds/react-ui';
import type { Column, TableRow } from '@admiral-ds/react-ui';
import { ExampleSection, PStyled } from '#examples/-helpers';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  gap: 20px;
`;

/** Определяем массив колонок */
const columnList: Column[] = [
  {
    name: 'transfer_number',
    title: 'Номер сделки',
    width: '33%',
  },
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: '33%',
  },
  {
    name: 'transfer_amount',
    title: 'Сумма, ₽',
    width: '33%',
  },
];

export const TableScrollPositionByRef = () => {
  /** Номер текущей страницы */
  const [page, setPage] = useState(1);
  /** Номер строки, с которой начинается страница */
  const [pageFirstRow, setPageFirstRow] = useState(1);

  const tableRef = useRef<HTMLDivElement | null>(null);

  /** Массив строк, по 20 строк на страницу */
  const rows: TableRow[] = useMemo(
    () =>
      [...Array(20)]
        .map((_, i) => i + pageFirstRow)
        .map((item) => ({
          id: `${item}`,
          transfer_number: item,
          transfer_type: 'МНО',
          transfer_amount: `${item}0000`,
        })),
    [pageFirstRow],
  );

  /** Управление позицией скролла через ref */
  const resetScrollPosition = () => {
    tableRef.current?.scrollTo({ top: 0 });
  };

  const handlePageChange = (_: any, page: number) => {
    setPage(page);
    setPageFirstRow(page == 1 ? 1 : 21);
    resetScrollPosition();
  };

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            С помощью атрибута ref пользователь может управлять позицией скролла в таблице. В данном примере при смене
            страниц через пагинацию происходит сброс позиции скролла в таблице.
          </PStyled>
          <PStyled>
            Начиная с версии 8.30.0 зона скролла распространяется на всю таблицу, включая зону заголовков (т.е.
            скроллируемым является верхнеуровневый элемент с className='table'). В предыдущих версия зона скролла
            распространялась только на тело таблицы (т.е. скроллируемым было только тело таблицы - элемент с
            className='tbody').
          </PStyled>
        </>
      }
    >
      <Wrapper>
        <Table
          ref={tableRef}
          rowList={rows}
          columnList={columnList}
          disableColumnResize
          style={{ height: '300px', width: '450px' }}
        />
        <PaginationTwo count={2} page={page} onChange={handlePageChange} dimension="s" />
      </Wrapper>
    </ExampleSection>
  );
};
