import { ChangeEvent, useState } from 'react';
import { Hint, InputField, InputIconButton } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';
import HelpOutline from '@admiral-ds/icons/build/service/HelpOutline.svg?react';

interface InputIcon {
  text: string;
}
const InputIcon = ({ text }: InputIcon) => {
  const handleClick = () => {
    console.log(`${text} clicked`);
  };
  return <InputIconButton icon={HelpOutline} onClick={handleClick} />;
};
const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const InformerIcon = ({ text }: InputIcon) => {
  const [visible, setVisible] = useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);
  const handleIconClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (visible) {
      setVisible(false);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Hint
      renderContent={() => text}
      anchorId="hint_click"
      visibilityTrigger="click"
      visible={visible}
      onVisibilityChange={handleVisibilityChange}
    >
      <InputIconButton icon={HelpOutline} onClick={handleIconClick} />
    </Hint>
  );
};

export const TextInputWithIcon = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    console.log(inputValue);
  };
  return (
    <>
      <ExampleSection text="С иконкой слева.">
        <InputField
          data-container-id="inputFieldIconBefore"
          defaultValue="Default Value"
          onChange={handleChange}
          iconsBefore={<InputIcon text="Icon before" />}
        />
      </ExampleSection>
      <ExampleSection text="С иконками справа.">
        <InputField
          data-container-id="inputFieldIconsAfter"
          defaultValue="Default Value"
          onChange={handleChange}
          iconsAfter={
            <>
              <InputIcon text="First icon after" />
              <InputIcon text="Second icon after" />
              <InputIcon text="Third icon after" />
            </>
          }
        />
      </ExampleSection>
      <ExampleSection text="Поле ввода с информером. Необходимы, если для правильного заполнения поля может потребоваться дополнительная информация. Информер закрывается при клике на крестик, иконку вопроса или зону вне информера.">
        <InputField
          data-container-id="inputFieldInformer"
          defaultValue="Default Value"
          onChange={handleChange}
          iconsAfter={<InformerIcon text={text} />}
        />
      </ExampleSection>
    </>
  );
};
