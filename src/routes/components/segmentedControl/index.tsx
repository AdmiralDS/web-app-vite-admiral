import { createFileRoute } from '@tanstack/react-router';
import { SegmentedControlBasic } from '#examples/segmentedControl';

export const Route = createFileRoute('/components/segmentedControl/')({
  component: () => <SegmentedControlBasic />,
  staticData: {
    title: 'SegmentedControl. Базовый пример',
    description:
      'Segmented Control — компонент для переключения контента, параметров или выбора свойств. Является самым низкоуровневым по отношению к Tab Menu, Content Switcher и Card Tabs. Аналог Сhoice Chips. Состоит из обычных кнопок',
  },
});
