
import React from 'react'
import {connect} from 'react-redux'
import {incLogin} from '../actions/'
import Dashboard from '../components/dashboard'

let mapStateToProps = (state) => {
  return {data: state.dashboard};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incDashboard: () => {
      dispatch(incDashboard())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
