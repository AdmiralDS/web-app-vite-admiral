import { ExampleSection } from '#examples/-helpers';
import { SegmentedControl, SegmentedControlItem } from '@admiral-ds/react-ui';

export const SegmentedControlStyles = () => {
  return (
    <>
      <ExampleSection text="Outlined">
        <SegmentedControl
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
        >
          <SegmentedControlItem name="first" value="2 Outlined">
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name="first" value="2 Outlined">
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name="first" value="3 Outlined">
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
      <ExampleSection text="Filled">
        <SegmentedControl
          appearance="filled"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
        >
          <SegmentedControlItem name="second" value="1 Filled">
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name="second" value="2 Filled">
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name="second" value="3 Filled">
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
    </>
  );
};
