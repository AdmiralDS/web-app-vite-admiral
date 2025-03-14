import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const CompoundComponent = ({ extraText }: { extraText?: string }) => {
  return (
    <Field extraText={extraText}>
      <DateTimeContainer>
        <DateTimeDateInput />
        <DateTimeSeparator />
        <DateTimeTimeInput />
      </DateTimeContainer>
    </Field>
  );
};

const Example = () => {
  return (
    <>
      <ExampleSection>
        <CompoundComponent extraText={'Дополнительный текст'} />
      </ExampleSection>
    </>
  );
};

export const DateTimeFieldExtraText = () => {
  return <Example />;
};
