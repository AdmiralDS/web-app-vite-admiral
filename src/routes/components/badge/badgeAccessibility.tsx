import styled from 'styled-components';
import { createFileRoute } from '@tanstack/react-router'
import { Badge, Button } from '@admiral-ds/react-ui';

const String = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 20px;
  & > * {
    margin-right: 16px;
  }
`;
const Separator = styled.div`
  height: 20px;
  width: 8px;
`;

export const BadgeAccessibility = () => {
  return (
    <>
      <String>
        <Button>
          Пример
          <Separator />
          <Badge appearance="whiteInactive">4</Badge>
        </Button>
        <Button>
          Example
          <Separator />
          <Badge appearance="whiteInactive" aria-label="Amount 4">
            4
          </Badge>
        </Button>
      </String>
    </>
  );
};

export const Route = createFileRoute('/components/badge/badgeAccessibility')({
  component: () => <BadgeAccessibility />,
  staticData: {
    title: 'Badge. Базовый пример',
    description: 'Небольшое описание функционала',
  },
});
