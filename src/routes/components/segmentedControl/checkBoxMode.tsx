import { createFileRoute } from '@tanstack/react-router';
import { SegmentedControlCheckboxMode } from '#examples/segmentedControl/checkBoxMode';

export const Route = createFileRoute('/components/segmentedControl/checkBoxMode')({
  component: () => <SegmentedControlCheckboxMode />,
  staticData: {
    title: 'SegmentedControl. Режим checkbox',
    description: (
      <>
        Особенности
        <li>Активными могут быть как одна, так и все секции</li>
        <li>Активные секции можно отключать повторным нажатием</li>
        <li>Минимальное количество секций в компоненте — две</li>
        <li>Не рекомендуется делать большое количество секций, для этого используйте компонент Tab Menu</li>
      </>
    ),
  },
});
