import { createFileRoute } from '@tanstack/react-router';
import { SegmentedControlRadioButtonMode } from '#examples/segmentedControl/radioButtonMode';

export const Route = createFileRoute('/components/segmentedControl/radioButtonMode')({
  component: () => <SegmentedControlRadioButtonMode />,
  staticData: {
    title: 'SegmentedControl. Режим radio button',
    description: (
      <>
        Особенности
        <li>По дефолту компонент может иметь все выключенные секции или одну включенную</li>
        <li>Опционально можно установить параметр, когда одна из секций должна быть обязательно включена</li>
        <li>
          Активной может быть только одна секция. Если, при включенной секции, нажать на другую, то первая активная
          принимает состояние Default
        </li>
        <li>Минимальное количество секций в компоненте — две</li>
        <li>Не рекомендуется делать большое количество секций, для этого используйте компонент Tab Menu</li>
      </>
    ),
  },
});
