
import React from 'react'
import {View, Text, TextInput, Image, Label, ScrollView, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import styles from '../styles/addhive'
import buttonRounded from '../styles/buttonRounded'
import ButtonRounded from '../widgets/ButtonRounded'
import AnimInput from '../widgets/AnimInput'
import CheckBox from 'react-native-checkbox'

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: 'Add Hive',
      listData: [
                  {
                    id: "1",
                    SMS: true,
                    email: false,
                    alarm: false
                  },
                  {
                    id: "2",
                    SMS: false,
                    email: true,
                    alarm: true
                  },
                  {
                    id: "3",
                    SMS: false,
                    email: false,
                    alarm: true
                  },
                  {
                    id: "4",
                    SMS: false,
                    email: true,
                    alarm: true
                  }
                ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} source={require('../assets/3.png')} resizeMode='stretch'>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {this.state.tabName}
            </Text>
          </View>
          <View style={styles.hiveData}>
            <View style={styles.hiveInfo}>
              <View style={styles.infoListBorder}>
                <TextInput
                  placeholder='Type hive name'
                  style={styles.hiveNameInput}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
              </View>
              <View style={styles.infoListBorder}>
                <View style={styles.itemLeft}>
                  <Text style={styles.infoText}>
                    Bee species
                  </Text>
                </View>
                <View style={styles.itemMiddle}>
                </View>  
                <View style={styles.itemRight}>
                  <Image style={styles.nextImg} source={require('../assets/next.png')} resizeMode='stretch' />
                </View>
              </View>
              <View style={styles.infoListBorder}>
                <View style={styles.itemLeft}>
                  <Text style={styles.infoText}>
                    Beehive type
                  </Text>
                </View>
                <View style={styles.itemMiddle}>
                </View>
                <View style={styles.itemRight}>
                  <Image style={styles.nextImg} source={require('../assets/next.png')} resizeMode='stretch' />
                </View>
              </View>
              <View style={styles.infoListNonBorder}>
                <View style={styles.itemLeft}>
                  <Text style={styles.infoText}>
                    Date of installation
                  </Text>
                </View>
                <View style={styles.itemMiddle}>
                  <Text style={styles.infoText}>
                    Today
                  </Text>
                </View>  
                <View style={styles.itemRight}>
                  <Image style={styles.nextImg} source={require('../assets/next.png')} resizeMode='stretch' />
                </View>
              </View>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}
