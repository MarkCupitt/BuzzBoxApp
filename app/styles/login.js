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
		justifyContent: 'center'
	},
	bg: {
		width: deviceWidth,
		height: deviceHeight
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
		// backgroundColor: '#334422'
	},
	titleText: {
		fontSize: 26,
		fontWeight: '500',
		marginTop: 14
	},
	subtitleText: {
		fontSize: 24,
		fontWeight: '400',
		fontStyle: 'italic',
		marginTop: 14
	},
	info: {
		flexGrow: 0.4,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: '#ff0033',
	},
	input: {
		width: 280,
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
	buttonTop: {
		flexGrow: 3,
		flexDirection: 'row',
		width: 280,
		alignItems: 'center',
	},
	buttonTopLeft: {
		flexGrow: 5,
		flexDirection: 'row',
		// alignItems: 'flex-start'
	},
	check: {
		backgroundColor: '#0045ff',
		color: '#fff',
		borderRadius: 5,
	},
	buttonTopRight: {
		flexGrow: 5,
		alignItems: 'flex-end',
	},
	forgotPassword: {
		color: '#0045ff'
	},
	button: {
		flexGrow: 3,
	},
	buttonBottom: {
		flexGrow: 3,
		width: 280,
		alignItems: 'flex-start'
	},
	registerText: {
		color: '#0045ff',
	},
	textInput: {
		color: '#fff',
		marginLeft: 50,
		marginRight: 50,
		height: 55,
		textAlign: 'center'
	},
	remainings: {
		flexGrow: 4,
	}
});
