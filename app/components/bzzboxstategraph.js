
import React from 'react'
import {View, Text, TextInput, Image, Label, ScrollView, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import store from 'react-native-simple-store'

import styles from '../styles/bzzboxstategraph'
import buttonRounded from '../styles/buttonRounded'
import ButtonRounded from '../widgets/ButtonRounded'
import AnimInput from '../widgets/AnimInput'
import CheckBox from 'react-native-checkbox';
import ActivityDataListComponent from './activitydatalist'
import AreaSpline from '../widgets/AreaSpline'
import Theme from '../widgets/Theme'

export default class BzzboxStateGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: 'Hives state details',
      activeIndex: 0,
      jsonData: '',
      tempIn: [],
      humidityIn: '',
      tempOut: '',
      humidityOut: '',
      baroPressure: '',
      accelerometer: '',
      decibelLevel: '',
      Bettery: '',
      listData: [
                  {
                    id: "1",
                    type: "measurements",
                    attributes: {
                                  publishedAt: "2017-01-11T16:37:04.126Z",
                                  deviceId: "3f0033001347333438373338",
                                  tempCIn: 19.8,
                                  tempCOut: 19.8,
                                  pressureIn: 82908,
                                  pressureOut: 82952,
                                  rhumidityOut: 30,
                                  rhumidityIn: 29,
                                  soc: 47,
                                  volts: 3775,
                                  current: -140,
                                  power: -529
                                }
                  }
                ]
    };
  }

  componentDidMount() {
    store.get('profile_data').then((data)=> {
      if (data === null || data === undefined) {
        // redirect to home page
        Actions.home();
      } else {
        fetch("https://coloradobum-buzzbox.herokuapp.com/v1/measurements?device_id=3f0033001347333438373338")
        .then((response) => response.json())
          .then((responseData) => {
            this.setState({jsonData: responseData.data});
            for (var i = 0; i < this.state.jsonData.length; i++) {
              this.setState({tempIn: this.state.tempIn.concat({'id': this.state.jsonData[i].id, 'value': this.state.jsonData[i].attributes['temp-c-in']})});
            };
            console.log('===========');
            // alert(this.state.tempIn);
      }).catch((error) => {
            //this.setState({visible:false})
            console.warn(error);
      });
      }
    });
    // alert(this.state.tempIn);
  }

  render() {
    const height = 250;
    const width = 450;

    return (
      <View style={styles.container}>
        <Image style={styles.bg} resizeMode='stretch'>
          <View style={styles.header}>
            <Text style={styles.headerText}>{this.state.tabName}</Text>
          </View>
          <View style={styles.graphArea}>
            <AreaSpline width={width} height={height} data={this.state.tempIn} color={Theme.colors[this.state.activeIndex]} />
          </View>
        </Image>
      </View>
    );
  }
}
