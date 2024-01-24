import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, FontsVTBGroup, DropdownProvider, ContentSwitcherItem, ContentSwitcherItemProps } from '@admiral-ds/react-ui';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <App />
      </DropdownProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// @NOTE: Ошибки TS

interface MyProps extends ContentSwitcherItemProps {
  test?: string;
}

const MyItem = (props: MyProps) => {
  return <ContentSwitcherItem {...props} />>
}

const Test = () => {
  return  <>
    {/*// @FIXME: Не типизируется!*/}
    <ContentSwitcherItem myValue={123}></ContentSwitcherItem>
    {/*// @FIXME: ts ошибка!*/}
    <MyItem active={true}></MyItem>
  </>
}
