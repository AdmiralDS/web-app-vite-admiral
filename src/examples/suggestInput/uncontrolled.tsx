import { ExampleSection, PStyled } from '#examples/-helpers';
import { SuggestInput } from '@admiral-ds/react-ui';

const options = ['one', 'two', 'three'];

export const SuggestInputUncontrolled = () => {
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Компонент можно использовать как в контролируемом, так и неконтролируемом режимах. В данном примере
              продемонстрирован второй случай.
            </PStyled>
          </>
        }
      >
        <SuggestInput
          options={options}
          placeholder="numbers"
          onChange={(e) => {
            // eslint-disable-next-line no-console
            console.log(e.target.value);
          }}
        />
      </ExampleSection>
    </>
  );
};
