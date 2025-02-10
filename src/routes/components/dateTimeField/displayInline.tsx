import { createFileRoute } from '@tanstack/react-router'

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui'
import { ExampleSection } from '../../-helpers/examples'

const CompoundComponent = ({ displayInline, label }: { displayInline?: boolean, label: string }) => {
  return (
    <Field displayInline={displayInline} label={label}>
      <DateTimeContainer>
        <DateTimeDateInput />
        <DateTimeSeparator />
        <DateTimeTimeInput />
      </DateTimeContainer>
    </Field>
  )
}

const Example = () => {
  return (
    <>
      <ExampleSection>
        <CompoundComponent displayInline label={'Введите дату'} />
      </ExampleSection>
    </>
  )
}

export const DateTimeFieldDisplayLine = () => {
  return <Example />
}

export const Route = createFileRoute('/components/dateTimeField/displayInline')(
  {
    component: () => <DateTimeFieldDisplayLine />,
    staticData: {
      title: 'DateTime Field. Подпись в одну линию с полем ввода',
      description: 'Лэйбл отображается на одном уровне с полем ввода'
    },
  },
)
