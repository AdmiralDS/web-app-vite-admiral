import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const CompoundComponent = ({ displayInline, label }: { displayInline?: boolean; label: string }) => {
  return (
    <Field displayInline={displayInline} label={label}>
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
        <CompoundComponent displayInline label={'Введите дату'} />
      </ExampleSection>
    </>
  );
};

export const DateTimeFieldDisplayLine = () => {
  return <Example />;
};
