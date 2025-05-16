import { ExampleSection, PStyled } from '#examples/-helpers';
import { SuggestInput } from '@admiral-ds/react-ui';
import SearchSolidSVG from '@admiral-ds/icons/build/system/SearchSolid.svg?react';

const options = ['one', 'two', 'three'];

export const SuggestInputIcon = () => {
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              В компоненте SuggestInput можно задавать альтернативную иконку поиска через параметр icon.
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
          icon={SearchSolidSVG}
        />
      </ExampleSection>
    </>
  );
};
