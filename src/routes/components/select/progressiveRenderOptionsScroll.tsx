import { createFileRoute } from '@tanstack/react-router';
import { SelectProgressiveRenderOptionsScroll } from '#examples/select/progressiveRenderOptionsScroll';

export const Route = createFileRoute('/components/select/progressiveRenderOptionsScroll')({
  component: () => <SelectProgressiveRenderOptionsScroll />,
  staticData: {
    title: 'Подгрузка данных при scroll',
  },
});
