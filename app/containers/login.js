
import React from 'react'
import {connect} from 'react-redux'
import {incLogin} from '../actions/'
import Login from '../components/login'

let mapStateToProps = (state) => {
  return {data: state.login};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incLogin: () => {
      dispatch(incLogin())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
