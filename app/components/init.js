
import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'

import init from '../styles/init'

export default class Init extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout(() => {
      // Actions.bzzboxstategraph();
      // Actions.home();
      // Actions.addhive();
      Actions.login();
      // Actions.signup();
      // Actions.register_user();
      // Actions.register_hive();
      // Actions.events();
      // Actions.hive_data();
    }, 50);
  }

  render() {
    return (
      <View style={init.container}>
        <Text style={init.header}>{'INITIAL PAGE'}</Text>
      </View>
    );
  }
}

