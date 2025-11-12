import * as React from 'react';

import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';
import { ExampleSection } from '#examples/-helpers';
import styled from 'styled-components';

const StyledCellText = styled(CellText)`
  white-space: unset;
`;

const makeColumns = () =>
  [...Array(2)].map((_, i) => {
    return {
      accessorKey: i.toString(),
      header: i === 0 ? 'Random text' : 'Row index',
      cell: (info: any) => <StyledCellText>{info.renderValue()}</StyledCellText>,
      size: 300,
    };
  });

const base = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Magna fringilla 
urna porttitor rhoncus dolor purus non enim. Mattis rhoncus urna neque viverra. Tortor posuere ac ut consequat semper. 
Integer quis auctor elit sed vulputate mi sit. In hac habitasse platea dictumst quisque sagittis purus sit. Enim 
blandit volutpat maecenas volutpat. Lacus laoreet non curabitur gravida arcu.`;

function randomIntFromInterval(min: number = 10, max: number = base.length) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomText(index: number) {
  const int = index % 5 ? randomIntFromInterval(1, 4) : randomIntFromInterval();
  return base.slice(0, int);
}

const makeData = () =>
  [...Array(1000)].map((_, index) => ({
    ...Object.fromEntries(
      makeColumns().map((col, id) =>
        id === 0 ? [col.accessorKey, getRandomText(index)] : [col.accessorKey, `${index}`],
      ),
    ),
  }));

export const DynamicVirtualScroll = () => {
  const [data, _setData] = React.useState(() => makeData());
  const table = useReactTable({
    data,
    columns: makeColumns(),
    getCoreRowModel: getCoreRowModel(),
    ...defaultOptions,
  });

  return (
    <ExampleSection>
      <TanstackTable
        table={table}
        style={{ height: '500px' }}
        virtualScroll={{ vertical: true, estimatedRowHeight: 60 }}
        showLastRowUnderline={false}
      />
    </ExampleSection>
  );
};
