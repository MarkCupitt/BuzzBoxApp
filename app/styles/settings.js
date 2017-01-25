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
	header: {
		height: 50,
		alignItems: 'center',
	},
	headerText: {
		marginTop: 30,
		fontSize: 18,
		color: '#fff'
	},
	profile: {
		// marginTop: 25,
		// marginLeft: 15,
		height: 185,
		backgroundColor: '#4f4f4f'
	},
	profileTitle: {
		marginTop: 25,
		marginLeft: 15,
		color: '#fff',
	},
	profileInfo: {
		height: 180,
		marginTop: 5,
		// backgroundColor: '#234523'
	},
	infoListBorder: {
		height: 45,
		marginLeft: 18,
		borderBottomColor: '#fff',
		borderBottomWidth: 1,
		backgroundColor: 'transparent'
	},
	infoListNonBorder: {
		height: 45,
		marginLeft: 18,
		backgroundColor: 'transparent'
	},
	infoText: {
		marginTop: 10,
		fontSize: 18,
		color: '#fff'
	},
	notifications: {
		// marginTop: 30,
		backgroundColor: '#4f4f4f'
	},
	notificationsTitle: {
		marginTop: 30,
		marginLeft: 15,
		color: '#fff'
	},
	notificationsInfo: {
		height: 180,
		marginTop: 5,
		// backgroundColor:'#ddd323'
	},
	notificationsListBorder: {
		flexDirection: 'row',
		height: 45,
		marginLeft: 18,
		borderBottomColor: '#fff',
		borderBottomWidth: 1,
		backgroundColor: 'transparent'
	},
	notificationsListNonBorder: {
		flexDirection: 'row',
		height: 45,
		marginLeft: 18,
		backgroundColor: 'transparent'
	},
	notificationsName: {
		flex: 6,
	},
	notificationsSMS: {
		flex: 1.3,
		alignItems: 'center'
	},
	notificationsEmail: {
		flex: 1.3,
		alignItems: 'center'
	},
	notificationsAlarm: {
		flex: 1.3,
		alignItems: 'center'
	},
	emailImg: {
		width: 25,
		height: 20,
		marginTop: 12,
	},
	alarmImg: {
		width: 20,
		height: 20,
		marginTop: 12
	}
});
