import { createFileRoute } from '@tanstack/react-router';
import { LinkCssMixin } from '#examples/link/cssMixin';

export const Route = createFileRoute('/components/link/cssMixin')({
  component: () => <LinkCssMixin />,
  staticData: {
    title: 'Link. Css Mixin',
    description:
      'Помимо компонента Link библиотека предоставляет LinkComponentCssMixin - миксин, включающий в себя все стили компонента Link согласно дизайну Admiral 2.1. Данный миксин целесообразно применять, если пользователь хочет использовать свой собственный компонент, стилизованный согласно дизайну Admiral 2.1.',
  },
});
