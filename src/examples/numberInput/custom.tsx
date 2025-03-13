import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { NumberInput } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/numberInput/custom')({
  component: () => <Template />,
  staticData: {
    title: 'NumberInput. Пример изменения настроек (suffix, precision, thousand)',
  },
});
