import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/button/')({
  component: () => <div>Hello /components/button/!</div>,
})
