import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { BadgeDot, typography } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const String = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  & > * {
    margin-right: 16px;
  }
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const BadgeDotBasic = () => {
  return (
    <ExampleSection>
      <String>
        <BadgeDot />
        Appearance: neutral
        <br />
        Dimension: m
      </String>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/badgeDot/')({
  component: () => <BadgeDotBasic />,
  staticData: {
    title: 'BadgeDot. Базовый пример',
    description: 'Вспомогательный компонент применяемый в сочетании с другими компонентами для обозначения статуса.',
  },
});
