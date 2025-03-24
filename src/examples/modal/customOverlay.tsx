import { useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { Button, Modal, ModalContent, ModalTitle } from '@admiral-ds/react-ui';
import { css } from 'styled-components';

const overlayStyles = css`
  background-color: #ffdddd66;
`;

export const ModalCustomOverlay = () => {
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
