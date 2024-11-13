import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';
import { Drawer, DrawerTitle, DrawerContent, Button } from '@admiral-ds/react-ui';
import { ContentArea } from '../../-helpers/examples';

const DrawerContentArea = styled.div`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, ${(p) => p.theme.color['Success/Success 20']});
`;

export const DrawerWidth = () => {
  const [opened, setOpened] = useState(false);

  return (
    <ContentArea>
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
          <DrawerContentArea />
        </DrawerContent>
      </Drawer>
    </ContentArea>
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
