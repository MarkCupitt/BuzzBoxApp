/* @flow */
'use strict'

const React = require('react-native')
const {StyleSheet} = React

const primary = require('./variable').brandPrimary
const secondary = require('./variable').brandSecondary

module.exports = StyleSheet.create({
	button: {
		backgroundColor: '#fff',
	    padding: 10,
	    borderColor: 'transparent',
	    borderWidth:2,
	    alignSelf: 'stretch',
		borderRadius: 23,
		height: 45,
		marginTop: 0,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3

	},
	buttonRectangularBlue: {
		backgroundColor: '#4F2C96',
	    padding: 6,
	    borderColor: 'transparent',
	    borderWidth:2,
	    alignSelf: 'center',
	    justifyContent: 'center',
	    alignItems: 'center',
		borderRadius: 3,
		width: 300,
		height: 50,
		marginTop: 0,
		marginLeft: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3

	},
	buttonColor: {
		backgroundColor: secondary,
	    padding: 10,
	    borderColor: 'transparent',
	    borderWidth:2,
	    alignSelf: 'stretch',
		borderRadius: 23,
		height: 45,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3

	},
	buttonRectangularColor: {
		backgroundColor: secondary,
	    padding: 10,
	    borderColor: 'transparent',
	    borderWidth:2,
	    alignSelf: 'stretch',
		borderRadius: 23,
		height: 45,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 3

	},
	buttonText: {
		color: secondary,
		alignSelf: 'center',
		fontSize: 18
	},
	buttonRectangularText: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 18
	},
	buttonColorText: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 17
	},
	buttonRectangularColorText: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 17
	}
});

