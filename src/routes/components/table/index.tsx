import { createFileRoute } from '@tanstack/react-router';
import { TableBasic } from '#examples/table';

export const Route = createFileRoute('/components/table/')({
  component: () => <TableBasic />,
  staticData: {
    title: 'Table. Базовый пример',
    description: `Таблицы представляют собой набор данных, представленных в виде строк и колонок. 
    Состоят из двух основных компонентов - шапки таблицы и строки данных.`,
  },
});
