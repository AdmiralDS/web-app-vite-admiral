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
type StoryItem = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  bio: string;
  company: string;
  jobTitle: string;
  jobDescriptor: string;
};

const makeItem = (): StoryItem => {
  const sex = faker.person.sexType();
  const lastName = faker.person.lastName(sex);
  const firstName = faker.person.firstName(sex);
  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    age: faker.number.int({ min: 18, max: 80 }),
    bio: faker.person.bio(),
    company: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    jobDescriptor: faker.person.jobDescriptor(),
  };
};
const columnHelper = createColumnHelper<StoryItem>();

const columns = [
  columnHelper.group({
    header: 'Name',
    columns: [
      columnHelper.accessor('firstName', { header: 'First Name', cell: TextCell }),
      columnHelper.accessor('lastName', { header: 'Last Name', cell: TextCell }),
    ],
  }),
  columnHelper.group({
    header: 'Job',
    columns: [
      columnHelper.accessor('company', { header: 'Company', cell: TextCell }),
      columnHelper.group({
        header: 'Position',
        columns: [
          columnHelper.accessor('jobTitle', {
            header: 'Job Title',
            cell: TextCell,
            meta: { gridColumnTemplate: '1.5fr' },
          }),
          columnHelper.accessor('jobDescriptor', {
            header: 'Job Descriptor',
            cell: TextCell,
            meta: { gridColumnTemplate: '1fr' },
          }),
        ],
      }),
    ],
  }),
  columnHelper.accessor('age', { header: 'Age', cell: TextCell, meta: { gridColumnTemplate: '70px' } }),
] satisfies ColumnDef<StoryItem, never>[];
const data: StoryItem[] = makeItems(makeItem, 10);

export const UserTableColumnGroup = () => {
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
