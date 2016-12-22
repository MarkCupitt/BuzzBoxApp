
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
      Actions.login();
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

