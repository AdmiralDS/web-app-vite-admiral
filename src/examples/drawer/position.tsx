import { useState } from 'react';
import styled from 'styled-components';
import { Drawer, DrawerTitle, DrawerContent, Button } from '@admiral-ds/react-ui';
import type { DrawerProps } from '@admiral-ds/react-ui';
import ArrowLeftOutline from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg?react';
import ArrowRightOutline from '@admiral-ds/icons/build/system/ArrowRightOutline.svg?react';
import { ExampleSection } from '#routes/-helpers/examples';

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const DrawerContentArea = styled.div`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, ${(p) => p.theme.color['Success/Success 20']});
`;

export const DrawerPosition = () => {
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState<DrawerProps['position']>('right');

  return (
    <ExampleSection>
      <ButtonWrapper>
        <Button
          onClick={() => {
            setPosition('left');
            setOpened(true);
          }}
        >
          <ArrowLeftOutline />
          Open drawer with 'left' position
        </Button>
        <Button
          onClick={() => {
            setPosition('right');
            setOpened(true);
          }}
        >
          Open drawer with 'right' position
          <ArrowRightOutline />
        </Button>
      </ButtonWrapper>
      <Drawer
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
        position={position}
        closeOnBackdropClick
        closeOnEscapeKeyDown
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent>
          <DrawerContentArea />
        </DrawerContent>
      </Drawer>
    </ExampleSection>
  );
};
