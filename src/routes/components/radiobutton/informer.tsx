import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

import { Hint, RadioButton } from '@admiral-ds/react-ui';
import InfoSolidSVG from '@admiral-ds/icons/build/service/InfoSolid.svg?react';
import { ExampleSection } from '../../-helpers/examples';

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

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const RadioButtonInformer = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const handleHintChange1 = (visible: boolean) => setVisible1(visible);
  const handleHintChange2 = (visible: boolean) => setVisible2(visible);
  return (
    <ExampleSection>
      <Container>
        <RadioWithInformer>
          <RadioButton value={1}>Text</RadioButton>
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
          <RadioButton value={1} dimension="s">
            Text
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
      </Container>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/radiobutton/informer')({
  component: () => <RadioButtonInformer />,
  staticData: {
    title: 'RadioButton. Информер',
    description: 'Состояния аналогичны стандартным радио кнопкам, подсказка появляется по Hover на иконке.',
  },
});
