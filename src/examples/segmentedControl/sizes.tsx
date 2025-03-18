import { ExampleSection } from '#examples/-helpers';
import { SegmentedControl, SegmentedControlItem } from '@admiral-ds/react-ui';

export const SegmentedControlSizes = () => {
  return (
    <>
      <ExampleSection text="Размер XL">
        <SegmentedControl
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
        >
          <SegmentedControlItem name="xl" value="1 XL">
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name="xl" value="2 XL">
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name="xl" value="3 XL">
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
      <ExampleSection text="Размер L">
        <SegmentedControl
          dimension="l"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
        >
          <SegmentedControlItem name="l" value="1 L">
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name="l" value="2 L">
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name="l" value="3 L">
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
      <ExampleSection text="Размер M">
        <SegmentedControl
          dimension="m"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
        >
          <SegmentedControlItem name="m" value="1 M">
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name="m" value="2 M">
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name="m" value="3 M">
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <SegmentedControl
          dimension="s"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
        >
          <SegmentedControlItem name="s" value="1 S">
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name="s" value="2 S">
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name="s" value="3 S">
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
    </>
  );
};
