/* @flow */
'use strict'

import React from 'react'
import {Component, Text, View, TouchableHighlight } from 'react-native'
import buttonRounded from '../styles/buttonRounded'

export default class Button extends React.Component {
    render() {
        return(
            <TouchableHighlight style={this.props.style} underlayColor={this.props.underlayColor} onPress={this.props.onPress}>
                <Text style={buttonRounded.stateText}>{this.props.text}</Text>
            </TouchableHighlight> 
        );
    }    
}

