import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/resources')({
  component: () => <div>Hello /resources!</div>,
});
