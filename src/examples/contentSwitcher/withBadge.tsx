import { useState } from 'react';

import { Badge, ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

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
    <ExampleSection>
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
    </ExampleSection>
  );
};
