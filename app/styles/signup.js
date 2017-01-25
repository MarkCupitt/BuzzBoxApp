/* @flow */
'use strict'

const React = require('react')
const primary = require('./variable').brandPrimary
const secondary = require('./variable').brandSecondary

const {StyleSheet, Dimensions} = require('react-native')
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

module.exports = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexDirection: 'column',
		width: deviceWidth,
		height: deviceHeight,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bg: {
		width: deviceWidth,
		height: deviceHeight,
		backgroundColor: '#333333'
	},
	logo: {
		flexGrow: 1.2,
		width: deviceWidth,
		alignItems: 'center',
		justifyContent: 'flex-end',
		// backgroundColor: '#ffeedd'
	},
	logoImg: {
		width: deviceWidth * 0.3,
		height: deviceHeight * 0.2,
	},
	appTitle: {
		flexGrow: 0.4,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 100,
		backgroundColor: 'transparent'
		// backgroundColor: '#fff'
	},
	titleText: {
		fontSize: 40,
		fontWeight: '600',
		marginTop: 14,
		color: '#fff'
	},
	subtitleText: {
		fontSize: 24,
		fontWeight: '600',
		marginTop: 14,
		color: '#fff'
	},
	info: {
		flexGrow: 0.6,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 30,
		justifyContent: 'center',
		// backgroundColor: '#ff0033',
	},
	input: {
		width: 260,
		// height: 40,
		marginBottom: 40
	},
	buttons: {
		flexGrow: 1,
		flexDirection: 'column',
		marginTop: 30,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: '#44ee55'
	},
	button: {
		flexGrow: 2,
	},
	buttonBottom: {
		flexGrow: 3,
		flexDirection: 'row',
		width: 250,
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	textInput: {
		color: '#fff',
		marginLeft: 25,
		marginRight: 0,
		textAlign: 'center'
	},
	remainings: {
		flexGrow: 4,
	},
	bottomText: {
		textAlign: 'center',
		position: 'absolute',
		bottom: 20,
		left: 50,
		backgroundColor: 'transparent',
		color: '#fff'
	}
});
