
import React from 'react'
import {connect} from 'react-redux'
import {incLogin} from '../actions/'
import Signup from '../components/signup'

let mapStateToProps = (state) => {
  return {data: state.signup};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incSignup: () => {
      dispatch(incSignup())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
