import { createFileRoute } from '@tanstack/react-router'
import { MultiInputWithOptionsExample } from '#examples/multiInput/withOptions'

export const Route = createFileRoute('/components/multiInput/withOptions')({
  component: () => <MultiInputWithOptionsExample />,
  staticData: {
    title: 'MultiInput. С начальными опциями',
  },
})
