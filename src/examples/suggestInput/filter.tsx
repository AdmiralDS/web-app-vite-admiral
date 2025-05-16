import { useState, useEffect } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { getTextHighlightMeta, SuggestInput } from '@admiral-ds/react-ui';

const OPTIONS = [
  'text 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'text 6',
  'text 7',
  'text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 9',
  'text 10',
  'text 11',
  'text 12',
];

export const SuggestInputFilter = () => {
  const [localValue, setValue] = useState<string>('');
  const [options, setOptions] = useState<string[] | undefined>([...OPTIONS]);

  const handleSelectOption = (option: string) => {
    setValue(option);
    // eslint-disable-next-line no-console
    console.log(`Selected option - ${option}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    setValue(inputValue);
  };

  useEffect(() => {
    const filteredOptions: string[] = OPTIONS.filter(
      (option) => getTextHighlightMeta(option, localValue, 'wholly').shouldHighlight,
    );
    setOptions(filteredOptions);
  }, [localValue]);
  return (
    <ExampleSection>
      <SuggestInput
        className="suggest"
        value={localValue}
        onChange={handleChange}
        onOptionSelect={handleSelectOption}
        options={options}
        onSearchButtonClick={() => {
          // eslint-disable-next-line no-console
          console.log('search button click');
        }}
        displayClearIcon
        placeholder="Начните набирать text"
      />
    </ExampleSection>
  );
};
