
import React from 'react'
import {View, Text, TextInput, Image, Label, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import styles from '../styles/signup'
import buttonRounded from '../styles/buttonRounded'
import ButtonRounded from '../widgets/ButtonRounded'
import AnimInput from '../widgets/AnimInput'
// import CheckBox from 'react-native-checkbox';
import CheckBox from 'react-native-custom-checkbox';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    fetch('http://test.com/v1/auth',
      {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, 
      body: JSON.stringify({username: 'admintest', password: 'test'}) })
    .then((response) => response.json())
    .then((responseData) => {
      console.log('$$$--------', responseData);
    })
    .catch((error) => {
      console.log('BUG ======== ', error);
    })
    .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} resizeMode='stretch'>
          <View style={styles.appTitle}>
            <Text style={styles.titleText}>BzzBox</Text>
            <Text style={styles.subtitleText}>Get to know your bees</Text>
          </View>
          <View style={styles.info}>
            <AnimInput
              style={styles.input}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'white'}
              iconBackgroundColor={'#f2a59d'}
              inputStyle={{ color: '#464949' }}
            />
            <AnimInput
              style={styles.input}
              iconClass={FontAwesomeIcon}
              iconName={'envelope'}
              iconColor={'white'}
              iconBackgroundColor={'#f2a59d'}
              inputStyle={{ color: '#464949' }}
            />
            <AnimInput
              style={styles.input}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'white'}
              iconBackgroundColor={'#f2a59d'}
              inputStyle={{ color: '#464949' }}
              passwordStyle={true}
            />
          </View>
          <View style={styles.buttons}>
            <View style={styles.button}>
              <ButtonRounded text="Signup" style={buttonRounded.loginButton} onPress={()=>Actions.hive_data()} />
            </View>
            <View style={styles.buttonBottom}>
              <Text style={styles.textInput}>Already have an account?</Text>
              <Text style={{color: '#fff'}} onPress={()=>Actions.login()}>Log in</Text>
            </View>
          </View>
          <View style={styles.remainings}>
            <Text style={styles.bottomText}>By signing up you agree to Terms of Service</Text>
          </View>
        </Image>
      </View>
    );
  }
}
