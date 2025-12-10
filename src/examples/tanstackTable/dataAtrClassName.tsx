import { useState } from 'react';
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { ListItem, UnorderedList } from '@admiral-ds/react-ui';

import { ExampleSection, PStyled } from '#examples/-helpers';
import { CellText, CellTh, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';
import styled from 'styled-components';

const StyledCellText = styled(CellText)`
  white-space: unset;
`;

interface Docs {
  element: string;
  columnAttr: string;
  rowAttr: string;
}
const docsRows: Docs[] = [
  { element: 'Строка таблицы', columnAttr: '————', rowAttr: `data-row={id строки}` },
  {
    element: 'Ячейка с заголовком столбца в хедере таблицы',
    columnAttr: `data-th-column={name столбца}`,
    rowAttr: '————',
  },
  {
    element: 'Ячейка с данными в теле таблицы',
    columnAttr: `data-column={name столбца}`,
    rowAttr: `data-row={id строки}`,
  },
  {
    element: 'Ячейка с заголовком группы в теле таблицы',
    columnAttr: `data-column="group"`,
    rowAttr: `data-row={id строки}`,
  },
  {
    element: 'Иконка с чекбоксом в теле таблицы в заголовке группы',
    columnAttr: `data-item="checkbox"`,
    rowAttr: `data-row={id строки}`,
  },
  {
    element: 'Иконка стрелки (для раскрытия строки/группы строк) в теле таблицы в заголовке группы',
    columnAttr: `data-item="expand"`,
    rowAttr: `data-row={id строки}`,
  },
];

const columnHelperDocs = createColumnHelper<Docs>();

const columns = [
  columnHelperDocs.accessor('element', {
    header: ({ header }) => (
      <CellTh header={header} dimension="m" showResizer data-testid="test" title="Элемент таблицы" />
    ),
    cell: (info) => <StyledCellText>{info.getValue<string>()}</StyledCellText>,
    size: 250,
  }),
  columnHelperDocs.accessor('columnAttr', {
    header: 'data-атрибут столбца',
    cell: (info) => <StyledCellText>{info.getValue<string>()}</StyledCellText>,
    size: 250,
  }),
  columnHelperDocs.accessor('rowAttr', {
    header: 'data-атрибут строки',
    cell: (info) => <StyledCellText>{info.getValue<string>()}</StyledCellText>,
    size: 250,
  }),
];

export const DataAtrClassNameExample = () => {
  const [data] = useState(() => [...docsRows]);

  const tableDocs = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...defaultOptions,
  });

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            В таблице используются следующие{' '}
            <b>
              <code>classNames</code>
            </b>
          </PStyled>
          <PStyled as="div">
            <UnorderedList dimension="s">
              <ListItem>table - корневой элемент таблицы</ListItem>
              <ListItem>
                thead - хедер таблицы
                <UnorderedList>
                  <ListItem>th - ячейка с заголовком столбца в хедере таблицы</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                tbody - тело таблицы
                <UnorderedList>
                  <ListItem>td - ячейка с данными в теле таблицы</ListItem>
                  <ListItem>item_checkbox - иконка с чекбоксом в теле таблицы в заголовке группы</ListItem>
                  <ListItem>
                    item_expand - иконка с иконкой стрелки (для раскрытия строки/группы строк) в теле таблицы в
                    заголовке группы
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>tr - строка таблицы</ListItem>
            </UnorderedList>
          </PStyled>
          <PStyled>
            В основном дополнительными элементами, такими как чекбоксы или стрелки, пользователь сам управляет, но в
            теле таблицы при группировке строк появляются дополнительные элементы в ячейке с заголовком группы
          </PStyled>
          <PStyled>
            Также у элементов в таблице есть специальные{' '}
            <b>
              <code>data-атрибуты</code>
            </b>
            , которые описывают принадлежность элемента к определенным столбцу и строке. Ниже приведено подробное
            описание:
          </PStyled>
        </>
      }
    >
      <TanstackTable table={tableDocs} dimension="s" showBorders />
    </ExampleSection>
  );
};
