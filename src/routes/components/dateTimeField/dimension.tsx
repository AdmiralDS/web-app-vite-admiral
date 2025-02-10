import { createFileRoute } from '@tanstack/react-router'

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
  ComponentDimension
} from '@admiral-ds/react-ui'
import { ExampleSection, PStyled } from '../../-helpers/examples'

const CompoundComponent = ({dimension}: {dimension?: ComponentDimension}) => {
  return (
    <Field>
      <DateTimeContainer>
        <DateTimeDateInput dimension={dimension} />
        <DateTimeSeparator />
        <DateTimeTimeInput dimension={dimension} />
      </DateTimeContainer>
    </Field>
  )
}

const Example = () => {
  return (
    <>
      <PStyled>
        Компонент представлен в трёх размерах - xl, m и s
      </PStyled>
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
  )
}

export const DateTimeFieldDimension = () => {
  return (
    <Example />
  )
}

export const Route = createFileRoute('/components/dateTimeField/dimension')({
  component: () => <DateTimeFieldDimension />,
  staticData: {
    title: 'DateTime Field. Размеры'
  },
})
