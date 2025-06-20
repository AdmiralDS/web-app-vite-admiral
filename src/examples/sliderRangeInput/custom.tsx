import { ExampleSection } from '#examples/-helpers';
import { SliderRange } from '@admiral-ds/react-ui';

export const SliderRangeInputCustom = () => {
  const handleChange = (
    value: [{ str: string; num: number }, { str: string; num: number }],
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(value, event);
  };

  return (
    <>
      <ExampleSection text="Пример изменения настроек (suffix, prefix, placeholder).">
        <SliderRange
          onChange={handleChange}
          minValue={10}
          maxValue={100}
          prefix={['From', 'To']}
          suffix="$"
          placeholder={['From 0 $', 'To 0 $']}
        />
      </ExampleSection>
    </>
  );
};
