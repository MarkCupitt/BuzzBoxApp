
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Init from '../containers/init'
import Signup from '../containers/signup'
import Login from '../containers/login'
import Home from '../containers/home'
import BzzboxStateGraph from '../containers/bzzboxstategraph'
import Activity from '../containers/activity'
import Settings from '../containers/settings'
import AddHive from '../containers/addhive'
import Events from '../containers/events'
import HiveData from '../containers/hive_data'
import {Router, Scene} from 'react-native-router-flux'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../reducers/'

var store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="init" component={Init} title="Init" hideNavBar={true} initial={true} />
            <Scene key="signup" component={Signup} title="Signup" hideNavBar={true} />
            <Scene key="login" component={Login} title="Login" hideNavBar={true} />
            <Scene key="home" component={Home} title="Home" hideNavBar={true} />
            <Scene key="bzzboxstategraph" component={BzzboxStateGraph} title="BzzboxStateGraph" hideNavBar={true} />
            <Scene key="activity" component={Activity} title="Activity" hideNavBar={true} />
            <Scene key="settings" component={Settings} title="Settings" hideNavBar={true} />
            <Scene key="addhive" component={AddHive} title="AddHive" hideNavBar={true} />
            <Scene key="events" component={Events} title="Events" hideNavBar={true} />
            <Scene key="hive_data" component={HiveData} title="HiveData" hideNavBar={true} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
