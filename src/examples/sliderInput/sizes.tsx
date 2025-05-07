import { ExampleSection } from '#examples/-helpers';
import { SliderInput } from '@admiral-ds/react-ui';

export const SliderInputSizes = () => {
  return (
    <>
      <ExampleSection text="Размер XL">
        <SliderInput
          defaultValue="5"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          dimension="xl"
        />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <SliderInput
          defaultValue="5"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          dimension="m"
        />
      </ExampleSection>
      <ExampleSection text="Размер S">
        <SliderInput
          defaultValue="5"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          dimension="s"
        />
      </ExampleSection>
    </>
  );
};
