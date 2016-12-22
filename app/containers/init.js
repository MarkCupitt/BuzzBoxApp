
import React from 'react'
import {connect} from 'react-redux'
import {incInit} from '../actions/'
import Init from '../components/init'

let mapStateToProps = (state) => {
  return {data: state.init};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incInit: () => {
      dispatch(incInit())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Init);
