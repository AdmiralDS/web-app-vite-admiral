import { createFileRoute } from '@tanstack/react-router'

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
  InputStatus,
} from '@admiral-ds/react-ui'
import type { DateInputProps } from '@admiral-ds/react-ui'
import type { TimeInputProps } from '@admiral-ds/react-ui'
import { ExampleSection } from '../../-helpers/examples'

const CompoundComponent = ({
  disabled,
  readOnly,
  status,
  defaultDateValue,
  defaultTimeValue
}: {
  disabled?: boolean, 
  readOnly?: boolean, 
  status?: InputStatus,
  defaultDateValue?: DateInputProps['defaultValue'],
  defaultTimeValue?: TimeInputProps['defaultValue']
}) => {
  return (
    <Field>
      <DateTimeContainer>
        <DateTimeDateInput 
          status={status} 
          disabled={disabled} 
          readOnly={readOnly} 
          defaultValue={defaultDateValue}
          />
        <DateTimeSeparator />
        <DateTimeTimeInput 
          status={status} 
          disabled={disabled} 
          readOnly={readOnly} 
          defaultValue={defaultTimeValue}
          />
      </DateTimeContainer>
    </Field>
  )
}

const Example = () => {
  return (
    <>
      <ExampleSection text={'Состояние disabled'}>
        <CompoundComponent disabled />
      </ExampleSection>
      <ExampleSection text={'Состояние readOnly'}>
        <CompoundComponent readOnly defaultDateValue="12.10.2022" defaultTimeValue="12:10" />
      </ExampleSection>
      <ExampleSection text={'Статус success'}>
        <CompoundComponent status='success' />
      </ExampleSection>
      <ExampleSection text={'Статус error'}>
        <CompoundComponent status='error' />
      </ExampleSection>
    </>
  )
}

export const DateTimeFieldStatus = () => {
  return <Example />
}

export const Route = createFileRoute('/components/dateTimeField/status')({
  component: () => <DateTimeFieldStatus />,
  staticData: {
    title: 'DateTime Field. Состояние/статус',
  },
})
