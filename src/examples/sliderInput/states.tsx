import { ExampleSection } from '#examples/-helpers';
import { SliderInput } from '@admiral-ds/react-ui';

export const SliderInputState = () => {
  return (
    <>
      <ExampleSection text="Disabled">
        <SliderInput
          defaultValue="5"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          disabled
        />
      </ExampleSection>
      <ExampleSection text="Read Only">
        <SliderInput
          defaultValue="5"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          readOnly
        />
      </ExampleSection>
      <ExampleSection text="Skeleton">
        <SliderInput
          defaultValue="5"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          skeleton
        />
      </ExampleSection>
      <ExampleSection text="Disable copying">
        <SliderInput
          defaultValue="5"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          disableCopying
        />
      </ExampleSection>
    </>
  );
};
