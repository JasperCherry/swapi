import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { Game } from './components/Game';
import { Main } from './components/Main';
import { Results } from './components/Results';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeText, GlobalStyles, MainFrame } from './App.styled';

const App = () => {
  const [isLightTheme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MainFrame>
        <ThemeText
          onClick={() => setTheme(!isLightTheme)}
        >
            click to change theme - {isLightTheme ? 'light' : 'dark'}
        </ThemeText>
        <Switch>
          <Route path='/game'>
            <Game />
          </Route>
          <Route path='/results'>
            <Results />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </MainFrame>
    </ThemeProvider>
  );
}

export default App;
