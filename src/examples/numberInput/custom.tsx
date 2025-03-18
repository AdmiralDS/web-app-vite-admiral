import { ExampleSection } from '#examples/-helpers';
import { NumberInput } from '@admiral-ds/react-ui';

export const NumberInputCustom = () => {
  return (
    <>
      <ExampleSection text="Пользователь может указать с помощью параметра precision (по умолчанию равен 2), с какой точностью компонент должен выводить число (сколько разрядов должно быть в дробной части числа). В этом случае при потере фокуса, если число содержит не все разряды в дробной части или дробная часть отсутствует, должна произойти корректировка значения и недостающее количество разрядов должно быть заполнено нулями.">
        <NumberInput
          onChange={(event) => {
            console.log(event.target.value);
          }}
          suffix="$"
          thousand=","
          decimal="."
          precision={1}
          placeholder="0.0 $"
        />
      </ExampleSection>
    </>
  );
};
