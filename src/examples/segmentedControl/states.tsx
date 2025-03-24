import styled from 'styled-components';
import { columnFlexMixin, ExampleSection } from '#examples/-helpers';
import { SegmentedControl, SegmentedControlItem, SegmentedControlProps } from '@admiral-ds/react-ui';

const ExampleSectionColumn = styled(ExampleSection)`
  ${columnFlexMixin}
`;

const appearanceMap: Array<SegmentedControlProps['appearance']> = ['outlined', 'filled'];

export const SegmentedControlStates = () => {
  return (
    <>
      <ExampleSectionColumn text="Disable (вторая внопка)">
        {appearanceMap.map((appearance, index) => (
          <SegmentedControl
            appearance={appearance}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
          >
            <SegmentedControlItem name={`first${index}`} value={1}>
              Button 1
            </SegmentedControlItem>
            <SegmentedControlItem name={`first${index}`} value={2} disabled>
              Button 2
            </SegmentedControlItem>
            <SegmentedControlItem name={`first${index}`} value={3}>
              Button 3
            </SegmentedControlItem>
          </SegmentedControl>
        ))}
      </ExampleSectionColumn>
      <ExampleSectionColumn text="Loading (третья кнопка)">
        {appearanceMap.map((appearance, index) => (
          <SegmentedControl
            appearance={appearance}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
          >
            <SegmentedControlItem name={`second${index}`} value={1}>
              Button 1
            </SegmentedControlItem>
            <SegmentedControlItem name={`second${index}`} value={2}>
              Button 2
            </SegmentedControlItem>
            <SegmentedControlItem name={`second${index}`} value={3} loading>
              Button 3
            </SegmentedControlItem>
          </SegmentedControl>
        ))}
      </ExampleSectionColumn>
    </>
  );
};
