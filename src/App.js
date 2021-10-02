import { useEffect } from 'react';
import {
  Route, Redirect, Switch, useLocation,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
