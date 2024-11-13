import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { Badge, ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';
import type { ContentSwitcherProps } from '@admiral-ds/react-ui';

import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';
import { ContentArea } from '../../-helpers/examples';

const list = [
  {
    title: (
      <>
        <StarSolid width={17} style={{ marginRight: 8 }} />
        Active button
      </>
    ),
  },
  {
    title: (
      <>
        <StarSolid width={17} style={{ marginRight: 8 }} />
        Default button <Badge style={{ marginLeft: 8 }}>6</Badge>
      </>
    ),
  },
  { title: 'Disabled button', disabled: true },
];

export const ContentSwitcherBasic = ({ dimension, className, ...props }: ContentSwitcherProps) => {
  const [active, setActive] = useState(0);

  return (
    <ContentArea>
      <ContentSwitcher dimension={dimension} className={className} {...props}>
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

export const Route = createFileRoute('/components/contentSwitcher/')({
  component: () => <ContentSwitcherBasic />,
  staticData: {
    title: 'ContentSwitcher. Базовый пример',
    description:
      'Является аналогом компонента Tabs, но применяется более локально, являясь нижнеуровневым по отношению к Tabs. Служит для переключения контента на странице.',
  },
});
