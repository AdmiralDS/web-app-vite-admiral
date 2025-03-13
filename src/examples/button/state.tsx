import { Button } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log('clicked');
};

export const ButtonLoader = () => {
  return (
    <>
      <ExampleSection text="Loading">
        <Button dimension="xl" appearance="primary" loading onClick={handleClick}>
          Loading
        </Button>
      </ExampleSection>
      <ExampleSection text="Disable">
        <Button dimension="xl" disabled onClick={handleClick}>
          Disabled
        </Button>
      </ExampleSection>
      <ExampleSection text="Skeleton">
        <Button dimension="xl" skeleton onClick={handleClick}>
          Skeleton
        </Button>
      </ExampleSection>
    </>
  );
};
