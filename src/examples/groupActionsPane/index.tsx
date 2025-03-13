import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
import {
  Button,
  GroupActionsPane,
  PaneColumn,
  PaneMenuProps,
  PaneSeparator,
  TextButton,
  typography,
} from '@admiral-ds/react-ui';
import GovernmentOutline from '@admiral-ds/icons/build/category/GovernmentOutline.svg?react';
import TelegramOutline from '@admiral-ds/icons/build/communication/TelegrammOutline.svg?react';
import AlertOutline from '@admiral-ds/icons/build/category/AlertOutline.svg?react';
import CardSolid from '@admiral-ds/icons/build/finance/CardSolid.svg?react';

const SettingsMenu = styled.div`
  width: 320px;
  padding: 20px;
  ${typography['Body/Body 2 Long']}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 28px;
  & > button:first-child {
    margin-right: 8px;
  }
`;

const columns: PaneColumn[] = [
  { id: 'transfer_type', title: 'Тип сделки', visible: true },
  { id: 'transfer_date', title: 'Дата сделки', visible: true },
  { id: 'transfer_amount', title: 'Сумма', visible: false },
  { id: 'currency', title: 'Валюта', visible: true },
  { id: 'rate', title: 'Ставка', visible: true },
  { id: 'status', title: 'Статус', visible: true },
  {
    id: 'custom',
    title: 'Очень длинное название поля, которое не помещается в выпадающий список по ширине',
    visible: false,
  },
];

export const Template = () => {
  const dimension = 'm';
  const [columnsVisibility, setColumnsVisibility] = useState(columns);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchEnter = () => {
    // eslint-disable-next-line no-console
    console.log('Search input opened');
  };

  const handleSearchLeave = () => {
    // eslint-disable-next-line no-console
    console.log('Search input left');
  };

  const renderSettingsMenu = ({ closeMenu }: PaneMenuProps) => (
    <SettingsMenu>
      Здесь могут быть опции с настройками и кнопки для применения/сбрасывания настроек
      <ButtonWrapper>
        <Button dimension="s" onClick={closeMenu}>
          Сохранить
        </Button>
        <Button dimension="s" onClick={closeMenu}>
          Очистить
        </Button>
      </ButtonWrapper>
    </SettingsMenu>
  );

  return (
    <ExampleSection>
      <GroupActionsPane
        searchValue={searchValue}
        onChangeSearchValue={handleChangeSearchValue}
        columns={columnsVisibility}
        onColumnsChange={setColumnsVisibility}
        onSearchEnter={handleSearchEnter}
        onSearchLeave={handleSearchLeave}
        columnsButtonDropContainerStyle={{ dropContainerClassName: 'columnsButtonDropContainerClass' }}
        settingsButtonDropContainerStyle={{ dropContainerClassName: 'settingsButtonDropContainerClass' }}
        renderSettingsMenu={renderSettingsMenu}
      >
        <TextButton text={'Action 1'} dimension={dimension} iconStart={<GovernmentOutline />} />
        <TextButton text={'Action 2'} dimension={dimension} iconStart={<TelegramOutline />} />
        <TextButton text={'Action 3'} dimension={dimension} iconStart={<AlertOutline />} disabled />
        <PaneSeparator dimension={dimension} />
        <TextButton text={'Action 4'} dimension={dimension} iconStart={<CardSolid />} />
      </GroupActionsPane>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/groupActionsPane/')({
  component: () => <Template />,
  staticData: {
    title: 'GroupActionsPane. Базовый пример',
    description: '',
  },
});
