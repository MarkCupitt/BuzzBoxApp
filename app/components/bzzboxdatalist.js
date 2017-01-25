
import React from 'react'
import {View, Text, TextInput, Image, Label, ScrollView, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import InfoButton from '../widgets/InfoButton'
import HiveStateButton from '../widgets/HiveStateButton'
import buttonRounded from '../styles/buttonRounded'
import styles from '../styles/bzzboxdatalist'

export default BzzBoxDataListComponent = (props) => {
  const createItem = (item) => (
      <View key={item.id} style={styles.listItem}>
        <View style={styles.listLeft}>
          <Text style={styles.hiveTitle}>
            {item.type}
          </Text>
          <View style={styles.hiveState}>
            <HiveStateButton text="All good" style={buttonRounded.allgoodButton} onPress={()=>Actions.bzzboxstategraph()} />
            <InfoButton text="!" style={buttonRounded.infoButton} onPress={()=>Actions.home()} />
          </View>
        </View>
        <View style={styles.listMiddle}>
        </View>
        <View style={styles.listRight}>
          <View style={styles.state}>
            <Image style={styles.stateImg} source={require('../assets/thermo.png')} resizeMode='stretch' />
            <Text style={styles.stateText}>
              {item.attributes.tempCIn}ºF
            </Text>
          </View>
          <View style={styles.state}>
            <Image style={styles.stateImg} source={require('../assets/hydro.png')} resizeMode='stretch' />
            <Text style={styles.stateText}>
              50%
            </Text>
          </View>
        </View>
      </View>
  )

  return (
    <View style={styles.container}>
      <ScrollView>
        {props.listItems.map(createItem)}
        <View style={styles.addHive}>
          <TouchableHighlight onPress={()=>Actions.addhive()}>
            <Image style={styles.addButton} source={require('../assets/add.png')} resizeMode='stretch' />
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
   )
}