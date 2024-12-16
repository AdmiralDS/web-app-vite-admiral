import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/general/faqs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/general/faqs"!</div>
}
