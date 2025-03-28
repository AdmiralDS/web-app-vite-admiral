import { useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { Button, CheckboxField, Modal, ModalButtonPanel, ModalContent, ModalTitle } from '@admiral-ds/react-ui';

export const ModalScroll = () => {
  const [opened, setOpened] = useState(false);

  return (
    <ExampleSection>
      <Button onClick={() => setOpened(true)}>Open modal with scrollable content</Button>
      {opened && (
        <Modal
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
          style={{ maxHeight: '90vh' }} // IE bug https://github.com/philipwalton/flexbugs#flexbug-3
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            <CheckboxField>Lorem ipsum dolor</CheckboxField>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
            ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis?
          </ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Yes button
            </Button>
            <Button appearance="secondary" dimension="m" onClick={() => setOpened(false)}>
              No button
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </ExampleSection>
  );
};
