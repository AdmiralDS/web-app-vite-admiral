import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/button/example2')({
  component: () => <div>Hello /components/button/example2!</div>,
})
