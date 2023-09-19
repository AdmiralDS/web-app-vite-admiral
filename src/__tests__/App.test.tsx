import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import App from '../App';

test('Renders the App page', () => {
  const wrapper = render(
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <App />
      </DropdownProvider>
    </ThemeProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
