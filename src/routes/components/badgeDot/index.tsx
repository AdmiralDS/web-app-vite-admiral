import { createFileRoute } from '@tanstack/react-router';
import { BadgeDotBasic } from '#examples/badgeDot';

export const Route = createFileRoute('/components/badgeDot/')({
  component: () => <BadgeDotBasic />,
  staticData: {
    title: 'BadgeDot. Базовый пример',
    description: 'Вспомогательный компонент применяемый в сочетании с другими компонентами для обозначения статуса.',
  },
});
