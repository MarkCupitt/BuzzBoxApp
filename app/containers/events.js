
import React from 'react'
import {connect} from 'react-redux'
import {incEvents} from '../actions/'
import Events from '../components/events'

let mapStateToProps = (state) => {
  return {data: state.events};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incEvents: () => {
      dispatch(incEvents())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);
