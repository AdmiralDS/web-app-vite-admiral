import { ExampleSection } from '#examples/-helpers';
import { SlotProps, TimeField, InputIconButton } from '@admiral-ds/react-ui';
import { ChangeEvent, useState } from 'react';
import GPSOutline from '@admiral-ds/icons/build/location/GPSOutline.svg?react';
import TimeSolid from '@admiral-ds/icons/build/system/TimeSolid.svg?react';

const customSlots: SlotProps[] = [
  { value: '00:00', disabled: false },
  { value: '01:00', disabled: false },
  { value: '02:00', disabled: false },
  { value: '03:00', disabled: false },
  { value: '04:00', disabled: false },
  { value: '05:00', disabled: false },
  { value: '06:00', disabled: false },
  { value: '07:00', disabled: false },
  { value: '08:00', disabled: false },
  { value: '09:00', disabled: false },
  { value: '10:00', disabled: false },
  { value: '11:00', disabled: false },
  { value: '12:00', disabled: false },
  { value: '13:00', disabled: false },
  { value: '14:00', disabled: false },
  { value: '15:00', disabled: false },
  { value: '16:00', disabled: false },
  { value: '17:00', disabled: false },
  { value: '18:00', disabled: false },
  { value: '19:00', disabled: false },
  { value: '20:00', disabled: false },
  { value: '21:00', disabled: false },
  { value: '22:00', disabled: false },
  { value: '23:00', disabled: false },
];

export const TimeInputCustom = () => {
  const [localValue, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };
  return (
    <>
      <ExampleSection text="В компоненте можно указать произвольные интервалы ('slots'), выставить диапазон времени доступный для выбора ('startTime', 'endTime'), а также добавить и/или изменить иконку для открытия выпадающего списка ('iconsAfter', 'icon').">
        <TimeField
          label="Введите время"
          extraText="Дополнительный текст"
          style={{ maxWidth: '320px' }}
          value={localValue}
          onChange={handleChange}
          dropContainerClassName="dropContainerClass"
          slots={customSlots}
          disabledSlots={['12:00', '15:00', '17:00']}
          startTime="11:00"
          endTime="20:00"
          iconsAfter={<InputIconButton icon={GPSOutline} onClick={() => setValue('12:00')} />}
          icon={TimeSolid}
        />
      </ExampleSection>
    </>
  );
};
