import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { ComponentProps, forwardRef, ReactNode, useState } from 'react';
import { InputExField, refSetter } from '@admiral-ds/react-ui';
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
const CurrencyInputField = forwardRef<HTMLInputElement, Omit<ComponentProps<typeof InputExField>, 'onChange'>>(
  (props, ref) => {
    const inputRef = useMaskito({ options });

    return <InputExField {...props} ref={refSetter(ref, inputRef)} />;
  },
);

export const Template = () => {
  const [localValue, setValue] = useState('');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('₽');

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Компоненту можно прокидывать дата аттрибуты вида [data-container-...]. Этот аттрибут попадет только на
            контейнер самого компонента.
          </PStyled>
          <PStyled>
            Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут
            data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.
          </PStyled>
        </>
      }
    >
      <CurrencyInputField
        label="label"
        extraText="extraText"
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

export const Route = createFileRoute('/components/currencyInput/currencyInputField')({
  component: () => <Template />,
  staticData: {
    title: 'CurrencyInputField. Базовый пример',
  },
});
