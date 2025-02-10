import { createFileRoute } from '@tanstack/react-router'

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field
} from '@admiral-ds/react-ui'
import { ExampleSection, PStyled } from '../../-helpers/examples'

const CompoundComponent = ({
  extraText,
}: {
  extraText?: string
}) => {
  return (
    <Field extraText={extraText}>
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
      <PStyled>Дополнительный текст, который отображается под полем ввода</PStyled>
      <ExampleSection>
        <CompoundComponent extraText={'Дополнительный текст'} />
      </ExampleSection>
    </>
  )
}

export const DateTimeFieldExtraText = () => {
  return <Example />
}

export const Route = createFileRoute('/components/dateTimeField/extraText')({
  component: () => <DateTimeFieldExtraText />,
  staticData: {
    title: 'DateTime Field. Дополнительный текст',
  },
})
