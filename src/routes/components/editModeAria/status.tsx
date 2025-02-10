import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent } from 'react'
import styled from 'styled-components'

import { EditModeArea } from '@admiral-ds/react-ui'
import type { EditModeAreaProps } from '@admiral-ds/react-ui'
import { ExampleSection } from '../../-helpers/examples'

const Wrapper = styled.div`
  width: 250px;
`

const Component = ({
  disabled,
  readOnly,
  status,
  skeleton,
}: {
  disabled?: boolean
  readOnly?: boolean
  status?: EditModeAreaProps['status']
  skeleton?: boolean
}) => {
  const value = 'Привет! Это компонент для редактирования многострочного текста'
  const placeholder = 'Placeholder'
  const [localValue, setValue] = useState<string>(String(value) ?? '')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value
    setValue(inputValue)
  }

  return (
    <Wrapper>
      <EditModeArea
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        status={status}
        skeleton={skeleton}
      />
    </Wrapper>
  )
}

const Example = () => {
  return (
    <>
      <ExampleSection text={'Состояние disabled'}>
        <Component disabled />
      </ExampleSection>
      <ExampleSection text={'Состояние readOnly'}>
        <Component readOnly />
      </ExampleSection>
      <ExampleSection text={'Статус success'}>
        <Component status="success" />
      </ExampleSection>
      <ExampleSection text={'Статус error'}>
        <Component status="error" />
      </ExampleSection>
      <ExampleSection text={'Состояние загрузки'}>
        <Component skeleton />
      </ExampleSection>
    </>
  )
}

export const EditModeAreaStatus = () => {
  return <Example />
}

export const Route = createFileRoute('/components/editModeAria/status')({
  component: () => <EditModeAreaStatus />,
  staticData: {
    title: 'Edit mode. Состояние/статус',
  },
})
