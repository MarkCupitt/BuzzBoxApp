
import React from 'react'
import {connect} from 'react-redux'
import {incRegisterHive} from '../actions/'
import RegisterHive from '../components/register_hive'

let mapStateToProps = (state) => {
  return {data: state.register_hive};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incRegisterHive: () => {
      dispatch(incRegisterHive())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterHive);
