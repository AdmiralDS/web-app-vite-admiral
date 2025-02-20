import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { InputEx, MenuItem, MenuItemProps, RenderProps, RenderPropsType } from '@admiral-ds/react-ui';
import { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const SUFFIX_OPTIONS = ['One', 'Two', 'Three'];

const CustomValueStyle = styled.div`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  border: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) 1px dashed;
`;

const CustomMenuItem = styled(MenuItem)`
  color: deeppink;
`;

function customValueRender({ value }: RenderProps) {
  return <CustomValueStyle>{String(value)}</CustomValueStyle>;
}
function customOptionRender({ value, ...props }: RenderPropsType<ReactNode> & MenuItemProps) {
  return <CustomMenuItem {...props}>{String(value)}</CustomMenuItem>;
}

const containerContrastBorder = css`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

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
        renderPrefixValue={customValueRender}
        renderPrefixOption={customOptionRender}
        suffixValue={suffixValue}
        suffixValueList={SUFFIX_OPTIONS}
        onSuffixValueChange={setSuffixValue}
        renderSuffixValue={customValueRender}
        renderSuffixOption={customOptionRender}
        prefixDropContainerStyle={{
          dropContainerCssMixin: containerContrastBorder,
          dropContainerClassName: 'prefixDropContainerClass',
        }}
        suffixDropContainerStyle={{
          dropContainerClassName: 'suffixDropContainerClass',
          dropContainerStyle: { border: 'dashed 2px red' },
        }}
        placeholder="Placeholder"
        style={{ width: '400px' }}
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/inputEx/custom')({
  component: () => <Template />,
  staticData: {
    title: 'InputEx. Custom',
  },
});
