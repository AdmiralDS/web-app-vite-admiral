import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { ComponentProps, forwardRef, ReactNode, useState } from 'react';
import { InputEx, refSetter } from '@admiral-ds/react-ui';
import { useMaskito } from '@maskito/react';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { MaskitoOptions } from '@maskito/core';

const SUFFIX_OPTIONS = ['₽', '$', '€', '¥', '£'];

const options: MaskitoOptions = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
});

/**
 * В компоненте необходимо использовать onInput по причине отсутствия onChange.
 * В документации в разделе Controlled masked input описана проблема.
 * https://maskito.dev/frameworks/react
 */
const CurrencyInput = forwardRef<HTMLInputElement, Omit<ComponentProps<typeof InputEx>, 'onChange'>>((props, ref) => {
  const inputRef = useMaskito({ options });

  return <InputEx {...props} ref={refSetter(ref, inputRef)} />;
});

export const Template = () => {
  const [localValue, setValue] = useState('');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('₽');

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Компонент для ввода числовых значений валюты с точностью до двух знаков после запятой. Строится на основе
            компонента Input Extended. Особенности:
            <li>Возможен ввод как целых чисел, так и с двумя знаками после запятой.</li>
            <li>Если при вводе цифр нажать «,» (запятая), то включается маска ввода сотых значений.</li>
            <li>Введенная «.» (точка) автоматически конвертируется в «,» (запятая).</li>
            <li>
              Валюта ввода может быть как фиксированной (только рубли, например), так и изменяемой через суффикс поля.
            </li>
            <li>Автопробел каждые три знака в целой части суммы.</li>
            <li>Можно указывать минимальные и максимальные значения для вводимой суммы.</li>
          </PStyled>
          <PStyled>
            Так как компонент строится на основе InputEx, он имеет такие же размеры, состояния и статусы.
          </PStyled>
          <PStyled>Для реализации маски была использована библиотека Maskito.</PStyled>
        </>
      }
    >
      <CurrencyInput
        displayClearIcon
        value={localValue}
        onInput={(e) => {
          setValue((e.target as HTMLInputElement).value);
        }}
        suffixValue={suffixValue}
        suffixValueList={SUFFIX_OPTIONS}
        onSuffixValueChange={setSuffixValue}
        prefixDropContainerStyle={{
          dropContainerClassName: 'prefixDropContainerClass',
        }}
        suffixDropContainerStyle={{
          dropContainerClassName: 'suffixDropContainerClass',
        }}
        placeholder="Placeholder"
        style={{ width: '400px' }}
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/currencyInput/')({
  component: () => <Template />,
  staticData: {
    title: 'CurrencyInput. Базовый пример',
  },
});
