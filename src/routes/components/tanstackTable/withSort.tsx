import { createFileRoute } from '@tanstack/react-router'
import { WithSort } from '#examples/tanstackTable'

export const Route = createFileRoute('/components/tanstackTable/withSort')({
  component: () => <WithSort />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с сортировкой`,
  },
})
