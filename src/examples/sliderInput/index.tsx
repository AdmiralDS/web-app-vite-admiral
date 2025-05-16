import { ExampleSection, PStyled } from '#examples/-helpers';
import { SliderInput, SliderInputField } from '@admiral-ds/react-ui';

export const SliderInputBasic = () => {
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Поле ввода со слайдером позволяет выбирать значение из обозначенного диапазона мышкой. Также возможен ввод
              вручную. Диапазон может быть сплошным либо фиксированным.
            </PStyled>
            <PStyled>
              В диапазон может быть добавлено любое значение: рубли, доллары и тп. Текстовые поля слайдера могут
              принимать любые числовые и/или буквенные значения.
            </PStyled>
          </>
        }
      >
        <SliderInput
          defaultValue="5"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
        />
      </ExampleSection>
      <ExampleSection
        text={
          <>
            <PStyled>
              Для того, чтобы добавить лэйбл или дополнительный текст, используйте компонент SliderInputField
            </PStyled>
          </>
        }
      >
        <SliderInputField
          defaultValue="5"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          label="Лэйбл"
          extraText="Дополнительный текст"
        />
      </ExampleSection>
    </>
  );
};
