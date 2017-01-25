
import React from 'react'
import {connect} from 'react-redux'
import {incActivity} from '../actions/'
import Settings from '../components/settings'

let mapStateToProps = (state) => {
  return {data: state.settings};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incSettings: () => {
      dispatch(incSettings())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
