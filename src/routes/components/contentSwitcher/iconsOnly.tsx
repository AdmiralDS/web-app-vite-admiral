import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

import { ContentSwitcher, ContentSwitcherItem, T, TooltipHoc } from '@admiral-ds/react-ui';

import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';
import HomeOutline from '@admiral-ds/icons/build/system/HomeOutline.svg?react';
import PrintOutline from '@admiral-ds/icons/build/system/PrintOutline.svg?react';
import { ExampleWrapper } from '../../-helpers/examples';

const list = [
  {
    title: <DeleteOutline width={20} />,
    tooltipText: 'Delete',
  },
  {
    title: <EmailOutline width={20} />,
    tooltipText: 'Email',
  },
  {
    title: <HomeOutline width={20} />,
    tooltipText: 'Home',
  },
  {
    title: <PrintOutline width={20} />,
    tooltipText: 'Print',
  },
];

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const ContentSwitcherItemWithTooltip = TooltipHoc(ContentSwitcherItem);

export const ContentSwitcherIconOnly = () => {
  const [activeLPrimary, setActiveLPrimary] = useState(0);
  const [activeMPrimary, setActiveMPrimary] = useState(0);
  const [activeSPrimary, setActiveSPrimary] = useState(0);
  const [activeLSecondary, setActiveLSecondary] = useState(0);
  const [activeMSecondary, setActiveMSecondary] = useState(0);
  const [activeSSecondary, setActiveSSecondary] = useState(0);

  return (
    <ExampleWrapper>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Dimension - L
        </T>
        <ContentSwitcher dimension={'l'} appearance="primary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeLPrimary}
              onClick={() => setActiveLPrimary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <ContentSwitcher dimension={'l'} appearance="secondary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeLSecondary}
              onClick={() => setActiveLSecondary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <T font="Body/Body 1 Long" as="div">
          Dimension - M
        </T>
        <ContentSwitcher dimension={'m'} appearance="primary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeMPrimary}
              onClick={() => setActiveMPrimary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <ContentSwitcher dimension={'m'} appearance="secondary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeMSecondary}
              onClick={() => setActiveMSecondary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <T font="Body/Body 1 Long" as="div">
          Dimension - S
        </T>
        <ContentSwitcher dimension={'s'} appearance="primary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeSPrimary}
              onClick={() => setActiveSPrimary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <ContentSwitcher dimension={'s'} appearance="secondary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeSSecondary}
              onClick={() => setActiveSSecondary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
      </WrapperVertical>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/contentSwitcher/iconsOnly')({
  component: () => <ContentSwitcherIconOnly />,
  staticData: {
    title: 'ContentSwitcher. Иконки без текста',
    description: 'В компоненте можно включать только иконки. Hover. В этом варианте показывается подсказка функции.',
  },
});
