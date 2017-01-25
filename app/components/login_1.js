
import React from 'react'
import {View, Text, TextInput, Image, Label, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import login from '../styles/login'
import buttonRounded from '../styles/buttonRounded'
import ButtonRounded from '../widgets/ButtonRounded'
import AnimInput from '../widgets/AnimInput'
// import CheckBox from 'react-native-checkbox';
import CheckBox from 'react-native-custom-checkbox';

export default class Login extends React.Component {
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
      <View style={login.container}>
        <Image style={login.bg} resizeMode='stretch'>
          <View style={login.logo}>
            <Image style={login.logoImg} source={require('../assets/logo.png')} resizeMode='stretch' />
          </View>
          <View style={login.appTitle}>
            <Text style={login.titleText}>Open Source Beehives</Text>
            <Text style={login.subtitleText}>BuzzBox Application</Text>
          </View>
          <View style={login.info}>
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
            <View style={login.buttonTop}>
              <View style={login.buttonTopLeft}>
                <CheckBox name="Remember me" checked={true} checkboxStyle={login.check} />
                <Text>Remember me</Text>
              </View>
              <View style={login.buttonTopRight}>
                <Text style={login.forgotPassword}>Forgot password</Text>
              </View>
            </View>
            <View style={login.button}>
              <ButtonRounded text="Login" style={buttonRounded.loginButton} onPress={()=>Actions.hive_data()} />
            </View>
            <View style={login.buttonBottom}>
              <Text style={login.registerText} onPress={()=>Actions.register_user()}>register now!</Text>
            </View>
          </View>
          <View style={login.remainings}>
          </View>
        </Image>
      </View>
    );
  }
}
