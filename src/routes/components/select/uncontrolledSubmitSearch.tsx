import { createFileRoute } from '@tanstack/react-router';
import { SelectUncontrolledSubmitSearch } from '#examples/select/uncontrolledSubmitSearch';

export const Route = createFileRoute('/components/select/uncontrolledSubmitSearch')({
  component: () => <SelectUncontrolledSubmitSearch />,
  staticData: {
    title: 'mode = "searchSelect". Неконтролируемый сабмит',
  },
});
