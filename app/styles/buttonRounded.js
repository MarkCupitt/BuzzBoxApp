/* @flow */
'use strict'

const React = require('react-native')
const {StyleSheet, Dimensions} = React
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

module.exports = StyleSheet.create({
	button: {
		backgroundColor: 'transparent',
	    padding: 10,
	    borderColor: '#fff',
	    borderWidth: 1,
		borderRadius: 23,
		width: deviceWidth/2.2,
		height: 46,
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	loginButton: {
		backgroundColor: '#0045ff',
	    padding: 10,
	    borderColor: '#0045ff',
	    borderWidth: 1,
		borderRadius: 5,
		width: 280,
		height: 46,
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	registerButton: {
		backgroundColor: '#0045ff',
	    padding: 10,
	    borderColor: '#0045ff',
	    borderWidth: 1,
		borderRadius: 5,
		width: 80,
		height: 32,
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	feedbackButton: {
		backgroundColor: '#0045ff',
	    padding: 5,
	    borderColor: '#0045ff',
	    borderWidth: 1,
		borderRadius: 5,
		width: 90,
		height: 28,
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	signinButton: {
		backgroundColor: 'transparent',
	    padding: 10,
	    borderColor: '#fff',
	    borderWidth: 1,
		borderRadius: 23,
		width: deviceWidth/2.2,
		height: 46,
		marginTop: 20,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	signupButton: {
		backgroundColor: 'transparent',
	    padding: 10,
	    borderColor: '#fff',
	    borderWidth: 1,
		borderRadius: 23,
		width: deviceWidth/2.2,
		height: 46,
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	addAccounts: {
		backgroundColor: 'transparent',
	    padding: 10,
	    borderColor: '#fff',
	    borderWidth: 1,
		borderRadius: 23,
		width: deviceWidth/2.2,
		height: 46,
		marginTop: 20,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	removeAccounts: {
		backgroundColor: 'transparent',
	    padding: 10,
	    borderColor: '#fff',
	    borderWidth: 1,
		borderRadius: 23,
		width: deviceWidth/2.2,
		height: 46,
		marginTop: 20,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	buttonText: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 14,
		fontWeight: '600'
	}
});

