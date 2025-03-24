import { createFileRoute } from '@tanstack/react-router';
import { GroupActionsPaneBasic } from '#examples/groupActionsPane';

export const Route = createFileRoute('/components/groupActionsPane/')({
  component: () => <GroupActionsPaneBasic />,
  staticData: {
    title: 'GroupActionsPane. Базовый пример',
    description: '',
  },
});
