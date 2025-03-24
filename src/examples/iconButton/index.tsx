import { ExampleSection } from '#examples/-helpers';
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
