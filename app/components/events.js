
import React from 'react'
import {Badge} from 'native-base'
import {View, ScrollView, Text, TextInput, Image, Label, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'

import events from '../styles/events'
import buttonRounded from '../styles/buttonRounded'
import ButtonRounded from '../widgets/ButtonRounded'
import AnimInput from '../widgets/AnimInput'
import CheckBox from 'react-native-custom-checkbox'

export default class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={events.container}>
        <Image style={events.bg} resizeMode='stretch'>
          <View style={events.header}>
            <View style={events.headerLeft}>
              <Icon name="envelope-o" size={20} color="#0045ff">
                <Text style={events.headerLeftText}>Hive</Text>
              </Icon>
            </View>
            <View style={events.headerRight}>
              <Icon name="inbox" class="badge" size={20} color="#0045ff">
                <Text style={events.headerRightText}>MyAccount</Text>
              </Icon>
            </View>
          </View>
          <View style={events.title}>
            <Text style={events.titleText}>Events</Text>
          </View>
          <ScrollView style={events.content}>
            <View style={events.notificationBox}>
              <View style={events.boxWithShadow}>
                <View style={events.boxHeader}>
                  <Text style={events.notificationHeaderTitleText}>Notification: </Text>
                  <Text style={events.notificationHeaderContentText}>Pre-Swarm</Text>
                </View>
                <View style={events.boxContent}>
                  <Text style={events.notificationContentText}>
                    Hive01 was in a <Text style={events.bold}>Pre-Swarm</Text> state on Tuesday, October 11 at 10:00 pm.
                  </Text>
                  <View style={events.buttons}>
                    <ButtonRounded text="Feedback" style={buttonRounded.feedbackButton} onPress={()=>Actions.login()} />
                  </View>
                </View>
              </View>
            </View>
            <View style={events.notificationBox}>
              <View style={events.boxWithShadow}>
                <View style={events.boxHeader}>
                  <Text style={events.notificationHeaderTitleText}>Notification: </Text>
                  <Text style={events.notificationHeaderContentText}>Pre-Swarm</Text>
                </View>
                <View style={events.boxContent}>
                  <Text style={events.notificationContentText}>
                    Hive01 was in a <Text style={events.bold}>Pre-Swarm</Text> state on Tuesday, October 11 at 10:00 pm.
                  </Text>
                  <View style={events.buttons}>
                    <ButtonRounded text="Feedback" style={buttonRounded.feedbackButton} onPress={()=>Actions.login()} />
                  </View>
                </View>
              </View>
            </View>
            <View style={events.notificationBox}>
              <View style={events.boxWithShadow}>
                <View style={events.boxHeader}>
                  <Text style={events.notificationHeaderTitleText}>Notification: </Text>
                  <Text style={events.notificationHeaderContentText}>Pre-Swarm</Text>
                </View>
                <View style={events.boxContent}>
                  <Text style={events.notificationContentText}>
                    Hive01 was in a <Text style={events.bold}>Pre-Swarm</Text> state on Tuesday, October 11 at 10:00 pm.
                  </Text>
                  <View style={events.buttons}>
                    <ButtonRounded text="Feedback" style={buttonRounded.feedbackButton} onPress={()=>Actions.login()} />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </Image>
      </View>
    );
  }
}
