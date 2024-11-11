import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, ${(p) => p.theme.color['Success/Success 20']});
`;

export const DrawerMobile = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setOpened(true)}>Open mobile drawer</Button>
      <Drawer
        isOpen={opened}
        onClose={() => setOpened(false)}
        mobile
        closeOnEscapeKeyDown
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent>
          <ContentArea />
        </DrawerContent>
        <DrawerButtonPanel>
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            Yes button
          </Button>
          <Button appearance="secondary" dimension="m" onClick={() => setOpened(false)}>
            No button
          </Button>
        </DrawerButtonPanel>
      </Drawer>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/drawer/mobile')({
  component: () => <DrawerMobile />,
  staticData: {
    title: 'Drawer. Адаптив (mobile)',
    description:
      'Адаптируясь на мобильных устройствах, компонент имеет несколько иную структуру, отступы и размеры. На мобильных устройствах компонент всегда появляется с правой стороны экрана. Заполняет весь экран по ширине, кроме стандартного отступа для контента с левой стороны. Для того чтобы перевести компонент в адаптивный режим, используйте параметр mobile.',
  },
});
