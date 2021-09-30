import { Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Inner from './pages/Inner';

function App() {
  return (
    <div className="c-app">
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/inner">
        <Inner />
      </Route>
    </div>
  );
}

export default App;
