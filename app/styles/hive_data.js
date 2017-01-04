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
	header: {
		flexDirection: 'row',
		width: deviceWidth,
		height: 40,
		borderBottomWidth: 2,
		borderColor: '#eee',
	},
	headerLeft: {
		flex: 4,
		paddingLeft: 10,
		justifyContent: 'center',
	},
	headerLeftText: {
		fontSize: 12,
	},
	headerRight: {
		flex: 6,
		paddingRight: 10,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	badge: {
		position: 'absolute',
		top: 20,
		left: 70,
	},
	headerRightText: {
		fontSize: 12,
	},
	title: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'flex-end',
		// backgroundColor: '#111',
	},
	titleText: {
		fontSize: 24,
	},
	graphArea: {
		flex: 4.5,
		// backgroundColor: '#222',
	},
	parameterCheckbox: {
		flex: 3.5,
		flexDirection: 'column',
		alignItems: 'center',
		// backgroundColor: '#333',
	},
	checkboxTop: {
		flexDirection: 'row',
	},
	checkboxBottom: {
		flexDirection: 'row',
		marginTop: 20,
	},
	parameter: {
		flex: 2.5,
		alignItems: 'center',
	},
	checkText: {
		textAlign: 'center',
		fontSize: 12,
	}
});
