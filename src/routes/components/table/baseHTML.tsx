import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

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
  border-spacing: 1px;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};

  thead {
    top: 1px;
  }

  th {
    ${(p) => p.theme.typography['Subtitle/Subtitle 3']}
    padding: 10px 12px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }

  td {
    ${(p) => p.theme.typography['Body/Body 2 Short']}
    padding: 12px;
  }

  th,
  td {
    box-shadow: 0 0 0 1px ${(p) => p.theme.color['Neutral/Neutral 20']};
  }

  // последняя колонка растягивается в ширину при необходимости
  th:last-child {
    width: 100%;
  }

  // 1 колонка фиксирована
  th:first-child,
  td:first-child {
    position: sticky;
    left: 1px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }

  // 10 колонка фиксирована
  th:nth-child(10),
  td:nth-child(10) {
    position: sticky;
    right: 1px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }
`;

const TableBaseHTML = () => {
  return (
    <HtmlTable style={{ maxHeight: 500, maxWidth: 980 }}>
      <tbody>
        {Array(20)
          .fill(1)
          .map((_, rowIndex) => (
            <tr key={`row_${rowIndex}`}>
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

export const Route = createFileRoute('/components/table/baseHTML')({
  component: () => <TableBaseHTML />,
  staticData: {
    title: 'Table. Базовый HTML table',
    description: `Пример минимальной стилизации html table с фиксированной шапкой при вертикальном скроле.`,
  },
});

