
import React from 'react'
import {View, Text, TextInput, Image, Label, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import login from '../styles/login'
import buttonRounded from '../styles/buttonRounded'
import ButtonRounded from '../widgets/ButtonRounded'
import AnimInput from '../widgets/AnimInput'
import CheckBox from 'react-native-checkbox';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={login.container}>
        <Image style={login.bg} source={require('../assets/bg.jpg')} resizeMode='stretch'>
          <View style={login.logo}>
            <Image style={login.logoImg} source={require('../assets/logo.png')} resizeMode='stretch' />
          </View>
          <View style={login.appTitle}>
            <Text style={login.titleText}>Open Source Beehives</Text>
            <Text style={login.subtitleText}>BuzzBox Application</Text>
          </View>
          <View style={ login.info }>
            <AnimInput
              style={login.input}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'white'}
              iconBackgroundColor={'#f2a59d'}
              inputStyle={{ color: '#464949' }}
            />
            <AnimInput
              style={login.input}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'white'}
              iconBackgroundColor={'#f2a59d'}
              inputStyle={{ color: '#464949' }}
            />
          </View>
          <View style={login.buttons}>
            <View style={ login.buttonTop}>
              <CheckBox label="Remember me" checked={ true } style={login.check} />
            </View>
            <View style={login.button}>
              <ButtonRounded text="Login" style={buttonRounded.loginButton} onPress={()=>Actions.login()} />
            </View>
            <View style={login.buttonButtom}>
              <Text s
            </View>
          </View>
        </Image>
      </View>
    );
  }
}
