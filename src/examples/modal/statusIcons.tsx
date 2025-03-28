import { useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import {
  Button,
  Modal,
  ModalButtonPanel,
  ModalContent,
  ModalStatusIcon,
  ModalStatusIconType,
  ModalTitle,
  TooltipHoc,
} from '@admiral-ds/react-ui';
import InfoOutline from '@admiral-ds/icons/build/service/InfoOutline.svg?react';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';
import CloseCircleOutline from '@admiral-ds/icons/build/service/CloseCircleOutline.svg?react';
import ErrorOutline from '@admiral-ds/icons/build/service/ErrorOutline.svg?react';

const TooltipedButton = TooltipHoc(Button);

export const StatusIcon = () => {
  const [opened, setOpened] = useState(false);
  const [iconStatus, setIconStatus] = useState<ModalStatusIconType>('information');

  return (
    <ExampleSection>
      <div style={{ display: 'flex', gap: '5px' }}>
        <TooltipedButton
          onClick={() => {
            setIconStatus('success');
            setOpened(true);
          }}
          iconStart={<CheckOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with success status icon'}
          tooltipPosition={'bottom'}
        />
        <TooltipedButton
          onClick={() => {
            setIconStatus('information');
            setOpened(true);
          }}
          iconStart={<InfoOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with information status icon'}
          tooltipPosition={'bottom'}
        />
        <TooltipedButton
          onClick={() => {
            setIconStatus('danger');
            setOpened(true);
          }}
          iconStart={<CloseCircleOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with danger status icon'}
          tooltipPosition={'bottom'}
        />
        <TooltipedButton
          onClick={() => {
            setIconStatus('warning');
            setOpened(true);
          }}
          iconStart={<ErrorOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with warning status icon'}
          tooltipPosition={'bottom'}
        />
      </div>
      {opened && (
        <Modal
          closeOnEscapeKeyDown
          closeOnOutsideClick
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalStatusIcon status={iconStatus} />
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Экстраполяция расширения Вселенной назад во времени приводит к точке космической сингулярности, вблизи
            которой ныне известные законы физики перестают работать. Время же расширения из этой космической
            сингулярности до современного состояния называют возрастом Вселенной; по различным данным, оно составляет
            приблизительно 14 млрд лет.
          </ModalContent>
          <ModalButtonPanel>
            <Button
              appearance="primary"
              dimension="m"
              onClick={() => {
                setOpened(false);
              }}
            >
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
