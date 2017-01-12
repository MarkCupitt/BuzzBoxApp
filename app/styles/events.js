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
	header: {
		flexDirection: 'row',
		width: deviceWidth,
		height: 40,
		borderBottomWidth: 2,
		borderColor: '#eee',
		// backgroundColor: '#111',
	},
	headerLeft: {
		flex: 4,
		paddingLeft: 10,
		justifyContent: 'center',
		// paddingLeft: 10,
		// backgroundColor: '#111',
	},
	headerLeftText: {
		fontSize: 12,
	},
	headerRight: {
		flex: 6,
		paddingRight: 10,
		alignItems: 'flex-end',
		justifyContent: 'center',
		// backgroundColor: '#222',
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
		flex:0.14,
		alignItems: 'center',
		justifyContent: 'flex-end',
		// backgroundColor: '#fff',
	},
	titleText: {
		fontSize: 20,
	},
	content: {
		flex: 5,
		// backgroundColor: '#222',
	},
	notificationBox: {
		alignItems: 'center',
	},
	boxWithShadow: {
		flexDirection: 'column',
		width: 300,
		height: 160,
		marginTop: 50,
		backgroundColor: '#fff',
		borderWidth: 2,
		borderColor: '#eee',
		borderRadius: 3,
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 4,
			width: -4
		}
	},
	boxHeader: {
		flex: 3,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 2,
		borderColor: '#eee',
		// backgroundColor: '#111',
	},
	notificationHeaderTitleText: {
		alignSelf: 'center',
		fontStyle: 'italic',
		marginLeft: 20,
	},
	notificationHeaderContentText: {
		alignSelf: 'center',
		fontWeight: '600'
	},
	boxContent: {
		flex: 7,
		padding: 20,
		// backgroundColor: '#222',
	},
	notificationContentText: {
		fontSize: 12,
		fontStyle: 'italic',
	},
	bold: {
		fontWeight: '600',
	},
	buttons: {
		flex: 1,
		marginTop: 20,
		alignItems: 'flex-end',
	}
});
