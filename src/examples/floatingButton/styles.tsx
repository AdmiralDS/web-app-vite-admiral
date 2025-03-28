import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { FloatingButton } from '@admiral-ds/react-ui';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';

const Container = styled.div<{ $reduceMargin?: boolean }>`
  position: relative;
  height: 120px;
  margin-bottom: ${(p) => (p.$reduceMargin ? 0 : 20)}px;
  transform: scale(1);
`;

export const FloatingButtonStyles = () => {
  return (
    <>
      <ExampleSection text="Компонент имеет два размера – M (40 px) и XL (56 px). Два типа – Primary и Secondary.">
        <Container>
          <FloatingButton dimension="xl" style={{ left: '0px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton style={{ left: '84px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton dimension="xl" appearance="secondary" style={{ left: '184px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton appearance="secondary" style={{ left: '268px' }}>
            <EmailOutline />
          </FloatingButton>
        </Container>
      </ExampleSection>
      <ExampleSection
        text={
          <>
            Компонент можно использовать с бэйджами – Badge и Badge Dot. Для этого необходимо задать параметр badge.
            <br />
            Параметр badge - это специальный объект с настройками, где свойство <i>count</i> отвечает за числовой
            контент бейджа, свойство <i>appearance</i> отвечает за внешний вид бейджа, а свойство <i>dot</i> включает
            отображение Badge Dot вместо Badge.
          </>
        }
      >
        <Container $reduceMargin>
          <FloatingButton dimension="xl" badge={{ dot: true, appearance: 'warning' }} style={{ left: '0px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton badge={{ dot: true, appearance: 'warning' }} style={{ left: '84px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton
            dimension="xl"
            appearance="secondary"
            badge={{ dot: true, appearance: 'warning' }}
            style={{ left: '184px' }}
          >
            <EmailOutline />
          </FloatingButton>
          <FloatingButton appearance="secondary" badge={{ dot: true, appearance: 'warning' }} style={{ left: '268px' }}>
            <EmailOutline />
          </FloatingButton>
        </Container>
        <Container>
          <FloatingButton dimension="xl" badge={{ count: 5, appearance: 'warning' }} style={{ left: '0px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton badge={{ count: 5, appearance: 'warning' }} style={{ left: '84px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton
            dimension="xl"
            appearance="secondary"
            badge={{ count: 5, appearance: 'warning' }}
            style={{ left: '184px' }}
          >
            <EmailOutline />
          </FloatingButton>
          <FloatingButton appearance="secondary" badge={{ count: 5, appearance: 'warning' }} style={{ left: '268px' }}>
            <EmailOutline />
          </FloatingButton>
        </Container>
      </ExampleSection>
      <ExampleSection
        text="Бейджи могут иметь следующие статусы: Info, Error, Success, Warning. Все бейджи имеют одно-пиксельную внутреннюю
        обводку цвета «Neutral 00»."
      >
        <Container $reduceMargin>
          <FloatingButton dimension="xl" badge={{ dot: true }} style={{ left: '0px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton dimension="xl" badge={{ dot: true, appearance: 'error' }} style={{ left: '84px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton dimension="xl" badge={{ dot: true, appearance: 'success' }} style={{ left: '184px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton dimension="xl" badge={{ dot: true, appearance: 'warning' }} style={{ left: '268px' }}>
            <EmailOutline />
          </FloatingButton>
        </Container>
        <Container>
          <FloatingButton dimension="xl" badge={{ count: 5 }} style={{ left: '0px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton dimension="xl" badge={{ count: 5, appearance: 'error' }} style={{ left: '84px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton dimension="xl" badge={{ count: 5, appearance: 'success' }} style={{ left: '184px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton dimension="xl" badge={{ count: 5, appearance: 'warning' }} style={{ left: '268px' }}>
            <EmailOutline />
          </FloatingButton>
        </Container>
      </ExampleSection>
      <ExampleSection text="Компонент можно перевести в состояние disabled">
        <Container>
          <FloatingButton dimension="xl" disabled style={{ left: '0px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton disabled style={{ left: '84px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton dimension="xl" appearance="secondary" disabled style={{ left: '184px' }}>
            <EmailOutline />
          </FloatingButton>
          <FloatingButton appearance="secondary" disabled style={{ left: '268px' }}>
            <EmailOutline />
          </FloatingButton>
        </Container>
      </ExampleSection>
    </>
  );
};
