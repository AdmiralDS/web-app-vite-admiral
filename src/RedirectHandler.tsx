// src/main.tsx - обработка query параметра
import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';

export function QueryRedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');

    if (redirectPath) {
      // Очищаем URL от query параметра
      window.history.replaceState({}, '', window.location.pathname);

      // Декодируем и выполняем редирект
      const decodedPath = decodeURIComponent(redirectPath);
      const repoName = import.meta.env.BASE_URL.replace(/^\/|\/$/g, '');
      const targetPath = decodedPath.replace(new RegExp(`^/${repoName}`), '');

      navigate({ to: targetPath || '/', replace: true });
    }
  }, [navigate]);

  return null;
}
