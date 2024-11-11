import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';
import { Drawer, DrawerTitle, DrawerContent, Button } from '@admiral-ds/react-ui';

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

export const DrawerWidth = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setOpened(true)}>Open drawer</Button>
      <Drawer
        isOpen={opened}
        onClose={() => setOpened(false)}
        closeOnBackdropClick
        closeOnEscapeKeyDown
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent style={{ width: '500px' }}>
          <ContentArea />
        </DrawerContent>
      </Drawer>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/drawer/width')({
  component: () => <DrawerWidth />,
  staticData: {
    title: 'Drawer. Ширина компонента',
    description:
      'Ширина компонента задается пользователем, но не меньше 320 px. Drawer подстраивает свою ширину под ширину контента, либо пользователь может задать ширину компонента напрямую через параметры style или используя classname.',
  },
});
