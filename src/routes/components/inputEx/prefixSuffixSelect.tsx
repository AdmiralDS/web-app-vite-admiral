import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { InputEx } from '@admiral-ds/react-ui';
import { ReactNode, useState } from 'react';

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const SUFFIX_OPTIONS = ['One', 'Two', 'Three'];

export const Template = () => {
  const [localValue, setValue] = useState('Привет!');
  const [prefixValue, setPrefixValue] = useState<ReactNode>('prefix One');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('One');

  return (
    <ExampleSection>
      <InputEx
        value={localValue}
        onChange={(e) => setValue(e.currentTarget.value)}
        prefixValue={prefixValue}
        prefixValueList={PREFIX_OPTIONS}
        onPrefixValueChange={setPrefixValue}
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

export const Route = createFileRoute('/components/inputEx/prefixSuffixSelect')({
  component: () => <Template />,
  staticData: {
    title: 'InputEx. C выбором префикса и суффикса',
  },
});
