import { useState, useEffect } from 'react';
import { ExampleSection, PStyled } from '#examples/-helpers';
import { SuggestInput } from '@admiral-ds/react-ui';

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

export const SuggestInputBasic = () => {
  const [localValue, setValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState<string[] | undefined>();

  const handleSelectOption = (option: string) => {
    setValue(option);
    // eslint-disable-next-line no-console
    console.log(`Selected option - ${option}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    // Если в инпуте больше 3х символов производим запрос на поиск совпадений
    if (localValue?.length < 3 && inputValue?.length > 2) {
      setIsLoading(true);
      setOptions([]);
    }
    setValue(inputValue);
  };

  // Имитация запросов на бакэнд
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        setOptions([...OPTIONS]);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading]);
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Данный компонент используется для автозаполнения строки на основе общей статистики самых популярных
              запросов. Запрос пользователя «предсказывается» после ввода уже нескольких символов, и в выпадающем списке
              предлагается выбор готовых слов или словосочетаний.
            </PStyled>
          </>
        }
      >
        <SuggestInput
          className="suggest"
          value={localValue}
          onChange={handleChange}
          onOptionSelect={handleSelectOption}
          options={options}
          isLoading={isLoading}
          onSearchButtonClick={() => {
            // eslint-disable-next-line no-console
            console.log('search button click');
          }}
          displayClearIcon
          dropContainerClassName="dropContainerClass"
          placeholder="Начните набирать text"
        />
      </ExampleSection>
    </>
  );
};
