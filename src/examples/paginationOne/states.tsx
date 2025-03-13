import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { PaginationOne } from '@admiral-ds/react-ui';

export const Template = () => {
  const [pageSize1, setPageSize1] = useState(8);
  const [page1, setPage1] = useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 100;

  return (
    <>
      <ExampleSection text="В типе Complex есть возможность блокировать выбор количества записей на странице и/или выбор страницы, в этом случае навигация происходит кнопками.">
        <PaginationOne
          style={{ width: 'fit-content' }}
          onChange={({ page, pageSize }) => {
            setPage1(page);
            setPageSize1(pageSize);
          }}
          page={page1}
          pageSize={pageSize1}
          totalItems={totalElements}
          pageSizes={pageSizes}
          pageSizeDropContainerStyle={{
            dropContainerClassName: 'pageSizeDropContainerClass',
          }}
          pageNumberDropContainerStyle={{
            dropContainerClassName: 'pageNumberDropContainerClass',
          }}
          pageSelectDisabled
          pageSizeSelectDisabled
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/paginationOne/states')({
  component: () => <Template />,
  staticData: {
    title: 'PaginationOne. Состояния',
    description: '',
  },
});
