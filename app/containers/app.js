
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Init from '../containers/init'
import Login from '../containers/login'
import RegisterUser from '../containers/register_user'
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
            <Scene key="init" component={ Init } title="Init" hideNavBar={true} initial={true} />
            <Scene key="login" component={ Login } title="Login" hideNavBar={true} />
            <Scene key="register_user" component={ RegisterUser } title="RegisterUser" hideNavBar={true} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
