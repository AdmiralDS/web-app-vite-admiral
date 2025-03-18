import { ExampleSection } from '#examples/-helpers';
import { ComponentProps, forwardRef, ReactNode, useState } from 'react';
import { InputEx, refSetter } from '@admiral-ds/react-ui';
import { useMaskito } from '@maskito/react';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import styled from 'styled-components';

const SUFFIX_OPTIONS = ['₽', '$', '€', '¥', '£'];

const options = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
});

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

/**
 * В компоненте необходимо использовать onInput по причине отсутствия onChange.
 * В документации в разделе Controlled masked input описана проблема.
 * https://maskito.dev/frameworks/react
 */
const CurrencyInput = forwardRef<HTMLInputElement, Omit<ComponentProps<typeof InputEx>, 'onChange'>>((props, ref) => {
  const inputRef = useMaskito({ options });

  return <InputEx {...props} ref={refSetter(ref, inputRef)} />;
});

export const CurrencyInputWithPrefix = () => {
  const [localValue, setValue] = useState('');
  const [localValue2, setValue2] = useState('');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('₽');

  return (
    <ExampleSection>
      <Wrapper>
        <CurrencyInput
          displayClearIcon
          value={localValue}
          onInput={(e) => setValue(e.currentTarget.value)}
          suffixValue={suffixValue}
          prefixValue="От"
          suffixValueList={SUFFIX_OPTIONS}
          onSuffixValueChange={setSuffixValue}
          prefixDropContainerStyle={{
            dropContainerClassName: 'prefixDropContainerClass',
          }}
          suffixDropContainerStyle={{
            dropContainerClassName: 'suffixDropContainerClass',
          }}
        />
        <CurrencyInput
          displayClearIcon
          value={localValue2}
          onInput={(e) => setValue2(e.currentTarget.value)}
          prefixValue="До"
          suffixValue={suffixValue}
          suffixValueList={SUFFIX_OPTIONS}
          onSuffixValueChange={setSuffixValue}
          prefixDropContainerStyle={{
            dropContainerClassName: 'prefixDropContainerClass',
          }}
          suffixDropContainerStyle={{
            dropContainerClassName: 'suffixDropContainerClass',
          }}
        />
      </Wrapper>
    </ExampleSection>
  );
};
