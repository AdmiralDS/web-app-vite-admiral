import { useState } from 'react';
import styled from 'styled-components';

import { CheckboxField, Hint } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';
import type { CheckboxDimension } from '@admiral-ds/react-ui';
import InfoSolidSVG from '@admiral-ds/icons/build/service/InfoSolid.svg?react';

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const InfoSolid = styled(InfoSolidSVG)<{ $dimension: CheckboxDimension }>`
  margin-left: 5px;
  width: ${(props) => (props.$dimension === 'm' ? '24px' : '20px')};

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

const CheckboxWithInformer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CheckboxWithInformers = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const handleHintChange1 = (visible: boolean) => setVisible1(visible);
  const handleHintChange2 = (visible: boolean) => setVisible2(visible);

  return (
    <>
      <ExampleSection>
        <Container>
          <CheckboxWithInformer>
            <CheckboxField dimension="m" data-container-id="checkboxFieldIdOneM">
              Text
            </CheckboxField>
            <Hint
              visible={visible1}
              onVisibilityChange={handleHintChange1}
              renderContent={() =>
                'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
              }
            >
              <InfoSolid $dimension="m" aria-hidden />
            </Hint>
          </CheckboxWithInformer>
          <CheckboxWithInformer>
            <CheckboxField dimension="s" data-container-id="checkboxFieldIdOneS">
              Text
            </CheckboxField>
            <Hint
              visible={visible2}
              onVisibilityChange={handleHintChange2}
              renderContent={() =>
                'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
              }
            >
              <InfoSolid $dimension="s" aria-hidden />
            </Hint>
          </CheckboxWithInformer>
        </Container>
      </ExampleSection>
    </>
  );
};
