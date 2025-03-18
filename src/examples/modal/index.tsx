import { useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { Button, Modal, ModalButtonPanel, ModalContent, ModalTitle } from '@admiral-ds/react-ui';

export const ModalBasic = () => {
  const [opened, setOpened] = useState(false);

  return (
    <ExampleSection>
      <Button onClick={() => setOpened(true)}>Open modal with 1 button</Button>
      {opened && (
        <Modal
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Экстраполяция расширения этой Вселенной назад во времени приводит к точке космической сингулярности, вблизи
            которой ныне известные законы физики перестают работать. Время же расширения из этой сингулярности до
            современного состояния гулярности.
          </ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Yes button
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </ExampleSection>
  );
};
