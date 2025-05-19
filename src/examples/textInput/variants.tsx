import { ChangeEvent } from 'react';
import { InputField } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const TextInputVariants = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    console.log(inputValue);
  };
  return (
    <>
      <ExampleSection text="С возможностью очистки поля (проп 'displayClearIcon').">
        <InputField
          data-container-id="inputFieldClearIcon"
          defaultValue="Default Value"
          onChange={handleChange}
          displayClearIcon
        />
      </ExampleSection>
      <ExampleSection text="Поле ввода с возможностью скрытия вводимых символов. Чаще всего используется для ввода паролей.">
        <InputField
          data-container-id="inputFieldPassword"
          label="Поле для ввода пароля (type='password')"
          type="password"
        />
      </ExampleSection>
      <ExampleSection text="В ситуации слишком длинного текста при наведении на поле ввода появляется тултип.">
        <InputField
          data-container-id="inputFieldTooltip"
          defaultValue="At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights. At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights. At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights. At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights. At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights."
          onChange={handleChange}
        />
      </ExampleSection>
    </>
  );
};
