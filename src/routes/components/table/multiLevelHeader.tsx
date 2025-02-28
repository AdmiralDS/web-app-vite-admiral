import { Checkbox, GroupActionsPane, PaneMenuProps, PaneSeparator, T, TextButton } from '@admiral-ds/react-ui';
import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import MoreHorizontalOutline from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg?react';
import ArrowDownOutline from '@admiral-ds/icons/build/system/ArrowDownOutline.svg?react';
import GovernmentOutline from '@admiral-ds/icons/build/category/GovernmentOutline.svg?react';
import TelegrammOutline from '@admiral-ds/icons/build/communication/TelegrammOutline.svg?react';
import AlertOutline from '@admiral-ds/icons/build/category/AlertOutline.svg?react';
import CardSolid from '@admiral-ds/icons/build/finance/CardSolid.svg?react';

const HtmlTable = styled.table`
  overflow: auto;
  width: 100%;
  display: block;
  margin: 0 auto;
  white-space: nowrap;
  border-spacing: 0px;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};

  table {
    border-collapse: collapse;
  }

  // фиксируем заголовок при вертикальном скролле
  thead {
    position: sticky;
    top: 1px;
  }

  tr:has(input[type='checkbox']:checked) td {
    background-color: ${(p) => p.theme.color['Primary/Primary 20']};
  }

  tr:hover td {
    background-color: ${(p) => p.theme.color['Primary/Primary 10']};
  }

  td {
    background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
  }

  th {
    ${(p) => p.theme.typography['Subtitle/Subtitle 3']}
    padding: 10px 12px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 05']};
    text-align: left;
    vertical-align: top;
  }

  td {
    ${(p) => p.theme.typography['Body/Body 2 Short']}
    padding: 12px;
  }

  th,
  td {
    border-bottom: 1px solid ${(p) => p.theme.color['Neutral/Neutral 20']};
    border-right: 1px solid ${(p) => p.theme.color['Neutral/Neutral 20']};
  }

  // последняя колонка растягивается в ширину при необходимости
  th:last-child {
    width: 100%;
    border-right: none;
  }

  td:last-child {
    border-right: none;
  }

  tr:last-of-type td {
    border-bottom: none;
  }

  // 1 колонка header'a фиксирована при горизонтальном скролле
  th:first-child {
    position: sticky;
    left: 1px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 05']};
    width: 80px;
  }

  // 1 колонка фиксирована при горизонтальном скролле
  td:first-child {
    position: sticky;
    left: 1px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 58px;
`;

const Container = styled.div`
  display: flex;
  color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
`;

const headerModel = [
  [
    { rowSpan: 2, children: <Checkbox /> },
    { rowSpan: 2, children: <T font="Subtitle/Subtitle 3">Long column name two lines</T> },
    { colSpan: 2, children: <T font="Subtitle/Subtitle 3">Column title</T> },
    { colSpan: 2, children: <T font="Subtitle/Subtitle 3">Column title</T> },
  ],
  [
    {
      children: (
        <Wrapper>
          <T font="Subtitle/Subtitle 3">Column title11</T>
          <MoreHorizontalOutline width={16} />
        </Wrapper>
      ),
    },
    { children: <T font="Subtitle/Subtitle 3">Column title</T> },
    {
      children: (
        <Wrapper>
          <Container>
            <T font="Subtitle/Subtitle 3">Column title11</T>
            <ArrowDownOutline width={16} color="#0062FF" />
          </Container>
          <MoreHorizontalOutline width={16} />
        </Wrapper>
      ),
    },
    { children: <T font="Subtitle/Subtitle 3">Column title</T> },
  ],
] satisfies React.ComponentProps<'th'>[][];

const renderSettingsMenu = ({ closeMenu }: PaneMenuProps) => <></>;

const TableBaseHTML = () => {
  return (
    <TableWrapper>
      <GroupActionsPane renderSettingsMenu={renderSettingsMenu}>
        <TextButton text={'Action 1'} iconStart={<GovernmentOutline />} />
        <TextButton text={'Action 2'} iconStart={<TelegrammOutline />} />
        <TextButton text={'Action 3'} iconStart={<AlertOutline />} />
        <PaneSeparator />
        <TextButton text={'Action 4'} iconStart={<CardSolid />} />
      </GroupActionsPane>
      <HtmlTable style={{ maxHeight: 500, maxWidth: 980 }}>
        <tbody>
          {Array(4)
            .fill(1)
            .map((_, rowIndex) => (
              <tr key={`row_${rowIndex}`}>
                {Array(6)
                  .fill(1)
                  .map((_, colIndex) => {
                    if (colIndex + 1 === 1) {
                      return (
                        <td key={`cell_${rowIndex}_${colIndex}`}>
                          <Checkbox />
                        </td>
                      );
                    }
                    return <td key={`cell_${rowIndex}_${colIndex}`}>{`Cell ${rowIndex}_${colIndex + 1}`}</td>;
                  })}
              </tr>
            ))}
        </tbody>
        <thead>
          {headerModel.map((row, rowIndex) => (
            <tr key={`row_${rowIndex}`}>
              {row.map((cell, colIndex) => (
                <th key={`thcell_${rowIndex}_${colIndex}`} {...cell} />
              ))}
            </tr>
          ))}
        </thead>
      </HtmlTable>
    </TableWrapper>
  );
};

export const Route = createFileRoute('/components/table/multiLevelHeader')({
  component: () => <TableBaseHTML />,
  staticData: {
    title: 'Table. Multi-Level Header',
    description:
      'В случаях сложной иерархии в заголовках таблицы, можно применять многоуровневую структуру Multi-Level Header.',
  },
});
