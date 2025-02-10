import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent } from 'react'
import styled from 'styled-components'

import { EditModeArea } from '@admiral-ds/react-ui'
import { ExampleSection } from '../../-helpers/examples'
import type { EditModeAreaProps } from '@admiral-ds/react-ui'

const Wrapper = styled.div`
  width: 250px;
`

const Component = ({
  dimension,
  bold,
}: {
  dimension: EditModeAreaProps['dimension']
  bold?: EditModeAreaProps['bold']
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
        dimension={dimension}
        bold={bold}
      />
    </Wrapper>
  )
}

const Examples = () => {
  return (
    <>
      <ExampleSection text="Размер S">
        <Component dimension="s" />
        <Component dimension="s" bold />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <Component dimension="m" />
        <Component dimension="m" bold />
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <Component dimension="xl" />
      </ExampleSection>
      <ExampleSection text="Размер XXL">
        <Component dimension="xxl" />
      </ExampleSection>
    </>
  )
}

export const EditModeAreaDimensions = () => {
  return <Examples />
}

export const Route = createFileRoute('/components/editModeAria/dimensions')({
  component: () => <EditModeAreaDimensions />,
  staticData: {
    title: 'Edit mode. Размеры',
    description:
      'Присутствует в 4 размерах: S, M (имеют написание Regular и Bold) и XL, XXL (только Bold). Переключение между Regular и Bold не изменяют размеры компонента. В режиме редактирования может применяться с поясняющим текстом или без него.',
  },
})
