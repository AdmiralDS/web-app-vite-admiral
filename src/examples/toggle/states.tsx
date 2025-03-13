import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Toggle } from '@admiral-ds/react-ui';

const States = () => {
  return (
    <>
      <ExampleSection text="Active">
        <Toggle checked onChange={() => undefined}>
          Text
        </Toggle>
      </ExampleSection>
      <ExampleSection text="Not active">
        <Toggle checked={false} onChange={() => undefined}>
          Text
        </Toggle>
      </ExampleSection>
      <ExampleSection text="Active readonly">
        <Toggle checked readOnly onChange={() => undefined}>
          Text
        </Toggle>
      </ExampleSection>
      <ExampleSection text="Not active readonly">
        <Toggle checked={false} readOnly onChange={() => undefined}>
          Text
        </Toggle>
      </ExampleSection>
      <ExampleSection text="Active disabled">
        <Toggle checked disabled onChange={() => undefined}>
          Text
        </Toggle>
      </ExampleSection>
      <ExampleSection text="Not active disabled">
        <Toggle checked={false} disabled onChange={() => undefined}>
          Text
        </Toggle>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/toggle/states')({
  component: () => <States />,
  staticData: {
    title: 'Toggle. Состояния',
    description: '',
  },
});
