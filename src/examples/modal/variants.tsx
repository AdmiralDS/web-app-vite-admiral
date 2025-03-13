import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
import {
  Button,
  InputField,
  Modal,
  ModalButtonPanel,
  ModalContent,
  ModalTitle,
  SelectField,
  Option,
} from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
`;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

type Props = {
  onYesClick: (p: { selected: number | string | null; inputValue: string }) => void;
  onNoClick: () => void;
};

const ModalForm = ({ onYesClick, onNoClick }: Props) => {
  const [selected, setSelected] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <ModalContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <Separator />
        <SelectField
          label="label"
          className="Search"
          value={selected}
          onChange={handleSelectChange}
          placeholder="Placeholder"
        >
          {OPTIONS_SIMPLE.map((option, ind) => (
            <Option key={option} value={option} disabled={ind === 4}>
              {option}
            </Option>
          ))}
        </SelectField>
        <Separator />
        <InputField
          label="введите значение"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </ModalContent>
      <ModalButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ selected, inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </ModalButtonPanel>
    </>
  );
};

export const Template = () => {
  const [opened1, setOpened1] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [opened3, setOpened3] = useState(false);
  const [opened4, setOpened4] = useState(false);
  const [opened5, setOpened5] = useState(false);

  return (
    <>
      <ExampleSection text="Стандартное модальное окно с двумя кнопками — главной и вторичной">
        <Button onClick={() => setOpened1(true)}>Open modal with 2 buttons</Button>
        {opened1 && (
          <Modal
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
              <Button appearance="secondary" dimension="m" onClick={() => setOpened1(false)}>
                No button
              </Button>
            </ModalButtonPanel>
          </Modal>
        )}
      </ExampleSection>
      <ExampleSection text="Стандартное модальное окно с одной главной кнопкой">
        <Button onClick={() => setOpened2(true)}>Open modal with 1 button</Button>
        {opened2 && (
          <Modal
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
      <ExampleSection text="Стандартное модальное окно без кнопок">
        <Button onClick={() => setOpened3(true)}>Open modal without buttons</Button>
        {opened3 && (
          <Modal
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
          </Modal>
        )}
      </ExampleSection>
      <ExampleSection text="Модальное окно с полями ввода">
        <Button onClick={() => setOpened4(true)}>Open model with input fields</Button>
        {opened4 && (
          <Modal
            onClose={() => {
              setOpened4(false);
            }}
            aria-labelledby="modal-title"
          >
            <ModalTitle id="modal-title">Modal title</ModalTitle>
            <ModalForm
              onYesClick={(p) => {
                // eslint-disable-next-line no-console
                console.log(`value ${p.inputValue}`);
                setOpened4(false);
              }}
              onNoClick={() => setOpened4(false)}
            />
          </Modal>
        )}
      </ExampleSection>
      <ExampleSection text="Модальное окно с произвольным наполнением">
        <Button onClick={() => setOpened5(true)}>Open model with custom content</Button>
        {opened5 && (
          <Modal
            onClose={() => {
              setOpened5(false);
            }}
            aria-labelledby="modal-title"
          >
            <h1 id="modal-title" style={{ paddingLeft: '24px' }}>
              <strong>Modal title</strong>
            </h1>
            <i style={{ paddingLeft: '24px' }}>
              Экстраполяция расширения этой Вселенной назад во времени приводит к точке космической сингулярности,
              вблизи которой ныне известные законы физики перестают работать. Время же расширения из этой сингулярности
              до современного состояния гулярности.
            </i>
            <div
              style={{
                marginTop: '40px',
                width: '80%',
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '24px',
              }}
            >
              <Button appearance="primary" dimension="m" onClick={() => setOpened5(false)}>
                First button
              </Button>
              <Button appearance="primary" dimension="m" onClick={() => setOpened5(false)}>
                Second button
              </Button>
              <Button appearance="primary" dimension="m" onClick={() => setOpened5(false)}>
                Third button
              </Button>
            </div>
          </Modal>
        )}
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/modal/variants')({
  component: () => <Template />,
  staticData: {
    title: 'Modal. Наполнение',
    description: '',
  },
});
