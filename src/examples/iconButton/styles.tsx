import { ExampleSection, rowFlexMixin } from '#examples/-helpers';
import { IconButton } from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';

export const Styles = () => {
  return (
    <>
      <ExampleSection cssMixin={rowFlexMixin} text="Primary">
        <IconButton dimension="xl" appearance="primary">
          <StarSolid />
        </IconButton>
        <IconButton dimension="l" appearance="primary">
          <StarSolid />
        </IconButton>
        <IconButton dimension="m" appearance="primary">
          <StarSolid />
        </IconButton>
        <IconButton dimension="s" appearance="primary">
          <StarSolid />
        </IconButton>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Secondary">
        <IconButton dimension="xl" appearance="secondary">
          <StarSolid />
        </IconButton>
        <IconButton dimension="l" appearance="secondary">
          <StarSolid />
        </IconButton>
        <IconButton dimension="m" appearance="secondary">
          <StarSolid />
        </IconButton>
        <IconButton dimension="s" appearance="secondary">
          <StarSolid />
        </IconButton>
      </ExampleSection>
    </>
  );
};
