import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { Badge, ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';
import { ContentArea } from '../../-helpers/examples';

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
    <ContentArea>
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
    </ContentArea>
  );
};

export const Route = createFileRoute('/components/contentSwitcher/withBadge')({
  component: () => <ContentSwitcherWithBadge />,
  staticData: {
    title: 'ContentSwitcher. С Badge',
    description: 'В компоненте можно включать бэйджи.',
  },
});
