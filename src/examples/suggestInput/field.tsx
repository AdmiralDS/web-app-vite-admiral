import { useState, useEffect } from 'react';
import { ExampleSection, PStyled } from '#examples/-helpers';
import { SuggestField } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const OPTIONS = [
  'text 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'text 6',
];

export const SuggestInputField = () => {
  const [localValue, setValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<string[] | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Если в инпуте больше 3х символов производим запрос на поиск совпадений
    if (localValue?.length < 3 && inputValue?.length > 2) {
      setIsLoading(true);
      setOptions([]);
    }

    // eslint-disable-next-line no-console
    console.log(`>>> onChange: ${inputValue}`);
    setValue(inputValue);
  };

  const handleOptionSelect = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(`>>> onOptionSelect: ${value}`);
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
              Для того, чтобы добавить лэйбл или дополнительный текст к инпуту, используйте компонент SuggestField
            </PStyled>
          </>
        }
      >
        <DisplayContainer>
          <SuggestField
            data-container-id="suggestFieldIdOne"
            defaultValue="text"
            onChange={handleChange}
            onOptionSelect={handleOptionSelect}
            options={options}
            isLoading={isLoading}
            placeholder="Наберите несколько символов..."
            label="Поле ввода с вариантами подстановки значений"
          />
        </DisplayContainer>
      </ExampleSection>
    </>
  );
};
