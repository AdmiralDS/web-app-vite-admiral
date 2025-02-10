import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent } from 'react'

import { EditMode } from '@admiral-ds/react-ui'
import styled from 'styled-components'
import { ExampleSection } from '../../-helpers/examples'

const Wrapper = styled.div`
  width: 250px;
`

const Example = () => {
  const value = 'Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить больше игр'
  const placeholder = 'Placeholder'
  const [localValue, setValue] = useState<string>(String(value) ?? '')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    setValue(inputValue)
  }

  return (
    <>
      <ExampleSection text='Для многострочного ввода используйте компонент EditModeAria'>
        <Wrapper>
          <EditMode
            value={localValue}
            onChange={handleChange}
            placeholder={placeholder}
            multilineView
          />
        </Wrapper>
      </ExampleSection>
    </>
  )
}

export const EditModeMultiline = () => {
  return (
    <Example />
  )
}

export const Route = createFileRoute('/components/editMode/multiline')({
  component: () => <EditModeMultiline />,
  staticData: {
    title: 'Edit mode. Многострочное отображение',
    description:
      'По умолчанию стоит false',
  },
})
