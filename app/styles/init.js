/* @flow */
'use strict'

const React = require('react')
const primary = require('./variable').brandPrimary
const secondary = require('./variable').brandSecondary

const { StyleSheet, Dimensions } = require('react-native')
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

module.exports = StyleSheet.create({
	container: {

	},
	header: {
		width: 100,
	    height: 40,
	}
});
