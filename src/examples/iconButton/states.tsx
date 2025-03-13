import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { IconButton } from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';

export const States = () => {
  return (
    <>
      <ExampleSection text="Loading">
        <IconButton loading>
          <StarSolid />
        </IconButton>
      </ExampleSection>
      <ExampleSection text="Disabled">
        <IconButton disabled>
          <StarSolid />
        </IconButton>
      </ExampleSection>
      <ExampleSection text="Skeleton">
        <IconButton skeleton>
          <StarSolid />
        </IconButton>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/iconButton/states')({
  component: () => <States />,
  staticData: {
    title: 'IconButton. Состояния',
  },
});
