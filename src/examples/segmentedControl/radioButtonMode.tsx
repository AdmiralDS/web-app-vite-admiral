import { useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { SegmentedControl, SegmentedControlItem } from '@admiral-ds/react-ui';

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const SegmentedControlRadioButtonMode = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <ExampleSection text="Неуправляемая группа радио кнопок">
        <SegmentedControl
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        >
          <SegmentedControlItem name="first" value={values[0]}>
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name="first" value={values[1]}>
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name="first" value={values[2]}>
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
      <ExampleSection text="Неуправляемая группа радио кнопок, где 1я кнопка выбрана по умолчанию">
        <SegmentedControl
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        >
          <SegmentedControlItem name="second" value={values[3]} defaultChecked>
            Button 4
          </SegmentedControlItem>
          <SegmentedControlItem name="second" value={values[4]}>
            Button 5
          </SegmentedControlItem>
          <SegmentedControlItem name="second" value={values[5]}>
            Button 6
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
      <ExampleSection text="Управляемая группа радио кнопок">
        <SegmentedControl onChange={(e) => setSelected((e.target as HTMLInputElement).value)}>
          <SegmentedControlItem
            name="third"
            value={values[6]}
            checked={values[6] == selected}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button' + e.target.value + ' selected')}
          >
            Button 7
          </SegmentedControlItem>
          <SegmentedControlItem
            name="third"
            value={values[7]}
            checked={values[7] == selected}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button' + e.target.value + ' selected')}
          >
            Button 8
          </SegmentedControlItem>
          <SegmentedControlItem
            name="third"
            value={values[8]}
            checked={values[8] == selected}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button' + e.target.value + ' selected')}
          >
            Button 9
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
    </>
  );
};
