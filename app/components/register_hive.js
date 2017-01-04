
import React from 'react'
import {View, Text, TextInput, Image, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'

import register_hive from '../styles/register_hive'
import ButtonRounded from '../widgets/ButtonRounded'
import ButtonRectangularBlue from '../widgets/ButtonRectangularBlue'
import buttonRounded from '../styles/buttonRounded'
import CheckBox from 'react-native-custom-checkbox';

export default class RegisterHive extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={register_hive.container}>
        <Image style={register_hive.bg} resizeMode='stretch'>
          <View style={register_hive.title}>
            <Text style={register_hive.titleText}>Create a Hive</Text>
          </View>
          <View style={register_hive.info}>
            <View style={register_hive.infoField}>
              <View style={register_hive.infoTitle}>
                <Text style={register_hive.infoTitleText}>E-mail: </Text>
              </View>
              <View style={register_hive.infoContent}>
                <TextInput style={register_hive.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_hive.infoField}>
              <View style={register_hive.infoTitle}>
                <Text style={register_hive.infoTitleText}>Password: </Text>
              </View>
              <View style={register_hive.infoContent}>
                <TextInput style={register_hive.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_hive.infoField}>
              <View style={register_hive.infoTitle}>
                <Text style={register_hive.infoTitleText}>Confirm Password: </Text>
              </View>
              <View style={register_hive.infoContent}>
                <TextInput style={register_hive.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_hive.infoField}>
              <View style={register_hive.infoTitle}>
                <Text style={register_hive.infoTitleText}>Nickname: </Text>
              </View>
              <View style={register_hive.infoContent}>
                <TextInput style={register_hive.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_hive.infoField}>
              <View style={register_hive.infoTitle}>
                <Text style={register_hive.infoTitleText}>Habitual Residence: </Text>
              </View>
              <View style={register_hive.infoContent}>
                <TextInput style={register_hive.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_hive.infoField}>
              <View style={register_hive.infoTitle}>
                <Text style={register_hive.infoTitleText}>Phone Number: </Text>
              </View>
              <View style={register_hive.infoContent}>
                <TextInput style={register_hive.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_hive.infoField}>
              <View style={register_hive.infoTitle}>
                <Text style={register_hive.infoTitleText}>Captcha: </Text>
              </View>
              <View style={register_hive.infoContent}>
                <TextInput style={register_hive.infoContentText}></TextInput>
              </View>            
            </View>
            <View style={register_hive.infoField}>
              <View style={register_hive.infoTitle}>
              </View>
              <View>
                <Text style={register_hive.infoContentText}>You must make sure that you are a human.</Text>
              </View>            
            </View>
            <View style={register_hive.infoField}>
              <View style={register_hive.infoTitle}>
              </View>
              <View style={register_hive.agreement}>
                <CheckBox checked={true} checkboxStyle={register_hive.check} />
                <Text>I had read the agreement</Text>
              </View>
            </View>
          </View>
          <View style={register_hive.buttons}>
            <ButtonRounded text="Register" style={buttonRounded.registerButton} onPress={()=>Actions.login()} />
          </View>
          <View style={register_hive.remainings}>
          </View>
        </Image>
      </View>
    );
  }
}
