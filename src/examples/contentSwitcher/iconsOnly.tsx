import { useState } from 'react';
import styled from 'styled-components';

import { ContentSwitcher, ContentSwitcherItem, TooltipHoc } from '@admiral-ds/react-ui';

import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';
import HomeOutline from '@admiral-ds/icons/build/system/HomeOutline.svg?react';
import PrintOutline from '@admiral-ds/icons/build/system/PrintOutline.svg?react';
import { ExampleSection } from '#examples/-helpers';

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
    <>
      <ExampleSection text="Размер L">
        <WrapperVertical>
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
        </WrapperVertical>
      </ExampleSection>
      <ExampleSection text="Размер M">
        <WrapperVertical>
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
        </WrapperVertical>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <WrapperVertical>
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
      </ExampleSection>
    </>
  );
};
