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
	title: {
		flex: 1.6,
		alignItems: 'center',
		justifyContent: 'flex-end',
		// backgroundColor: '#aaa',
	},
	titleText: {
		fontSize: 26,
		fontWeight: '500',
		marginTop: 14
	},
	info: {
		flex: 5,
		flexDirection: 'column',
		// width: 280,
		alignItems: 'center',
		// backgroundColor: '#bbb',
	},
	infoField: {
		flex: 1,
		flexDirection: 'row',
		width: 320,
		height: 20,
		justifyContent: 'center',
		marginTop: 16,
	},
	infoTitle: {
		width: 95,
		alignItems: 'flex-end',
		justifyContent: 'center',
		// backgroundColor: '#111',
	},
	infoTitleText: {
		fontSize: 10,
	},
	infoContent: {
		flex: 8,
		flexDirection: 'row',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#444',
		borderRadius: 5,
		// backgroundColor: '#222',
	},
	infoContentText: {
		fontSize: 10,
	},
	agreement: {
		flex: 8,
		flexDirection: 'row',
	},
	buttons: {
		flex: 1,
		alignItems: 'center',
		// backgroundColor: '#ccc',
	},
	remainings: {
		flexGrow: 1,
	}
});
