import { createFileRoute } from '@tanstack/react-router';
import { HintSizes } from '#examples/hint/sizes';

export const Route = createFileRoute('/components/hint/sizes')({
  component: () => <HintSizes />,
  staticData: {
    title: 'Hint. Размеры',
    description:
      'Для удобства компонент имеет три фиксированных по ширине размера: 280px, 384px и 488px. Которые используются в зависимости от предполагаемого объема текста. Вы также можете задавать свою ширину вручную, в случаях, когда это необходимо. Высота компонента устанавливается автоматически при редактировании. На экранах мобильных устройств, меньше 640px, компонент адаптируется по ширине к рабочей области устройства. Высота компонента настраивается автоматически при задании контента. Максимальная высота компонента – 320px, после чего у контента появляется вертикальный скролл.',
  },
});
