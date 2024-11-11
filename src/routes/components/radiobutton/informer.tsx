import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

import { Hint, RadioButton } from '@admiral-ds/react-ui';
import InfoSolidSVG from '@admiral-ds/icons/build/service/InfoSolid.svg?react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

type Dimension = 'm' | 's';

const InfoSolid = styled(InfoSolidSVG)<{ dimension: Dimension }>`
  margin-left: 5px;
  width: ${(props) => (props.dimension === 'm' ? '24px' : '20px')};

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
  [data-focus-within] & *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
  }
  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
  }
`;

const RadioWithInformer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const RadioButtonInformer = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const handleHintChange1 = (visible: boolean) => setVisible1(visible);
  const handleHintChange2 = (visible: boolean) => setVisible2(visible);
  return (
    <Wrapper>
      <RadioWithInformer>
        <RadioButton value={1} extraText="Add text">
          Dimension - m
        </RadioButton>
        <Hint
          visible={visible1}
          onVisibilityChange={handleHintChange1}
          renderContent={() =>
            'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
          }
        >
          <InfoSolid dimension="m" aria-hidden />
        </Hint>
      </RadioWithInformer>
      <RadioWithInformer>
        <RadioButton value={1} dimension="s" extraText="Add text">
          Dimension - s
        </RadioButton>
        <Hint
          visible={visible2}
          onVisibilityChange={handleHintChange2}
          renderContent={() =>
            'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
          }
        >
          <InfoSolid dimension="s" aria-hidden />
        </Hint>
      </RadioWithInformer>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/radiobutton/informer')({
  component: () => <RadioButtonInformer />,
  staticData: {
    title: 'RadioButton. Информер',
    description: '',
  },
});
