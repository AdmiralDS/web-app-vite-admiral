import { createFileRoute } from '@tanstack/react-router';
import { HintAnchorCssMixin } from '#examples/hint/anchorCssMixin';

export const Route = createFileRoute('/components/hint/anchorCssMixin')({
  component: () => <HintAnchorCssMixin />,
  staticData: {
    title: 'Hint. Стилизация внешнего контейнера (AnchorWrapper) с помощью anchorCssMixin',
    description: '',
  },
});
