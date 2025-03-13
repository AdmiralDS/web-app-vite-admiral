import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { PaginationOne } from '@admiral-ds/react-ui';

export const Template = () => {
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 100;

  return (
    <ExampleSection
      text={
        <>
          Компонент может изменяться по ширине, минимальный размер 696 px. При изменении ширины увеличивается расстояние
          между блоками «Записи» и «Страницы». Компонент не меняет размер при изменении количества записей и страниц, но
          поля выбора динамические и меняют размер в зависимости от количества знаков в них.
          <br />
          <br />
          Активные зоны селектов изменяются в зависимости от количества знаков. Выбор страниц и количества записей
          происходит по принципу компонента Select. Минимальная ширина выпадающих списков – 68 px, максимальная –
          подстраивается под максимальное количество знаков в строках.
          <br />
          <br />
          Также помимо свойств background и border пользователь может задать свойство backgroundHover. Данное свойство
          отвечает за цвет фона тега при ховере, в случае если тэг является активным. Рекомендуется в качестве значения
          backgroundHover выбирать из палитры цветов цвет, который на 1 шаг темнее цвета фона.
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
        pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
        pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/paginationOne/')({
  component: () => <Template />,
  staticData: {
    title: 'PaginationOne. Базовый пример',
    description: 'Используется для навигации по длинным спискам, где информация разбивается на страницы.',
  },
});
