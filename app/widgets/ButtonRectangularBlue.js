import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const styles = require('../styles/button')
const primary = require('../styles/variable').brandPrimary

export default class ButtonRectangularBlue extends React.Component {
    render(){
        return(
            <TouchableOpacity
            style={styles.buttonRectangularBlue}
            onPress={this.props.onPress}>
                <Text style={styles.buttonRectangularText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}
