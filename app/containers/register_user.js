
import React from 'react'
import {connect} from 'react-redux'
import {incRegisterUser} from '../actions/'
import RegisterUser from '../components/register_user'

let mapStateToProps = (state) => {
  return {data: state.register_user};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incRegisterUser: () => {
      dispatch(incRegisterUser())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterUser);
