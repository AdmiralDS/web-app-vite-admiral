import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { BadgeDot, typography } from '@admiral-ds/react-ui';

const String = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding: 50px;
  & > * {
    margin-right: 16px;
  }
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const BadgeDotBasic = () => {
  return (
    <String>
      <BadgeDot />
      Appearance: neutral
      <br />
      Dimension: m
    </String>
  );
};

export const Route = createFileRoute('/components/badgeDot/')({
  component: () => <BadgeDotBasic />,
  staticData: {
    title: 'BadgeDot. Базовый пример',
    description: 'Вспомогательный компонент применяемый в сочетании с другими компонентами для обозначения статуса.',
  },
});
