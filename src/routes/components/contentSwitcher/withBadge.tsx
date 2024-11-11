import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

import { Badge, ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

const list = [
  {
    title: (
      <>
        Active button <Badge style={{ marginLeft: 8 }}>3</Badge>
      </>
    ),
  },
  {
    title: (
      <>
        Default button <Badge style={{ marginLeft: 8 }}>6</Badge>
      </>
    ),
  },
  {
    title: (
      <>
        Disabled button <Badge style={{ marginLeft: 8 }}>6</Badge>
      </>
    ),
    disabled: true,
  },
];

export const ContentSwitcherWithBadge = () => {
  const [active, setActive] = useState(0);

  return (
    <Wrapper>
      <ContentSwitcher dimension={'l'} appearance="primary">
        {list.map((item, index) => (
          <ContentSwitcherItem
            key={index}
            active={index === active}
            onClick={() => setActive(index)}
            disabled={item.disabled}
          >
            {item.title}
          </ContentSwitcherItem>
        ))}
      </ContentSwitcher>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/contentSwitcher/withBadge')({
  component: () => <ContentSwitcherWithBadge />,
  staticData: {
    title: 'ContentSwitcher. С Badge',
    description:
      'В компоненте можно включать бэйджи.',
  },
});
