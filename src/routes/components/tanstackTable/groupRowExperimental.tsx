GroupRowExperimentalExample;

import { createFileRoute } from '@tanstack/react-router';
import { GroupRowExperimentalExample } from '#examples/tanstackTable/groupRowExperimantal';

export const Route = createFileRoute('/components/tanstackTable/groupRowExperimental')({
  component: () => <GroupRowExperimentalExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с группировкой строк с чекбоксами.`,
  },
});
