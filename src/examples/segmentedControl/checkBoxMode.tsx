import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { SegmentedControl, SegmentedControlItem } from '@admiral-ds/react-ui';

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const Template = () => {
  const [selected, setSelected] = useState(
    new Map([
      [values[6], false],
      [values[7], false],
      [values[8], false],
    ]),
  );

  return (
    <>
      <ExampleSection text="Неуправляемая группа чекбокс кнопок">
        <SegmentedControl
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        >
          <SegmentedControlItem name="first" value={values[0]} type="checkbox">
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name="first" value={values[1]} type="checkbox">
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name="first" value={values[2]} type="checkbox">
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
      <ExampleSection text="Неуправляемая группа чекбокс кнопок, где 1я и 2я кнопки выбраны по умолчанию">
        <SegmentedControl
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        >
          <SegmentedControlItem name="second" value={values[3]} type="checkbox" defaultChecked>
            Button 4
          </SegmentedControlItem>
          <SegmentedControlItem name="second" value={values[4]} type="checkbox" defaultChecked>
            Button 5
          </SegmentedControlItem>
          <SegmentedControlItem name="second" value={values[5]} type="checkbox">
            Button 6
          </SegmentedControlItem>
        </SegmentedControl>
      </ExampleSection>
      <ExampleSection text="Управляемая группа чекбокс кнопок">
        <SegmentedControl
          onChange={(e) => {
            setSelected(
              new Map(selected.set((e.target as HTMLInputElement).value, (e.target as HTMLInputElement).checked)),
            );
          }}
        >
          <SegmentedControlItem
            type="checkbox"
            name="third"
            value={values[6]}
            checked={selected.get(values[6])}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button' + e.target.value + ' selected')}
          >
            Button 7
          </SegmentedControlItem>
          <SegmentedControlItem
            type="checkbox"
            name="third"
            value={values[7]}
            checked={selected.get(values[7])}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button' + e.target.value + ' selected')}
          >
            Button 8
          </SegmentedControlItem>
          <SegmentedControlItem
            type="checkbox"
            name="third"
            value={values[8]}
            checked={selected.get(values[8])}
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

export const Route = createFileRoute('/components/segmentedControl/checkBoxMode')({
  component: () => <Template />,
  staticData: {
    title: 'SegmentedControl. Режим checkbox',
    description: (
      <>
        Особенности
        <li>Активными могут быть как одна, так и все секции</li>
        <li>Активные секции можно отключать повторным нажатием</li>
        <li>Минимальное количество секций в компоненте — две</li>
        <li>Не рекомендуется делать большое количество секций, для этого используйте компонент Tab Menu</li>
      </>
    ),
  },
});
