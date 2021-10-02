import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './pages/dashboard';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';
import GlobalsStyle, { colorsParams, themesParams } from './styles/globals';

function App(): JSX.Element {
  const [theme, setTheme] = useState('light');

  const getColorsTheme = (): colorsParams => {
    const themes = [darkTheme, lightTheme];
    const themeFinded = themes.find(
      ({ title }: themesParams) => title === theme,
    );
    return themeFinded ? themeFinded.colors : lightTheme.colors;
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('bb8team:theme');
    if (localTheme) setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={() => getColorsTheme()}>
      <Dashboard />
      <GlobalsStyle />
    </ThemeProvider>
  );
}

export default App;
