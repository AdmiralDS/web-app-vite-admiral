import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const MobileWrapper = styled.div`
  width: 320px;
  padding-top: 16px;
  box-sizing: border-box;
  border: 8px solid var(--admiral-color-Neutral_Neutral50, ${({ theme }) => theme.color['Neutral/Neutral 50']});
  border-top-style: none;
  background-color: var(--admiral-color-Neutral_Neutral00, ${({ theme }) => theme.color['Neutral/Neutral 00']});
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  margin-bottom: 20px;
`;

const PaginationWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Template = () => {
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(1);

  return (
    <>
      <ExampleSection
        text={
          <>
            Рекомендуется в мобильных версиях больших списков использовать “бесконечный скролл” без компонента
            Pagination. Но если пагинация необходима, то используется мобильная версия.
          </>
        }
      >
        <MobileWrapper style={{ height: '150px' }}>
          <PaginationWrapper>
            <PaginationTwo count={7} page={state} onChange={(_, page) => setState(page)} mobile />
          </PaginationWrapper>
        </MobileWrapper>
      </ExampleSection>
      <ExampleSection text="Можно использовать без кнопки “Дальше”, особенно, если не много страниц.">
        <MobileWrapper style={{ height: '100px' }}>
          <PaginationWrapper>
            <PaginationTwo
              count={7}
              page={state2}
              onChange={(_, page) => setState2(page)}
              mobile
              showNextBtnMobile={false}
            />
          </PaginationWrapper>
        </MobileWrapper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/paginationTwo/mobile')({
  component: () => <Template />,
  staticData: {
    title: 'PaginationTwo. Мобильная версия',
  },
});
