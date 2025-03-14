import { ExampleSection } from '#routes/-helpers/examples';
import { SegmentedControl, SegmentedControlItem } from '@admiral-ds/react-ui';

export const SegmentedControlBasic = () => {
  return (
    <ExampleSection text="Компонент состоит из обычных кнопок и имеет аналогичные настройки, опции и размеры.">
      <SegmentedControl
        // eslint-disable-next-line no-console
        onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      >
        <SegmentedControlItem name="first" value="1">
          Button 1
        </SegmentedControlItem>
        <SegmentedControlItem name="first" value="2">
          Button 2
        </SegmentedControlItem>
        <SegmentedControlItem name="first" value="3">
          Button 3
        </SegmentedControlItem>
      </SegmentedControl>
    </ExampleSection>
  );
};
