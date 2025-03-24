import * as React from 'react';

import { Button, Modal, ModalButtonPanel, ModalContent, ModalTitle, Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

type CityProps = {
  'data-id'?: string;
  'data-value'?: string;
  disabled?: boolean | undefined;
  value: string;
};

export const SelectMultiCustomDeleteChip = ({
  placeholder = 'Город',
  options = OPTIONS_CITIES,
  ...props
}: SelectProps & { options?: string[] }) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([options[2]]);
  const [modalOpened, setModalOpened] = React.useState(false);
  const [valueToDelete, setValueToDelete] = React.useState<string | null>(null);

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
  };
  const deleteValue = (value: string) => setSelectValue((prev) => prev.filter((prevValue) => prevValue !== value));

  const onCloseModal = () => {
    setValueToDelete(null);
    setModalOpened(false);
  };
  const onOpenModal = () => setModalOpened(true);

  const onChipClose = (data: CityProps) => {
    // eslint-disable-next-line no-console
    console.log(data);
    setValueToDelete(data.value);
    onOpenModal();
  };

  const renderChip = (option: string, disabled: boolean) => () => ({
    children: `г. ${option}`,
    onClose: onChipClose,
    disabled: disabled,
  });

  const onYes = () => {
    if (valueToDelete) deleteValue(valueToDelete);
    onCloseModal();
  };

  return (
    <ExampleSection
      text="Также следует помнить, что при использовании renderChip в Option нужно прокидывать все пропсы, включая disabled
        и readOnly при наличии, для корректного отображения чипсов."
    >
      <Select
        {...props}
        placeholder={placeholder}
        value={selectValue}
        multiple={true}
        onSelectedChange={handleSelectedChange}
        mode="searchSelect"
      >
        {options.map((option, ind) => (
          <Option
            key={ind}
            data-id={`Id-${ind}`}
            data-value={`My Value ${option}`}
            value={option}
            renderChip={renderChip(option, options[2] === option)}
            disabled={options[2] === option}
          >
            {option}
          </Option>
        ))}
      </Select>
      {modalOpened && (
        <Modal onClose={onCloseModal}>
          <ModalTitle>Попап неуверенности</ModalTitle>
          <ModalContent>Уверены, что хотите удалить опцию?</ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={onYes}>
              Да!
            </Button>
            <Button appearance="secondary" dimension="m" onClick={onCloseModal}>
              Галя, отмена
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </ExampleSection>
  );
};
