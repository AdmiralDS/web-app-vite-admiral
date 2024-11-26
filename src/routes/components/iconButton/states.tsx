import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { IconButton } from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';

export const States = () => {
  return (
    <ExampleSection>
      <IconButton loading>
        <StarSolid />
      </IconButton>
      <IconButton disabled>
        <StarSolid />
      </IconButton>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/iconButton/states')({
  component: () => <States />,
  staticData: {
    title: 'IconButton. Состояния',
    description: '',
  },
});
