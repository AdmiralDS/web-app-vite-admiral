import { ExampleSection, PStyled } from '#examples/-helpers';
import { SuggestInput } from '@admiral-ds/react-ui';

const options = ['one', 'two', 'three'];

export const SuggestInputSizes = () => {
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>Размер XL</PStyled>
          </>
        }
      >
        <SuggestInput
          dimension="xl"
          options={options}
          placeholder="numbers"
          onChange={(e) => {
            // eslint-disable-next-line no-console
            console.log(e.target.value);
          }}
        />
      </ExampleSection>
      <ExampleSection
        text={
          <>
            <PStyled>Размер M</PStyled>
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
      <ExampleSection
        text={
          <>
            <PStyled>Размер S</PStyled>
          </>
        }
      >
        <SuggestInput
          dimension="s"
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
