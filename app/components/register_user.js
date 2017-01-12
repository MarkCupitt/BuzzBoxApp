
import React from 'react'
import {View, Text, TextInput, Image, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'

import register_user from '../styles/register_user'
import ButtonRounded from '../widgets/ButtonRounded'
import ButtonRectangularBlue from '../widgets/ButtonRectangularBlue'
import buttonRounded from '../styles/buttonRounded'
import CheckBox from 'react-native-custom-checkbox';

export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={register_user.container}>
        <Image style={register_user.bg} resizeMode='stretch'>
          <View style={register_user.title}>
            <Text style={register_user.titleText}>Create an Account</Text>
          </View>
          <View style={register_user.info}>
            <View style={register_user.infoField}>
              <View style={register_user.infoTitle}>
                <Text style={register_user.infoTitleText}>E-mail: </Text>
              </View>
              <View style={register_user.infoContent}>
                <TextInput style={register_user.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_user.infoField}>
              <View style={register_user.infoTitle}>
                <Text style={register_user.infoTitleText}>Password: </Text>
              </View>
              <View style={register_user.infoContent}>
                <TextInput style={register_user.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_user.infoField}>
              <View style={register_user.infoTitle}>
                <Text style={register_user.infoTitleText}>Confirm Password: </Text>
              </View>
              <View style={register_user.infoContent}>
                <TextInput style={register_user.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_user.infoField}>
              <View style={register_user.infoTitle}>
                <Text style={register_user.infoTitleText}>Nickname: </Text>
              </View>
              <View style={register_user.infoContent}>
                <TextInput style={register_user.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_user.infoField}>
              <View style={register_user.infoTitle}>
                <Text style={register_user.infoTitleText}>Habitual Residence: </Text>
              </View>
              <View style={register_user.infoContent}>
                <TextInput style={register_user.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_user.infoField}>
              <View style={register_user.infoTitle}>
                <Text style={register_user.infoTitleText}>Phone Number: </Text>
              </View>
              <View style={register_user.infoContent}>
                <TextInput style={register_user.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_user.infoField}>
              <View style={register_user.infoTitle}>
                <Text style={register_user.infoTitleText}>Captcha: </Text>
              </View>
              <View style={register_user.infoContent}>
                <TextInput style={register_user.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_user.infoField}>
              <View style={register_user.infoTitle}>
              </View>
              <View>
                <Text style={register_user.infoContentText}>You must make sure that you are a human.</Text>
              </View>            
            </View>
            <View style={register_user.infoField}>
              <View style={register_user.infoTitle}>
              </View>
              <View style={register_user.agreement}>
                <CheckBox checked={true} checkboxStyle={register_user.check} />
                <Text>I had read the agreement</Text>
              </View>
            </View>
          </View>
          <View style={register_user.buttons}>
            <ButtonRounded text="Register" style={buttonRounded.registerButton} onPress={()=>Actions.login()} />
          </View>
          <View style={register_user.remainings}>
          </View>
        </Image>
      </View>
    );
  }
}
