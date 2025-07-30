import type { ColumnDef } from '@tanstack/react-table';
import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { fakerRU as faker } from '@faker-js/faker';
import { GenericTable, TextCell } from '#examples/-helpers/userTable';
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

const makeItem = (): StoryItem => {
  const sex = faker.person.sexType();
  const lastName = faker.person.lastName(sex);
  const firstName = faker.person.firstName(sex);
  return {
    id: faker.string.uuid(),
    name: lastName + ' ' + firstName,
    veryLongFullName: faker.person.fullName({ firstName, lastName, sex }),
    age: faker.number.int({ min: 18, max: 80 }),
    bio: faker.person.bio(),
  };
};

type StoryItem = {
  id: string;
  name: string;
  bio: string;
  age: number;
  veryLongFullName: string;
};
const columnHelper = createColumnHelper<StoryItem>();

const columns = [
  columnHelper.accessor('veryLongFullName', {
    header: 'Name',
    cell: (props) => <TextCell {...props}>[{props.renderValue()}]</TextCell>,
    meta: { gridColumnTemplate: '100px' },
  }),
  columnHelper.accessor('bio', { header: 'Bio', cell: TextCell, meta: { gridColumnTemplate: '90px' } }),
  columnHelper.accessor('age', { header: 'Age', cell: TextCell, meta: { gridColumnTemplate: '100px' } }),
];

const data: StoryItem[] = makeItems(makeItem, 30);

export const UserTableRenderValue = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Container>
      <GenericTable table={table} />
    </Container>
  );
};
