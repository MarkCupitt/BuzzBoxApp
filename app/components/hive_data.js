
import React from 'react'
import {Badge} from 'native-base'
import {View, ScrollView, Text, TextInput, Image, Label, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../styles/hive_data'
import buttonRounded from '../styles/buttonRounded'
import ButtonRounded from '../widgets/ButtonRounded'
import AnimInput from '../widgets/AnimInput'
import CheckBox from 'react-native-custom-checkbox'
import AreaSpline from '../widgets/AreaSpline'
import Theme from '../widgets/Theme'
import data from '../resources/data'

type State = {
  activeIndex: number,
  hiveData: any
}

export default class HiveData extends React.Component {
  
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      hiveData: data.hiveData[1],
      tempInStatus: false,
      humidInStatus: false,
      tempOutStatus: false,
      humidOutStatus: false,
      baroPressStatus: false,
      accelStatus: false,
      decibelStatus: false,
      batteryStatus: false

    };
    this._shuffle = this._shuffle.bind(this);
  }

  toggleStatus
  _shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  render() {
    const height = 250;
    const width = 450;

    return (
      <View style={styles.container}>
        <Image style={styles.bg} resizeMode='stretch'>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Icon name="envelope-o" size={20} color="#0045ff">
                <Text style={styles.headerLeftText}>Hive</Text>
              </Icon>
            </View>
            <View style={styles.headerRight}>
              <Icon name="inbox" class="badge" size={20} color="#0045ff">
                <Text style={styles.headerRightText}>MyAccount</Text>
              </Icon>
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>[Beehive 01] Data</Text>
          </View>
          <View style={styles.graphArea}>
            <AreaSpline width={width} height={height} data={this.state.hiveData} color={Theme.colors[this.state.activeIndex]} />
          </View>
          <View style={styles.parameterCheckbox}>
            <View style={styles.checkboxTop}>
              <View style={styles.parameter}>
                <CheckBox checked={true} checkboxStyle={styles.check} />
                <Text style={styles.checkText}>Temperature Inside</Text>
              </View>
              <View style={styles.parameter}>
                <CheckBox checked={true} checkboxStyle={styles.check} />
                <Text style={styles.checkText}>Humidity Inside</Text>
              </View>
              <View style={styles.parameter}>
                <CheckBox checked={true} checkboxStyle={styles.check} />
                <Text style={styles.checkText}>Temperature Outside</Text>
              </View>
              <View style={styles.parameter}>
                <CheckBox checked={true} checkboxStyle={styles.check} />
                <Text style={styles.checkText}>Humidity Outside</Text>
              </View>
            </View>
            <View style={styles.checkboxBottom}>
              <View style={styles.parameter}>
                <CheckBox checked={true} checkboxStyle={styles.check} />
                <Text style={styles.checkText}>Barometric Pressure</Text>
              </View>
              <View style={styles.parameter}>
                <CheckBox checked={true} checkboxStyle={styles.check} />
                <Text style={styles.checkText}>Accelerometer</Text>
              </View>
              <View style={styles.parameter}>
                <CheckBox checked={true} checkboxStyle={styles.check} />
                <Text style={styles.checkText}>Decibel Level</Text>
              </View>
              <View style={styles.parameter}>
                <CheckBox checked={true} checkboxStyle={styles.check} />
                <Text style={styles.checkText}>Battery</Text>
              </View>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}
