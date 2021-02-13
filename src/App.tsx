import { GameOptions } from './components/GameOptions';
import { Main } from './components/Main';
import { Results } from './components/Results';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Links</h1>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/gameOptions">GameOptions</Link>
      </li>
      <li>
        <Link to="/results">Results</Link>
      </li>
      <Switch>
        <Route path="/gameOptions">
          <GameOptions />
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
