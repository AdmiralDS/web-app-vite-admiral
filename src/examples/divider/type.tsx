import { createFileRoute } from '@tanstack/react-router';

import { Divider } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const DividerType = () => {
  return (
    <>
      <ExampleSection text={'Горизонтальный'}>
        <Divider />
      </ExampleSection>
      <ExampleSection text={'Вертикальный'}>
        <Divider orientation="vertical" length="150px" />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/divider/type')({
  component: () => <DividerType />,
  staticData: {
    title: 'Divider. Тип (orientation)',
  },
});
