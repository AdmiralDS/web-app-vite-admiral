import { useState } from 'react';
import styled from 'styled-components';
import { Drawer, DrawerTitle, DrawerContent, Button } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const DrawerContentArea = styled.div`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, ${(p) => p.theme.color['Success/Success 20']});
`;

export const DrawerWidth = () => {
  const [opened, setOpened] = useState(false);

  return (
    <ExampleSection>
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
    </ExampleSection>
  );
};
