import { createFileRoute } from '@tanstack/react-router'

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui'
import { ExampleSection } from '../../-helpers/examples'

const CompoundComponent = () => {
  return (
    <Field skeleton label={'Подпись'}>
      <DateTimeContainer>
        <DateTimeDateInput skeleton />
        <DateTimeSeparator />
        <DateTimeTimeInput skeleton />
      </DateTimeContainer>
    </Field>
  )
}

export const DateTimeFieldSkeleton = () => {
  return (
    <ExampleSection>
      <CompoundComponent />
    </ExampleSection>
  )
}

export const Route = createFileRoute('/components/dateTimeField/skeleton')({
  component: () => <DateTimeFieldSkeleton />,
  staticData: {
    title: 'DateTime Field. Состояние загрузки',
  },
})
