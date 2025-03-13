import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from 'styled-components';
import { useEffect, useMemo, useState } from 'react';

import { ExampleSection, uid } from '#routes/-helpers/examples';
import {
  keyboardKey,
  getHighlightedFilteredOptions,
  LIGHT_THEME,
  Menu,
  MenuActionsPanel,
  TextButton,
  TextInput,
} from '@admiral-ds/react-ui';
import PlusOutline from '@admiral-ds/icons/build/service/PlusOutline.svg?react';
import { MenuWrapper } from '#routes/-helpers/menu';

const items = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const MenuActionSearch = () => {
  const initialButtonText = 'Добавить';
  const theme = useTheme() || LIGHT_THEME;

  const [options, setOptions] = useState([...items]);
  const [inputValue, setInputValue] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>(initialButtonText);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [active, setActive] = useState<string | undefined>(options[0].id);

  const model = useMemo(() => {
    return getHighlightedFilteredOptions(
      options,
      inputValue,
      theme.locales[theme.currentLocale].suggestInput.emptyMessage,
    );
  }, [options, inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const code = keyboardKey.getCode(e);

    // prevent selecting option on Space press
    if (code === keyboardKey[' ']) {
      e.stopPropagation();
    }
  };

  const handleTextButtonClick = () => {
    const newId = uid();
    const newValue = Math.floor(Math.random());
    const newOption = { id: newId, label: inputValue, value: newValue };
    const newOptions = [newOption, ...options];
    setOptions(newOptions);
    setActive(newId);
  };

  useEffect(() => {
    if (inputValue === '') {
      setButtonText(initialButtonText);
      setButtonDisabled(true);
    } else {
      setButtonText(`${initialButtonText} «${inputValue}»`);
      setButtonDisabled(false);
    }
  }, [inputValue]);

  return (
    <ExampleSection>
      <MenuWrapper style={{ maxWidth: 'fit-content' }}>
        <Menu
          defaultIsActive={false}
          model={model}
          active={active}
          onActivateItem={setActive}
          // eslint-disable-next-line no-console
          onSelectItem={(id) => console.log(`Selected id: ${id}`)}
          renderTopPanel={() => {
            return (
              <MenuActionsPanel dimension="l">
                <TextInput
                  dimension="m"
                  value={inputValue}
                  onChange={handleChange}
                  onKeyDown={(...p) => {
                    handleKeyDown(...p);
                  }}
                />
              </MenuActionsPanel>
            );
          }}
          renderBottomPanel={() => {
            return (
              <MenuActionsPanel dimension="m">
                <TextButton
                  text={buttonText}
                  disabled={buttonDisabled}
                  iconEnd={<PlusOutline />}
                  dimension="m"
                  onClick={handleTextButtonClick}
                />
              </MenuActionsPanel>
            );
          }}
        />
      </MenuWrapper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dropdown/menuActionSearch')({
  component: () => <MenuActionSearch />,
  staticData: {
    title: 'Menu. Пример с Actions и Search',
    description: '',
  },
});
