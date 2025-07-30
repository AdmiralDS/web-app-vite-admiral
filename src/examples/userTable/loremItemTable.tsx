import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { fakerRU as faker } from '@faker-js/faker';
import { GenericTable } from '#examples/-helpers/userTable';
import { T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column;

  overflow: hidden;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  width: 800px;
  height: 600px;
`;

export function makeItems<T>(generator: () => T, count: number): T[] {
  faker.seed(0);
  return faker.helpers.multiple(generator, { count });
}

type LoremItem = { lorem: string; ipsum?: string; dolor?: string };
const loremColumnHelper = createColumnHelper<LoremItem>();

const columns = [
  loremColumnHelper.accessor('lorem', {
    header: 'Lorem ipsum dolor sit amet Lorem',
    cell: (props) => (
      <div>
        <textarea>dqwdq</textarea>
        <T font={'Body/Body 2 Long'} style={{ padding: '6px 12px', flex: 1 }}>
          {props.renderValue()}
        </T>
      </div>
    ),
  }),
  loremColumnHelper.accessor('ipsum', {
    header: 'Lorem ipsum dolor sit amet Lorem sit',
    cell: (props) => (
      <T font={'Body/Body 2 Long'} style={{ padding: '6px 12px', flex: 1 }}>
        {props.renderValue()}
      </T>
    ),
  }),
  loremColumnHelper.accessor('dolor', {
    header: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    cell: (props) => (
      <T font={'Body/Body 2 Long'} style={{ padding: '6px 12px', flex: 1 }}>
        {props.renderValue()}
      </T>
    ),
  }),
];
const data: LoremItem[] = makeItems(
  () => ({
    lorem: faker.lorem.sentence({ min: 2, max: 20 }),
    ipsum: faker.helpers.maybe(() => faker.lorem.sentence({ min: 1, max: 15 }), { probability: 0.7 }),
    dolor: faker.helpers.maybe(() => faker.lorem.sentence({ min: 1, max: 10 }), { probability: 0.3 }),
  }),
  100,
);

export const UserTableLoremItem = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Container>
      <GenericTable table={table} estimatedRowHeightPx={120} />
    </Container>
  );
};
