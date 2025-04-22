import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, Table } from '@admiral-ds/react-ui';
import type { TableProps } from '@admiral-ds/react-ui';
import { render, fireEvent } from '@testing-library/react';

describe('Table', () => {
  /** Определяем массив строк */
  const rowList = [
    {
      id: '0001',
      transfer_type: 'МНО',
      rate: 5,
    },
    {
      id: '0002',
      transfer_type: 'ПРО',
      rate: 27.2,
    },
  ];
  /** Определяем массив колонок */
  const columnList = [
    {
      name: 'transfer_type',
      title: 'Тип сделки',
    },
    {
      name: 'rate',
      title: 'Ставка',
    },
  ];
  /**
   * Подготавливаем таблицу к тестам, прокидывая в неё тему и
   * массивы данных для колонок и строк
   **/
  const Comp = (props: Omit<TableProps, 'columnList' | 'rowList'>) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <Table {...props} columnList={columnList} rowList={rowList} />
    </ThemeProvider>
  );
  /** Компонент Table использует в своем исходном коде
   * ResizeObserver и IntersectionObserver API, поэтому
   * при создании тестов необходимо создавать mock-имитацию данных API */
  beforeEach(() => {
    Object.defineProperty(global, 'ResizeObserver', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(() => 'Mocking works'),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      })),
    });
    Object.defineProperty(global, 'IntersectionObserver', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(() => 'Mocking works'),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      })),
    });
  });
  /**
   * Используем className th_checkbox для поиска
   * ячейки с чекбоксом в хедере таблицы
   **/
  it('Проверка, что при headerCheckboxChecked равным true, чекбокс в хедере таблицы проставлен', () => {
    const { container } = render(<Comp displayRowSelectionColumn headerCheckboxChecked />);
    const checkboxCell = container.getElementsByClassName('th_checkbox')[0];
    const checkbox = checkboxCell.getElementsByTagName('INPUT')[0];
    expect((checkbox as HTMLInputElement).checked).toEqual(true);
  });
  /**
   * Используем атрибуты data-row и data-column
   * для поиска конкретной ячейки
   **/
  it('Проверка, что при клике на строку срабатывает колбек onRowClick', () => {
    const onClick = jest.fn();
    const { container } = render(<Comp onRowClick={onClick} />);
    const cell = container.querySelector("[data-row='0001'][data-column='rate']");
    if (cell) {
      fireEvent.click(cell);
      expect(onClick).toHaveBeenCalledTimes(1);
    }
  });
});
