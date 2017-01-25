
import React from 'react'
import {View, Text, TextInput, Image, Label, ScrollView, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import styles from '../styles/dashboard'
import buttonRounded from '../styles/buttonRounded'
import ButtonRounded from '../widgets/ButtonRounded'
import AnimInput from '../widgets/AnimInput'
import CheckBox from 'react-native-checkbox';
import BzzBoxDataListComponent from './bzzboxdatalist'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: 'BzzBox',
      listData: [
                  {
                    id: "1",
                    type: "measurements",
                    attributes: {
                                  publishedAt: "2017-01-11T16:37:04.126Z",
                                  deviceId: "3f0033001347333438373338",
                                  tempCIn: 19.8,
                                  tempCOut: 19.8,
                                  pressureIn: 82908,
                                  pressureOut: 82952,
                                  rhumidityOut: 30,
                                  rhumidityIn: 29,
                                  soc: 47,
                                  volts: 3775,
                                  current: -140,
                                  power: -529
                                }
                  }
                ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} resizeMode='stretch'>
          <View style={styles.header}>
            <Text style={styles.headerText}>{this.state.tabName}</Text>
          </View>
          <BzzBoxDataListComponent listItems = {this.state.listData}>
          </BzzBoxDataListComponent>
        </Image>
      </View>
    );
  }
}
