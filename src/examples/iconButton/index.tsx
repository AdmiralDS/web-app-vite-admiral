import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { IconButton } from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';

export const Base = () => {
  return (
    <ExampleSection>
      <IconButton>
        <StarSolid />
      </IconButton>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/iconButton/')({
  component: () => <Base />,
  staticData: {
    title: 'IconButton. Базовый пример',
    description: '',
  },
});
