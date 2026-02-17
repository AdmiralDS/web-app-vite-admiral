import { createFileRoute, Navigate } from '@tanstack/react-router';

const getRedirectPath = () => {
  const redirectPath = sessionStorage.getItem('redirect');

  if (redirectPath) {
    // Очищаем storage
    sessionStorage.removeItem('redirect');

    // Убираем базовый путь из сохраненного URL
    const repoName = import.meta.env.BASE_PATH.replace(/^\/|\/$/g, '');
    const pathWithoutBase = redirectPath.replace(new RegExp(`^/${repoName}`), '');

    // Выполняем навигацию
    return '/' + pathWithoutBase || '/';
  } else {
    return '/general/resources';
  }
};

/**
 * Extracting RouteComponent to fix problems with HMR
 * https://github.com/TanStack/router/issues/1992
 */

// Redirect from '/' to '/general/resources' route
function RouteComponent() {
  return <Navigate to={getRedirectPath()} replace />;
}

export const Route = createFileRoute('/')({
  component: RouteComponent,
});
