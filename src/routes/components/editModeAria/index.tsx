import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent } from 'react'
import styled from 'styled-components'

import { EditModeArea } from '@admiral-ds/react-ui'
import { ExampleSection, PStyled } from '../../-helpers/examples'

const Wrapper = styled.div`
  width: 250px;
`

const Description = () => {
  return (
    <>
      <PStyled>
        Присутствует в 4 размерах: S, M (имеют написание Regular и Bold) и XL,
        XXL (только Bold). Переключение между Regular и Bold не изменяют размеры
        компонента. В режиме редактирования может применяться с поясняющим
        текстом или без него.
      </PStyled>
      <PStyled>
        Размер компонента в состоянии Default зависит от объема текста
        (autolayout). Размер в состоянии редактирования задается вручную, в
        зависимости от предполагаемого количества текста.
      </PStyled>
    </>
  )
}

const Example = () => {
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
      />
    </Wrapper>
  )
}

export const EditModeAreaBasic = () => {
  return (
    <ExampleSection text={<Description />}>
      <Example />
    </ExampleSection>
  )
}

export const Route = createFileRoute('/components/editModeAria/')({
  component: () => <EditModeAreaBasic />,
  staticData: {
    title: 'Edit mode. Базовый пример',
    description:
      'Компонент для редактирования многострочного текста. Может быть с лэйблом или без него.',
  },
})
