import { createFileRoute } from '@tanstack/react-router';
import { ChipsTooltip } from '#examples/chips/withTooltip';

export const Route = createFileRoute('/components/chips/withTooltip')({
  component: () => <ChipsTooltip />,
  staticData: {
    title: 'Chips с Tooltip',
    description:
      'По дефолту в компоненте (в коде) задано граничение ширины в 190 px, после которой происходит уход в троеточие. Но можно изменять этот параметр, стилизуя компонент через styled components. В случае сокращения над компонентом при ховере появляется Тултип с расшифровкой.',
  },
});
