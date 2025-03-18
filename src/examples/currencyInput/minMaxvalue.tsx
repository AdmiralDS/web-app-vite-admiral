import { ExampleSection } from '#examples/-helpers';
import { ComponentProps, forwardRef, ReactNode, useState } from 'react';
import { clearValue, InputEx, InputExProps, refSetter } from '@admiral-ds/react-ui';
import { useMaskito } from '@maskito/react';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';

const SUFFIX_OPTIONS = ['₽', '$', '€', '¥', '£'];

const options = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
  max: 2000,
  min: -5,
});

function convertStrToNum(str: string, precision: number, decimal: string) {
  return Number(clearValue(str, precision, decimal).replace(decimal, '.'));
}

/**
 * В компоненте необходимо использовать onInput по причине отсутствия onChange.
 * В документации в разделе Controlled masked input описана проблема.
 * https://maskito.dev/frameworks/react
 */
const CurrencyInput = forwardRef<HTMLInputElement, Omit<ComponentProps<typeof InputEx>, 'onChange'>>((props, ref) => {
  const inputRef = useMaskito({ options });

  return <InputEx {...props} ref={refSetter(ref, inputRef)} />;
});

export const CurrencyInputMinMax = () => {
  const [localValue, setValue] = useState('');
  const [status, setStatus] = useState<InputExProps['status'] | undefined>(undefined);
  const [suffixValue, setSuffixValue] = useState<ReactNode>('₽');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const numValue = convertStrToNum(value, 2, ',');

    if (value && numValue > 10 && numValue < 1000) {
      setStatus('success');
    } else {
      setStatus('error');
    }
    setValue(value);
  };

  return (
    <ExampleSection text="Пример с ограничением в маске min = -5, max = 2000, и подсвечивание статуса success если 10 < value < 1000.">
      <CurrencyInput
        displayClearIcon
        value={localValue}
        status={status}
        onInput={handleChange}
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
