import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

import { CheckboxField, Hint } from '@admiral-ds/react-ui';
import type { CheckboxDimension } from '@admiral-ds/react-ui';
import InfoSolidSVG from '@admiral-ds/icons/build/service/InfoSolid.svg?react';
import { ContentArea } from '../../-helpers/examples';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 16px;
  }
`;

export const CheckboxStates = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const handleHintChange1 = (visible: boolean) => setVisible1(visible);
  const handleHintChange2 = (visible: boolean) => setVisible2(visible);

  return (
    <ContentArea>
      <Container>
        <CheckboxField
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
          data-container-id="checkboxFieldIdOne"
          id="checkboxFieldId"
          name="checkboxFieldName"
        >
          Управляемый чекбокс
        </CheckboxField>
        <CheckboxField dimension="s" data-container-id="checkboxFieldIdTwo">
          Неуправляемый маленький чекбокс
        </CheckboxField>
        <CheckboxField dimension="m" data-container-id="checkboxFieldIdThree">
          Двойная
          <br />
          строка
        </CheckboxField>
        <CheckboxField
          disabled
          defaultChecked
          extraText="Дополнительный текст. Additional text"
          data-container-id="checkboxFieldIdFour"
        >
          Disabled не управляемый чекбокс
        </CheckboxField>
        <CheckboxField disabled data-container-id="checkboxFieldIdFive">
          Disabled не управляемый чекбокс
        </CheckboxField>
        <CheckboxField readOnly defaultChecked data-container-id="checkboxFieldIdSix">
          Readonly не управляемый чекбокс
        </CheckboxField>
        <CheckboxField
          readOnly
          extraText="Дополнительный текст. Additional text"
          data-container-id="checkboxFieldIdSeven"
        >
          Readonly не управляемый чекбокс
        </CheckboxField>
        <CheckboxField
          error
          extraText={
            <span>
              Вариация с <i>дополнительно</i> декорированным <b>текстом</b>
            </span>
          }
          data-container-id="checkboxFieldIdEight"
        >
          Error не управляемый чекбокс
        </CheckboxField>
        <CheckboxField
          dimension="s"
          indeterminate
          extraText="Вариация с дополнительным текстом"
          data-container-id="checkboxFieldIdNine"
        >
          Не управляемый маленький чекбокс indeterminate
        </CheckboxField>
        <CheckboxWithInformer>
          <CheckboxField dimension="m" extraText="Вариация с информером" data-container-id="checkboxFieldIdTen">
            Чекбокс с информером
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
          <CheckboxField dimension="s" extraText="Вариация с информером" data-container-id="checkboxFieldIdEleven">
            Маленький чекбокс с информером
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
    </ContentArea>
  );
};

export const Route = createFileRoute('/components/checkbox/states')({
  component: () => <CheckboxStates />,
  staticData: {
    title: 'CheckboxField. Состояния.',
    description: '',
  },
});
