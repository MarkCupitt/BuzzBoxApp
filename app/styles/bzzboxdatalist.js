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
		alignItems: 'center',
		justifyContent: 'center',
	},
	listItem: {
		flexDirection: 'row',
		height: 80,
		marginBottom: 10,
		width: deviceWidth * 0.96,
		backgroundColor: '#4f4f4f',
	},
	listLeft: {
		flex: 4,
		flexDirection: 'column'
	},
	listMiddle: {
		flex: 3
	},
	listRight: {
		flex: 3,
		flexDirection: 'row'
	},
	hiveTitle: {
		marginLeft: 10,
		marginTop: 10,
		fontSize: 18,
		color: '#fff',
	},
	hiveState: {
		flexDirection: 'row',
		marginLeft: 10,
	},
	state: {
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 15,
		marginLeft: 20
	},
	stateImg: {
		width: 12,
		height: 25,
	},
	stateText: {
		marginTop: 8,
		fontSize: 12,
		color: '#fff',
	},
	addHive: {
		width: deviceWidth * 0.96,
		height: 80,
		alignItems: 'center',
		backgroundColor: '#4f4f4f'
	},
	addButton: {
		width: 50,
		height: 50,
		marginTop: 15
	}
});
