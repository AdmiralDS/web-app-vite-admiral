import { useState } from 'react';
import { CheckboxCompositeGroup, CheckboxField, CheckboxGroup } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

interface ItemValue {
  label: string;
  id: string;
  checked: boolean;
}

const initialValue: Array<ItemValue> = [
  { label: 'Москва', id: '1', checked: false },
  { label: 'Воронеж', id: '2', checked: false },
  { label: 'Самара', id: '3', checked: false },
  { label: 'Омск', id: '4', checked: false },
];

export const CheckboxCompositeGroupExample = () => {
  const [list, setValue] = useState<Array<ItemValue>>(initialValue);

  const someItemChecked = () => list.some((item) => item.checked);

  const handleOnchangeAll = () => {
    setValue((prev) => prev.map((item) => ({ ...item, checked: !someItemChecked() })));
  };
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setValue((prev) => prev.map((item) => (name === item.label ? { ...item, checked: !item.checked } : { ...item })));
  };
  const getIndeterminateStatus = () => !list.every((item) => item.checked) && someItemChecked();

  return (
    <ExampleSection>
      <CheckboxCompositeGroup>
        <CheckboxField
          indeterminate={getIndeterminateStatus()}
          checked={someItemChecked()}
          onChange={handleOnchangeAll}
        >
          Города :
        </CheckboxField>
        <CheckboxGroup>
          {list.map((item) => (
            <CheckboxField checked={item.checked} name={item.label} key={item.id} onChange={handleOnchange}>
              {item.label}
            </CheckboxField>
          ))}
        </CheckboxGroup>
      </CheckboxCompositeGroup>
    </ExampleSection>
  );
};
