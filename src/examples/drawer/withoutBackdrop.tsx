import { useState } from 'react';
import styled from 'styled-components';

import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, InputField } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const Separator = styled.div`
  height: 20px;
`;

type Props = {
  onYesClick: (p: { inputValue: string }) => void;
  onNoClick: () => void;
};

const DrawerForm = ({ onYesClick, onNoClick }: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <DrawerContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <Separator />
        <InputField
          label="Введите значение"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </DrawerContent>
      <DrawerButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </DrawerButtonPanel>
    </>
  );
};

export const DrawerWithoutBackdrop = () => {
  const [opened, setOpened] = useState(false);

  return (
    <ExampleSection>
      <Button onClick={() => setOpened(true)}>Open drawer without backdrop</Button>
      <Drawer
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
        backdrop={false}
        closeOnEscapeKeyDown
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerForm
          onYesClick={(p) => {
            // eslint-disable-next-line no-console
            console.log(`value ${p.inputValue}`);
            setOpened(false);
          }}
          onNoClick={() => setOpened(false)}
        />
      </Drawer>
    </ExampleSection>
  );
};
