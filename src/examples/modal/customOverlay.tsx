import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Modal, ModalContent, ModalTitle } from '@admiral-ds/react-ui';
import { css } from 'styled-components';

const overlayStyles = css`
  background-color: #ffdddd66;
`;

export const Template = () => {
  const [opened, setOpened] = useState(false);

  return (
    <ExampleSection>
      <Button onClick={() => setOpened(true)}>Open modal with custom overlay</Button>
      {opened && (
        <Modal
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
          overlayStyledCss={overlayStyles}
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </ModalContent>
        </Modal>
      )}
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/modal/customOverlay')({
  component: () => <Template />,
  staticData: {
    title: 'Modal. Кастомизация подложки модального окна',
    description:
      'У пользователя есть возможность кастомизировать внешний вид подложки модального окна. Для этого можно воспользоваться параметром overlayStyledCss, чтобы задать миксин со стилями для подложки. Либо можно воспользоваться параметрами overlayClassName, overlayStyle.',
  },
});
