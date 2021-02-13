import { Game } from './components/Game';
import { Main } from './components/Main';
import { Results } from './components/Results';
import {
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
