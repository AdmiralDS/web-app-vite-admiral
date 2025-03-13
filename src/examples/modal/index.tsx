import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Modal, ModalButtonPanel, ModalContent, ModalTitle } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/modal/')({
  component: () => <Template />,
  staticData: {
    title: 'Modal. Базовый пример',
    description:
      'Модальное окно используется для ситуаций, когда требуется акцентировать внимание пользователя на подтверждении какого-либо действия. Всплывает по центру страницы и блокирует содержимое страницы, которое расположено под модальным окном. Для затемнения страницы используется стиль Opacity/Modal, имеющий 60% прозрачности черного цвета.',
  },
});
