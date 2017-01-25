
import React from 'react'
import {View, Text, TextInput, Image, Label, TabBarIOS, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import styles from '../styles/home'
import buttonRounded from '../styles/buttonRounded'
import ButtonRounded from '../widgets/ButtonRounded'
import AnimInput from '../widgets/AnimInput'
import CheckBox from 'react-native-checkbox'

import Dashboard from './dashboard'
import Activity from './activity'
import Settings from './settings'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'dashboard'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'dashboard'}
          systemIcon="featured"
          title="Dashboard"
          onPress={() => {
              this.setState({
                  selectedTab: 'dashboard',
              });
          }}>
            <Dashboard/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'activity'}
          systemIcon="favorites"
          title="Activity"
          onPress={() => {
                this.setState({
                    selectedTab: 'activity',
                });
          }}>
          <Activity/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'settings'}
          systemIcon="contacts"
          title="Settings"
          onPress={() => {
                this.setState({
                    selectedTab: 'settings',
                });
          }}>
          <Settings/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
