import React, { useState } from 'react';
import { Header, Footer, withQuery } from 'components';
import Home from 'pages/Home';
import MyGiphy from 'pages/MyGiphy';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const [page, setPage] = useState('home');
  return (
    <Router>
      <div id="main">
        <Header page={page} />
        <div className="flex-1 bg-skin">
          <Switch>
            <Route path="/detail/:id">
              <MyGiphy setPage={setPage} />
            </Route>
            <Route path="/:term">
              <Home setPage={setPage} />
            </Route>
            <Route path="/">
              <Home setPage={setPage} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default withQuery(App);
