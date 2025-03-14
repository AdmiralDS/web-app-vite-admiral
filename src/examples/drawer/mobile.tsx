import { useState } from 'react';
import styled from 'styled-components';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const DrawerContentArea = styled.div`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, ${(p) => p.theme.color['Success/Success 20']});
`;

export const DrawerMobile = () => {
  const [opened, setOpened] = useState(false);

  return (
    <ExampleSection>
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
          <DrawerContentArea />
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
    </ExampleSection>
  );
};
