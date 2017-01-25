
import React from 'react'
import {View, Text, TextInput, Image, Label, ScrollView, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import styles from '../styles/settings'
import buttonRounded from '../styles/buttonRounded'
import ButtonRounded from '../widgets/ButtonRounded'
import AnimInput from '../widgets/AnimInput'
import CheckBox from 'react-native-checkbox';
import ActivityDataListComponent from './activitydatalist'

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: 'Settings',
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
        <Image style={styles.bg} resizeMode='stretch'>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {this.state.tabName}
            </Text>
          </View>
          <Text style={styles.profileTitle}>
            PROFILE
          </Text>
          <View style={styles.profile}>
            <View style={styles.profileInfo}>
              <View style={styles.infoListBorder}>
                <Text style={styles.infoText}>
                  Mad Max
                </Text>
              </View>
              <View style={styles.infoListBorder}>
                <Text style={styles.infoText}>
                  madmax@gmail.com
                </Text>
              </View>
              <View style={styles.infoListBorder}>
                <Text style={styles.infoText}>
                  +1 215 879 39 38
                </Text>
              </View>
              <View style={styles.infoListNonBorder}>
                <Text style={styles.infoText}>
                  West Lake
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.notificationsTitle}>
            NOTIFICATIONS
          </Text>
          <View style={styles.notifications}>
            <View style={styles.notificationsInfo}>
              <View style={styles.notificationsListBorder}>
                <View style={styles.notificationsName}>
                  <Text style={styles.infoText}>
                    Pre-swarm
                  </Text>
                </View>
                <View style={styles.notificationsSMS}>
                  <Text style={styles.infoText}>
                    SMS
                  </Text>
                </View>
                <View style={styles.notificationsEmail}>
                  <Image style={styles.emailImg} source={require('../assets/email.png')} resizeMode='stretch' />
                </View>
                <View style={styles.notificationsAlarm}>
                  <Image style={styles.alarmImg} source={require('../assets/alarm.png')} resizeMode='stretch' />
                </View>
              </View>
              <View style={styles.notificationsListBorder}>
                <View style={styles.notificationsName}>
                  <Text style={styles.infoText}>
                    Swarm
                  </Text>
                </View>
                <View style={styles.notificationsSMS}>
                  <Text style={styles.infoText}>
                    SMS
                  </Text>
                </View>
                <View style={styles.notificationsEmail}>
                  <Image style={styles.emailImg} source={require('../assets/email.png')} resizeMode='stretch' />
                </View>
                <View style={styles.notificationsAlarm}>
                  <Image style={styles.alarmImg} source={require('../assets/alarm.png')} resizeMode='stretch' />
                </View>
              </View>
              <View style={styles.notificationsListBorder}>
                <View style={styles.notificationsName}>
                  <Text style={styles.infoText}>
                    Wax Moths Attack
                  </Text>
                </View>
                <View style={styles.notificationsSMS}>
                  <Text style={styles.infoText}>
                    SMS
                  </Text>
                </View>
                <View style={styles.notificationsEmail}>
                  <Image style={styles.emailImg} source={require('../assets/email.png')} resizeMode='stretch' />
                </View>
                <View style={styles.notificationsAlarm}>
                  <Image style={styles.alarmImg} source={require('../assets/alarm.png')} resizeMode='stretch' />
                </View>
              </View>
              <View style={styles.notificationsListNonBorder}>
                <View style={styles.notificationsName}>
                  <Text style={styles.infoText}>
                    Varroa Mites Attack
                  </Text>
                </View>
                <View style={styles.notificationsSMS}>
                  <Text style={styles.infoText}>
                    SMS
                  </Text>
                </View>
                <View style={styles.notificationsEmail}>
                  <Image style={styles.emailImg} source={require('../assets/email.png')} resizeMode='stretch' />
                </View>
                <View style={styles.notificationsAlarm}>
                  <Image style={styles.alarmImg} source={require('../assets/alarm.png')} resizeMode='stretch' />
                </View>
              </View>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}
