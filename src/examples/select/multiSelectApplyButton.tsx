import { ExampleSection } from '#routes/-helpers/examples';
import { Option, Select, Button, MenuActionsPanel } from '@admiral-ds/react-ui';
import * as React from 'react';
import type { SelectProps } from '@admiral-ds/react-ui';

const OPTIONS_CITIES = [
  'Москва',
  'Санкт-Петербург',
  'Ижевск',
  'Тверь',
  'Рязань',
  'Нижний Новгород',
  'Казань',
  'Сургут',
];

export const MultiSelectApplyButton = ({
  placeholder = 'Города',
  options = OPTIONS_CITIES,
  ...props
}: SelectProps & { options?: string[] }) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([options[0]]);
  const [forcedOpen, setForcedOpen] = React.useState(false);

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
  };

  const renderOptions = () => {
    return options.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ));
  };

  const handleApplyButtonClick = () => {
    setForcedOpen(false);
    // eslint-disable-next-line no-console
    console.log('selected', selectValue.toString());
  };

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

  return (
    <ExampleSection>
      <Select
        {...props}
        forcedOpen={forcedOpen}
        value={selectValue}
        multiple={true}
        placeholder={placeholder}
        onSelectedChange={handleSelectedChange}
        displayClearIcon={true}
        mode="searchSelect"
        onChangeDropDownState={setForcedOpen}
        renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
          return (
            <MenuActionsPanel dimension={dimension}>
              <Button dimension={'m'} disabled={selectValue.length === 0} onClick={handleApplyButtonClick}>
                Применить
              </Button>
            </MenuActionsPanel>
          );
        }}
      >
        {renderOptions()}
      </Select>
    </ExampleSection>
  );
};
