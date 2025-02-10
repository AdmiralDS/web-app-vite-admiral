import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent } from 'react';

import { EditMode } from '@admiral-ds/react-ui'
import { ExampleSection, PStyled } from '../../-helpers/examples'

const Description = () => {
  return (
    <>
      <PStyled>
        Присутствует в 4 размерах: S, M (имеют написание Regular и Bold) и XL, XXL (только Bold). Переключение между Regular и Bold не изменяют размеры компонента.
        В режиме редактирования может применяться с поясняющим текстом или без него.
      </PStyled>
      <PStyled>
        Размер компонента в состоянии Default зависит от объема текста (autolayout). Размер в состоянии редактирования задается вручную, в зависимости от предполагаемого количества текста.
      </PStyled>
    </>
  )
}

const Example = () => {
  const value = 'Привет!';
  const placeholder = 'Placeholder';
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <EditMode value={localValue} onChange={handleChange} placeholder={placeholder} />
  )
}

export const EditModeBasic = () => {
  return (
    <ExampleSection text={<Description />}>
      <Example />  
    </ExampleSection>
  )
}

export const Route = createFileRoute('/components/editMode/')({
  component: () => <EditModeBasic />,
  staticData: {
    title: 'Edit mode. Базовый пример',
    description: 'Компонент для редактирования текста. Может быть с лэйблом или без него.',
  },
})
