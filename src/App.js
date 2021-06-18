import React from 'react';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/repos/:login">
          <Repositories/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
