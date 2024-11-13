import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, InputField } from '@admiral-ds/react-ui';
import { ContentArea } from '../../-helpers/examples';

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

export const DrawerNonClosable = () => {
  const [opened, setOpened] = useState(false);

  return (
    <ContentArea>
      <Button onClick={() => setOpened(true)}>Open non-closable drawer</Button>
      <Drawer isOpen={opened} displayCloseIcon={false} style={{ width: '480px' }} aria-labelledby="drawer-title">
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
    </ContentArea>
  );
};

export const Route = createFileRoute('/components/drawer/nonClosable')({
  component: () => <DrawerNonClosable />,
  staticData: {
    title: 'С обязательным условием (non-closable Drawer)',
    description:
      'В некоторых случаях применим Drawer с обязательным условием (non-closable Drawer), то есть такая панель, которую можно закрыть только нажав одну из кнопок в футере. Крестик закрытия отсутствует, нажатие на затемненную область ни к чему не приводит. Для того чтобы крестик закрытия отсутствовал используйте параметр displayCloseIcon равный false.',
  },
});
