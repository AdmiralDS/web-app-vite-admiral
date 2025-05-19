import { createFileRoute } from '@tanstack/react-router'
import { TimeInputState } from '#examples/timeInput/state'

export const Route = createFileRoute('/components/timeInput/state')({
  component: () => <TimeInputState />,
  staticData: {
    title: 'TimeInput. Состояния',
  },
})
