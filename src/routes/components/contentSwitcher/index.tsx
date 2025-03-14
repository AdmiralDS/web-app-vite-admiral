import { createFileRoute } from '@tanstack/react-router';
import { ContentSwitcherBasic } from '#examples/contentSwitcher';

export const Route = createFileRoute('/components/contentSwitcher/')({
  component: () => <ContentSwitcherBasic />,
  staticData: {
    title: 'ContentSwitcher. Базовый пример',
    description:
      'Является аналогом компонента Tabs, но применяется более локально, являясь нижнеуровневым по отношению к Tabs. Служит для переключения контента на странице.',
  },
});
