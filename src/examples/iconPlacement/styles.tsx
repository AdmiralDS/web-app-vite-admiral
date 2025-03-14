import { ExampleSection } from '#routes/-helpers/examples';
import { IconPlacement } from '@admiral-ds/react-ui';
import CloseOutline from '@admiral-ds/icons/build/service/CloseOutline.svg?react';

// eslint-disable-next-line no-console
const handleClick = () => console.log('IconPlacement clicked');

export const IconPlacementStyles = () => {
  return (
    <>
      <ExampleSection text="Primary">
        <IconPlacement onClick={handleClick} appearance={'primary'}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
      <ExampleSection text="Secondary">
        <IconPlacement onClick={handleClick} appearance={'secondary'}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
      <ExampleSection text="Custom icon color">
        <IconPlacement onClick={handleClick} appearance={{ iconColor: '#E052BD' }}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
    </>
  );
};
