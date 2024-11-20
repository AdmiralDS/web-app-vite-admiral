import { createFileRoute } from '@tanstack/react-router';

import { ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const list = [
  { title: 'Active button', content: '1' },
  { title: 'Default button', content: '2' },
  { title: 'Disabled button', content: '3', disabled: true },
];

export const ContentSwitcherStyles = () => {
  return (
    <>
      <ExampleSection text="Размер L">
        <ContentSwitcher dimension={'l'}>
          {list.map((item, index) => {
            return (
              <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
                {item.title}
              </ContentSwitcherItem>
            );
          })}
        </ContentSwitcher>
      </ExampleSection>
      <ExampleSection text="Размер M">
        <ContentSwitcher dimension={'m'}>
          {list.map((item, index) => {
            return (
              <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
                {item.title}
              </ContentSwitcherItem>
            );
          })}
        </ContentSwitcher>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <ContentSwitcher dimension={'s'}>
          {list.map((item, index) => {
            return (
              <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
                {item.title}
              </ContentSwitcherItem>
            );
          })}
        </ContentSwitcher>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/contentSwitcher/sizes')({
  component: () => <ContentSwitcherStyles />,
  staticData: {
    title: 'ContentSwitcher. Размеры',
    description: 'Существует в трех размерах — 48, 40, 32 px по высоте.',
  },
});
