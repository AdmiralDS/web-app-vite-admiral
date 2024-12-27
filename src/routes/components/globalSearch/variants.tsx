import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { GlobalSearchWithLogic } from '../../-helpers/globalSearch';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const queryClient = new QueryClient();

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];

export const Template = () => {
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

export const Route = createFileRoute('/components/globalSearch/variants')({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Template />
    </QueryClientProvider>
  ),
  staticData: {
    title: 'GlobalSearch. Варианты',
    description: '',
  },
});
