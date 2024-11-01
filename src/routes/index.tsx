import { createFileRoute, Navigate } from '@tanstack/react-router';

// Redirect from '/' to '/general/resources' route
export const Route = createFileRoute('/')({
  component: () => <Navigate to="/general/resources" />,
});
