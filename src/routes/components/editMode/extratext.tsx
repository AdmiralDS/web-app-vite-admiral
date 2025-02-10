import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent } from 'react'

import { EditMode, Field } from '@admiral-ds/react-ui'
import { ExampleSection, SectionDescription } from '../../-helpers/examples'

const Example = () => {
  const value = 'Привет!'
  const placeholder = 'Placeholder'
  const [localValue, setValue] = useState<string>(String(value) ?? '')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    setValue(inputValue)
  }

  return (
    <>
    <ExampleSection text='Пример с лэйблом и дополнительным текстом'>
    <Field label='Label' extraText='Extra text'>
      <EditMode
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Field>
    </ExampleSection>
    <ExampleSection text='Пример в статусе error'>
    <Field extraText='Extra text' status='error'>
      <EditMode
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        status='error'
      />
    </Field>
    </ExampleSection>
    </>
  )
}

export const EditModeExtraText = () => {
  return (
    <Example />
  )
}

export const Route = createFileRoute('/components/editMode/extratext')({
  component: () => <EditModeExtraText />,
  staticData: {
    title: 'Edit mode. Дополнительный текст и лэйбл',
  },
})
