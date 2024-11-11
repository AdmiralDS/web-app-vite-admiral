import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { useState } from 'react';

import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, InputField } from '@admiral-ds/react-ui';

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

export const DrawerBasic = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setOpened(true)}>Open drawer with 2 buttons</Button>
      <Drawer
        isOpen={opened}
        onClose={() => setOpened(false)}
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
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/drawer/')({
  component: () => <DrawerBasic />,
  staticData: {
    title: 'Drawer. Базовый пример',
    description:
      'Компонент Drawer — это панель, которая накладывается поверх страницы, выдвигаясь c правой или левой части экрана. Он содержит набор информации или действий.',
  },
});
