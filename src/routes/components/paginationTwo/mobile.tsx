import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, MobileBottomContainer } from '../../-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

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
        <MobileBottomContainer style={{ height: '150px' }}>
          <PaginationTwo count={7} page={state} onChange={(_, page) => setState(page)} mobile />
        </MobileBottomContainer>
      </ExampleSection>
      <ExampleSection text="Можно использовать без кнопки “Дальше”, особенно, если не много страниц.">
        <MobileBottomContainer style={{ height: '100px' }}>
          <PaginationTwo
            count={7}
            page={state2}
            onChange={(_, page) => setState2(page)}
            mobile
            showNextBtnMobile={false}
          />
        </MobileBottomContainer>
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
