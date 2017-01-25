
import React from 'react'
import {View, Text, TextInput, Image, Label, ScrollView, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import InfoButton from '../widgets/InfoButton'
import HiveStateButton from '../widgets/HiveStateButton'
import buttonRounded from '../styles/buttonRounded'
import styles from '../styles/activitydatalist'

export default ActivityDataListComponent = (props) => {
  const createItem = (item) => (
      <View key={item.id} style={styles.listItem}>
        <View style={styles.top}>
          <Text style={styles.activityStatement}>Jazz beez is in Pre-swarm state</Text>
          <Text style={styles.activityTime}>2:45 pm, Jan 16, 2017</Text>
          <View style={styles.topBelow}>
            <View style={styles.belowLeft}>
              <InfoButton text="!" style={buttonRounded.infoButton} onPress={()=>Actions.home()} />
              <Text style={styles.infoText}>What should I do?</Text>
            </View>
            <View style={styles.belowMiddle}>
            </View>
            <View style={styles.belowRight}>
              <HiveStateButton text="Pre swarm" style={buttonRounded.preswarmButton} onPress={()=>Actions.home()} />
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomLeft}>
            <Text style={styles.reportMark}>x</Text>
            <Text style={styles.buttonText}>Report a mistake</Text>
          </View>
          <View style={styles.bottomRight}>
            <Text style={styles.confirmMark}>√</Text>
            <Text style={styles.buttonText}>Confirm</Text>
          </View>
        </View>
      </View>
  )

  return (
    <View style={styles.container}>
      <ScrollView>
        {props.listItems.map(createItem)}
      </ScrollView>
    </View>
   )
}