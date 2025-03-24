import { ExampleSection } from '#examples/-helpers';
import { Spinner } from '@admiral-ds/react-ui';

export const SpinnerSizes = () => {
  return (
    <>
      <ExampleSection text="Размер S">
        <Spinner dimension="s" />
      </ExampleSection>
      <ExampleSection text="Размер MS">
        <Spinner dimension="ms" />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <Spinner dimension="m" />
      </ExampleSection>
      <ExampleSection text="Размер L">
        <Spinner dimension="l" />
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <Spinner dimension="xl" />
      </ExampleSection>
    </>
  );
};
