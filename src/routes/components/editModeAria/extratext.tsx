import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent } from 'react'
import styled from 'styled-components'

import { EditModeArea, Field } from '@admiral-ds/react-ui'
import { ExampleSection } from '../../-helpers/examples'

const Wrapper = styled.div`
  width: 250px;
`

const Example = () => {
  const value = 'Привет! Это компонент для редактирования многострочного текста'
  const placeholder = 'Placeholder'
  const [localValue, setValue] = useState<string>(String(value) ?? '')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value
    setValue(inputValue)
  }

  return (
    <>
      <ExampleSection text="Пример с лэйблом и дополнительным текстом">
        <Wrapper>
          <Field label="Label" extraText="Extra text">
            <EditModeArea
              value={localValue}
              onChange={handleChange}
              placeholder={placeholder}
            />
          </Field>
        </Wrapper>
      </ExampleSection>
      <ExampleSection text="Пример в статусе error">
        <Wrapper>
          <Field extraText="Extra text" status="error">
            <EditModeArea
              value={localValue}
              onChange={handleChange}
              placeholder={placeholder}
              status="error"
            />
          </Field>
        </Wrapper>
      </ExampleSection>
    </>
  )
}

export const EditModeAreaExtraText = () => {
  return <Example />
}

export const Route = createFileRoute('/components/editModeAria/extratext')({
  component: () => <EditModeAreaExtraText />,
  staticData: {
    title: 'Edit mode. Дополнительный текст и лэйбл',
  },
})
