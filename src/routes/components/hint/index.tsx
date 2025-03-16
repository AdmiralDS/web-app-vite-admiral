import { createFileRoute } from '@tanstack/react-router';
import { HintBasic } from '#examples/hint';

export const Route = createFileRoute('/components/hint/')({
  component: () => <HintBasic />,
  staticData: {
    title: 'Hint. Базовый пример',
    description:
      'Всплывающая подсказка используется для ситуаций, когда требуется пояснить или раскрыть информацию более детально. Вызывается, когда недостаточно Tooltip-а. В отличие от других компонентов обмена сообщениями, всплывающие окна никогда не должны содержать критическую информацию (например, ошибки).',
  },
});
