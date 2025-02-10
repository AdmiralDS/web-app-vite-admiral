import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent } from 'react'
import styled from 'styled-components'

import { EditModeArea } from '@admiral-ds/react-ui'
import { ExampleSection } from '../../-helpers/examples'

const Wrapper = styled.div`
  width: 250px;
`

const Example = () => {
  const value = 'Текст, недоступный для выделения и копирования, к тому же, это компонент для редактирования многострочного текста'
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
        disableCopying
      />
    </Wrapper>
  )
}

export const EditModeAreaDisableCopying = () => {
  return (
    <ExampleSection>
      <Example />
    </ExampleSection>
  )
}

export const Route = createFileRoute('/components/editModeAria/disablecopying')(
  {
    component: () => <EditModeAreaDisableCopying />,
    staticData: {
      title: 'Edit mode. Невозможность копирования',
      description:
        'Наличие этого атрибута отключает возможность выделения и копирования значения поля',
    },
  },
)
