import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Modal, ModalButtonPanel, ModalContent, ModalTitle } from '@admiral-ds/react-ui';

export const Template = () => {
  const [opened, setOpened] = useState(false);

  return (
    <ExampleSection>
      <Button onClick={() => setOpened(true)}>Open modal</Button>
      {opened && (
        <Modal
          displayCloseIcon={false}
          closeOnEscapeKeyDown
          closeOnOutsideClick
          dimension="xl"
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

export const Route = createFileRoute('/components/modal/closeIcon')({
  component: () => <Template />,
  staticData: {
    title: 'Modal. Иконка закрытия',
    description:
      'Во всех модальных окнах можно отключать иконку закрытия (крестик). Также есть возможность закрывать модальное окно при клике вне его и по нажатию Escape.',
  },
});
