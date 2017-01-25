
import React from 'react'
import {connect} from 'react-redux'
import {incActivity} from '../actions/'
import Activity from '../components/activity'

let mapStateToProps = (state) => {
  return {data: state.activity};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incActivity: () => {
      dispatch(incActivity())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Activity);
