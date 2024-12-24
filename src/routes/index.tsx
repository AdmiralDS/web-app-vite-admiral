import { createFileRoute, Navigate } from '@tanstack/react-router';

/**
 * Extracting RouteComponent to fix problems with HMR
 * https://github.com/TanStack/router/issues/1992
 */

// Redirect from '/' to '/general/resources' route
function RouteComponent() {
  return <Navigate to="/general/resources" replace />;
}

export const Route = createFileRoute('/')({
  component: RouteComponent,
});
