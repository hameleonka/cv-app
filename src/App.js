import {
  Route, Redirect, Switch,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';

import './assets/styles/normalize.css';

function App() {
  return (
    <div className="c-app">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/inner">
          <Inner />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
