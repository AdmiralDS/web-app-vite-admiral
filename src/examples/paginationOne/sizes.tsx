import { useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { PaginationOne } from '@admiral-ds/react-ui';

export const PaginationOneSizes = () => {
  const [pageSize1, setPageSize1] = useState(8);
  const [page1, setPage1] = useState(1);
  const [pageSize2, setPageSize2] = useState(8);
  const [page2, setPage2] = useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 100;

  return (
    <>
      <ExampleSection text="Size M">
        <PaginationOne
          dimension="m"
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
        />
      </ExampleSection>
      <ExampleSection text="Size S">
        <PaginationOne
          dimension="s"
          style={{ width: 'fit-content' }}
          onChange={({ page, pageSize }) => {
            setPage2(page);
            setPageSize2(pageSize);
          }}
          page={page2}
          pageSize={pageSize2}
          totalItems={totalElements}
          pageSizes={pageSizes}
        />
      </ExampleSection>
    </>
  );
};
