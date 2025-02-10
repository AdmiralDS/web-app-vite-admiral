import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent } from 'react'

import { EditMode } from '@admiral-ds/react-ui'
import { ExampleSection } from '../../-helpers/examples'

const Example = () => {
  const value = 'Текст, недоступный для выделения и копирования'
  const placeholder = 'Placeholder'
  const [localValue, setValue] = useState<string>(String(value) ?? '')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    setValue(inputValue)
  }

  return (
    <EditMode
      value={localValue}
      onChange={handleChange}
      placeholder={placeholder}
      disableCopying
    />
  )
}

export const EditModeDisableCopying = () => {
  return (
    <ExampleSection>
      <Example />
    </ExampleSection>
  )
}

export const Route = createFileRoute('/components/editMode/disablecopying')({
  component: () => <EditModeDisableCopying />,
  staticData: {
    title: 'Edit mode. Невозможность копирования',
    description: 'Наличие этого атрибута отключает возможность выделения и копирования значения поля',
  },
})
