import { useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { PaginationOne } from '@admiral-ds/react-ui';

export const PaginationOneWithInput = () => {
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const pageSizes = [10, 25, 50];
  const totalElements = 10000;

  return (
    <ExampleSection
      text={
        <>
          В случаях, когда много страниц, например 100+, можно включать опцию ввода номера нужной страницы в выпадающем
          меню. После открытия меню, поле ввода сразу активно и можно вводить номер. После ввода номера и нажатии
          клавиши Enter происходит закрытие меню и переход на введенную страницу.
          <br />
          <br />
          Происходит валидация — можно вводить только числа. Если введенное число больше максимально возможного
          значения, то загружается последняя страница.
          <br />
          <br />
          Так же возможен стандартный выбор страницы через скролл и клик.
        </>
      }
    >
      <PaginationOne
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        page={page}
        pageSize={pageSize}
        totalItems={totalElements}
        pageSizes={pageSizes}
        data-dropdown-container-id="pagination-with-dropdown"
        data-dropdown-container-test-id="pagination-test-id-with-dropdown"
        className="pagination-class-name"
        pageSizeDropContainerStyle={{
          dropContainerClassName: 'pageSizeDropContainerClass',
        }}
        pageNumberDropContainerStyle={{
          dropContainerClassName: 'pageNumberDropContainerClass',
        }}
        showPageNumberInput
      />
    </ExampleSection>
  );
};
