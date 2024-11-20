import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, InputField } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

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

export const Route = createFileRoute('/components/drawer/withoutBackdrop')({
  component: () => <DrawerWithoutBackdrop />,
  staticData: {
    title: 'Drawer. Без блокировки контента страницы (Backdrop = False)',
    description:
      'Если необходим Drawer без блокировки контента страницы, то необходимо использовать параметр backdrop равный false. В этом случае пользователь сможет одновременно взаимодействовать и с Drawer, и с содержимым страницы. Закрытие Drawer может происходить по клику на крестик, по клику на кнопке в футере панели, по нажатию на клавишу Escape (при closeOnEscapeKeyDown = true).',
  },
});
