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
		alignItems: 'center'
	},
	headerText: {
		marginTop: 30,
		fontSize: 18,
		color: '#fff'
	},
	hiveData: {
		// marginLeft: 15,
		height: 185,
		marginTop: 20,
		backgroundColor: '#4f4f4f'
	},
	hiveInfo: {
		height: 180,
		marginTop: 5,
		// backgroundColor: '#234523'
	},
	infoListBorder: {
		flexDirection: 'row',
		height: 45,
		marginLeft: 18,
		borderBottomColor: '#fff',
		borderBottomWidth: 1,
		backgroundColor: 'transparent'
	},
	infoListNonBorder: {
		flexDirection: 'row',
		height: 45,
		marginLeft: 18,
		backgroundColor: 'transparent'
	},
	itemLeft: {
		flex: 5
	},
	hiveNameInput: {
		height: 40,
		color: '#fff',
		backgroundColor: '#2e2e2e'
	},
	itemMiddle: {
		flex: 4,
		alignItems: 'flex-end'
	},
	itemRight: {
		flex: 1,
		alignItems: 'center'
	},
	nextImg: {
		height: 15,
		width: 10,
		marginTop: 15,
		marginRight: 5
	},
	infoText: {
		marginTop: 10,
		fontSize: 18,
		color: '#fff'
	},
	notifications: {
		// marginTop: 30,
		backgroundColor: '#4f4f4f'
	}
});
