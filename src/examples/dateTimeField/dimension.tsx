import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
  ComponentDimension,
} from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const CompoundComponent = ({ dimension }: { dimension?: ComponentDimension }) => {
  return (
    <Field>
      <DateTimeContainer>
        <DateTimeDateInput dimension={dimension} />
        <DateTimeSeparator />
        <DateTimeTimeInput dimension={dimension} />
      </DateTimeContainer>
    </Field>
  );
};

const Example = () => {
  return (
    <>
      <ExampleSection text={'Размер xl'}>
        <CompoundComponent dimension={'xl'} />
      </ExampleSection>
      <ExampleSection text={'Размер m'}>
        <CompoundComponent dimension={'m'} />
      </ExampleSection>
      <ExampleSection text={'Размер s'}>
        <CompoundComponent dimension={'s'} />
      </ExampleSection>
    </>
  );
};

export const DateTimeFieldDimension = () => {
  return <Example />;
};
