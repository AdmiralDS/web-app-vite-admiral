import { ExampleSection } from '#routes/-helpers/examples';
import { GlobalSearchWithLogic } from '#routes/-helpers/globalSearch';
import { useState } from 'react';

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];

export const GlobalSearchVariants = () => {
  const [prefixValue, setPrefixValue] = useState<React.ReactNode>('prefix One');

  return (
    <>
      <ExampleSection text="С текстовой кнопкой">
        <GlobalSearchWithLogic submitButtonProps={{ children: 'Найти' }} />
      </ExampleSection>
      <ExampleSection text="С кнопкой-иконкой">
        <GlobalSearchWithLogic />
      </ExampleSection>
      <ExampleSection text="С префиксом. Позволяет выбирать область, категорию поиска, делая поиск более адресным.">
        <GlobalSearchWithLogic
          submitButtonProps={{ children: 'Найти' }}
          prefixValueList={PREFIX_OPTIONS}
          prefixValue={prefixValue}
          onPrefixValueChange={setPrefixValue}
        />
      </ExampleSection>
      <ExampleSection text="С префиксом и кнопкой-иконкой">
        <GlobalSearchWithLogic
          prefixValueList={PREFIX_OPTIONS}
          prefixValue={prefixValue}
          onPrefixValueChange={setPrefixValue}
        />
      </ExampleSection>
    </>
  );
};
