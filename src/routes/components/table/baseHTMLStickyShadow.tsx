import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const HtmlTable = styled.table`
  // фиксированный заголовок
  overflow: auto;
  width: 100%;
  display: block;
  margin: 0 auto;

  thead {
    position: sticky;
    top: 0;
  }

  // стили
  white-space: nowrap;
  border-spacing: 0;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};

  th {
    ${(p) => p.theme.typography['Subtitle/Subtitle 3']}
    padding: 10px 12px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }

  td {
    ${(p) => p.theme.typography['Body/Body 2 Short']}
    padding: 12px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
  }

  th,
  td {
    border: 1px solid ${(p) => p.theme.color['Neutral/Neutral 20']};
  }

  // последняя колонка растягивается в ширину при необходимости
  th:last-child {
    width: 100%;
  }

  // 1 колонка невидима
  th:first-child,
  td:first-child {
    visibility: hidden;
    padding: 0;
    width: 0;
  }

  // 2 колонка фиксирована
  th:nth-child(2),
  td:nth-child(2) {
    position: sticky;
    left: 0px;
  }

  &.shadow-visible {
    th:nth-child(2),
    td:nth-child(2) {
      box-shadow: 4px 0 12px ${(p) => p.theme.color['Special/Dark Static Neutral 90']};
    }
  }
`;

const TableBaseHTMLStickyShadow = () => {
  const [cell, setCell] = useState<HTMLTableCellElement | null>(null);
  const [table, setTable] = useState<HTMLTableElement | null>(null);

  useEffect(() => {
    function handleIntersection([entry]: IntersectionObserverEntry[]) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
        table?.classList.toggle('shadow-visible', false);
      } else {
        table?.classList.toggle('shadow-visible', true);
      }
    }

    if (table) {
      const observer = new IntersectionObserver(handleIntersection, {
        root: table,
        threshold: [0, 1.0],
      });

      if (cell) {
        observer.observe(cell);
      }
      return () => observer.disconnect();
    }
  }, [table, cell]);

  return (
    <HtmlTable ref={(node) => setTable(node)} style={{ maxHeight: 500, maxWidth: 980 }}>
      <tbody>
        {Array(20)
          .fill(1)
          .map((_, rowIndex) => (
            <tr key={`row_${rowIndex}`}>
              <td data-observer-intercept />
              {Array(12)
                .fill(1)
                .map((_, colIndex) => (
                  <td key={`cell_${rowIndex}_${colIndex}`}>{`Cell ${rowIndex}_${colIndex + 1}`}</td>
                ))}
            </tr>
          ))}
      </tbody>
      <thead>
        <tr>
          <th data-observer-intercept ref={(node) => setCell(node)} />
          {Array(12)
            .fill(1)
            .map((_, index) => (
              <th key={`header_${index}`}>{`Header ${index + 1}`}</th>
            ))}
        </tr>
      </thead>
    </HtmlTable>
  );
};

export const Route = createFileRoute('/components/table/baseHTMLStickyShadow')({
  component: () => <TableBaseHTMLStickyShadow />,
  staticData: {
    title: 'Table. Базовый HTML table с фиксированными столбцами',
    description: `Пример минимальной стилизации html table с фиксированной столбцами выделенными с помощью тени.`,
  },
});
