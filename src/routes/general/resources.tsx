import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/general/resources')({
  component: () => <div>Hello /resources!</div>,
})
