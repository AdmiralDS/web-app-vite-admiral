import styled from 'styled-components';

import { ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const list = [
  { title: 'Active button', content: '1' },
  { title: 'Default button', content: '2' },
  { title: 'Disabled button', content: '3', disabled: true },
];

const MobileWrapper = styled.div`
  width: 320px;
  height: 100px;
  padding-top: 16px;
  box-sizing: border-box;
  border: 8px solid var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  border-bottom-style: none;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const SwitcherWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentSwitcherAdaptive = () => {
  return (
    <ExampleSection
      text={
        <>
          Компонент настроен таким образом, что если закладки не помещаются в ширину экрана, то они “выходят” за область
          экрана и их можно прокручивать свайпом, в остальном, поведение такое же, как и у настольной версии.
          <br />
          <br />
          При клике на закладку, которая видна не полностью, она, в акивном состоянии, становится по центру экрана.
          Крайняя закладка при активации примыкает к краю экрана.
        </>
      }
    >
      <MobileWrapper>
        <SwitcherWrapper>
          <ContentSwitcher dimension={'m'}>
            {list.map((item, index) => {
              return (
                <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
                  {item.title}
                </ContentSwitcherItem>
              );
            })}
          </ContentSwitcher>
        </SwitcherWrapper>
      </MobileWrapper>
    </ExampleSection>
  );
};
