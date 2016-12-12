import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';

// Pages
import Home from './components/home';
import Notifications from './components/notifications';
import HiveList from './components/hive-list';
import HiveProfile from './components/hive-profile';

export default (
<Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="hives">
          <IndexRoute component={HiveList} />
        <Route path=":hiveId" component={HiveProfile} />
      </Route>

      <Route path="notifications">
        <IndexRoute component={Notifications} />
      </Route>

    </Route>
  </Router>
);
