import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Modal, ModalButtonPanel, ModalContent, ModalTitle } from '@admiral-ds/react-ui';

export const ModalSizes = () => {
  const [opened1, setOpened1] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [opened3, setOpened3] = useState(false);
  const [opened4, setOpened4] = useState(false);

  return (
    <>
      <ExampleSection text="Размер XL - ширина 800px">
        <Button onClick={() => setOpened1(true)}>Open modal, size XL</Button>
        {opened1 && (
          <Modal
            dimension="xl"
            onClose={() => {
              setOpened1(false);
            }}
            aria-labelledby="modal-title"
          >
            <ModalTitle id="modal-title">Modal title</ModalTitle>
            <ModalContent>
              Экстраполяция расширения этой Вселенной назад во времени приводит к точке космической сингулярности,
              вблизи которой ныне известные законы физики перестают работать. Время же расширения из этой сингулярности
              до современного состояния гулярности.
            </ModalContent>
            <ModalButtonPanel>
              <Button appearance="primary" dimension="m" onClick={() => setOpened1(false)}>
                Yes button
              </Button>
            </ModalButtonPanel>
          </Modal>
        )}
      </ExampleSection>
      <ExampleSection text="Размер L - ширина 592px">
        <Button onClick={() => setOpened2(true)}>Open modal, size L</Button>
        {opened2 && (
          <Modal
            dimension="l"
            onClose={() => {
              setOpened2(false);
            }}
            aria-labelledby="modal-title"
          >
            <ModalTitle id="modal-title">Modal title</ModalTitle>
            <ModalContent>
              Экстраполяция расширения этой Вселенной назад во времени приводит к точке космической сингулярности,
              вблизи которой ныне известные законы физики перестают работать. Время же расширения из этой сингулярности
              до современного состояния гулярности.
            </ModalContent>
            <ModalButtonPanel>
              <Button appearance="primary" dimension="m" onClick={() => setOpened2(false)}>
                Yes button
              </Button>
            </ModalButtonPanel>
          </Modal>
        )}
      </ExampleSection>
      <ExampleSection text="Размер M - ширина 488px">
        <Button onClick={() => setOpened3(true)}>Open modal, size M</Button>
        {opened3 && (
          <Modal
            dimension="m"
            onClose={() => {
              setOpened3(false);
            }}
            aria-labelledby="modal-title"
          >
            <ModalTitle id="modal-title">Modal title</ModalTitle>
            <ModalContent>
              Экстраполяция расширения этой Вселенной назад во времени приводит к точке космической сингулярности,
              вблизи которой ныне известные законы физики перестают работать. Время же расширения из этой сингулярности
              до современного состояния гулярности.
            </ModalContent>
            <ModalButtonPanel>
              <Button appearance="primary" dimension="m" onClick={() => setOpened1(false)}>
                Yes button
              </Button>
            </ModalButtonPanel>
          </Modal>
        )}
      </ExampleSection>
      <ExampleSection text="Размер S - ширина 384px">
        <Button onClick={() => setOpened4(true)}>Open modal, size S</Button>
        {opened4 && (
          <Modal
            dimension="s"
            onClose={() => {
              setOpened4(false);
            }}
            aria-labelledby="modal-title"
          >
            <ModalTitle id="modal-title">Modal title</ModalTitle>
            <ModalContent>
              Экстраполяция расширения этой Вселенной назад во времени приводит к точке космической сингулярности,
              вблизи которой ныне известные законы физики перестают работать. Время же расширения из этой сингулярности
              до современного состояния гулярности.
            </ModalContent>
            <ModalButtonPanel>
              <Button appearance="primary" dimension="m" onClick={() => setOpened1(false)}>
                Yes button
              </Button>
            </ModalButtonPanel>
          </Modal>
        )}
      </ExampleSection>
    </>
  );
};
