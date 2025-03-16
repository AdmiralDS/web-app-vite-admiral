import { createFileRoute } from '@tanstack/react-router';
import { InputExPrefixSuffixSelect } from '#examples/inputEx/prefixSuffixSelect';

export const Route = createFileRoute('/components/inputEx/prefixSuffixSelect')({
  component: () => <InputExPrefixSuffixSelect />,
  staticData: {
    title: 'InputEx. C выбором префикса и суффикса',
  },
});
