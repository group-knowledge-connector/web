import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/Home';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Helmet
        defaultTitle="Stdio.wiki - 在这里连接你我的知识"
        titleTemplate="%s - Stdio.wiki"
      />

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
