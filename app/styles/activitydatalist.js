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
	listItem: {
		flexDirection: 'column',
		height: 128,
		width: deviceWidth * 0.96,
		backgroundColor: '#4f4f4f',
	},
	top: {
		flex: 7.5,
		// backgroundColor: '#5dea34'
	},
	activityStatement: {
		marginTop: 10,
		marginLeft: 10,
		fontSize: 18,
		color: '#fff',
	},
	activityTime: {
		marginTop: 5,
		marginLeft: 12,
		fontSize: 14,
		color: '#fff'
	},
	topBelow: {
		flexDirection: 'row',
	},
	belowLeft: {
		flex: 4,
		flexDirection: 'row',
		paddingLeft: 10
	},
	infoText: {
		marginTop: 10,
		fontSize: 12,
		color: '#fff'
	},
	belowMiddle: {
		flex: 3
	},
	belowRight: {
		flex: 3
	},
	bottom: {
		flex: 2.5,
		flexDirection: 'row',
		borderTopWidth: 1,
		borderTopColor: '#fff',
		// backgroundColor: '#123354'
	},
	bottomLeft: {
		flex: 5,
		flexDirection: 'row',
		alignItems: 'center',
		borderRightWidth: 1,
		borderRightColor: '#fff'
	},
	reportMark: {
		marginRight: 10,
		marginLeft: 30,
		color: '#eb5757'
	},
	bottomRight: {
		flex: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	confirmMark: {
		marginLeft: 50,
		marginRight: 10,
		color: '#27ae60'
	},
	buttonText: {
		fontSize: 12,
		color: '#fff'
	}
});
