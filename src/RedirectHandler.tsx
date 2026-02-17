// src/main.tsx - обработка query параметра
import { useEffect } from 'react';
import { useNavigate, redirect } from '@tanstack/react-router';

export function QueryRedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    // Проверяем, есть ли сохраненный путь для редиректа
    const redirectPath = sessionStorage.getItem('redirect');

    if (redirectPath) {
      // Очищаем storage
      sessionStorage.removeItem('redirect');

      // Убираем базовый путь из сохраненного URL
      const repoName = import.meta.env.BASE_PATH.replace(/^\/|\/$/g, '');
      const pathWithoutBase = redirectPath.replace(new RegExp(`^/${repoName}`), '');

      console.log('Redirecting to:', '/' + pathWithoutBase || '/');

      // Выполняем навигацию
      navigate({
        to: '/' + pathWithoutBase || '/',
        replace: true, // replace, чтобы не создавать лишнюю запись в истории
      });
    }
  }, [navigate]);

  return null;
}
