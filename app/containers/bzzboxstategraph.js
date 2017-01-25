
import React from 'react'
import {connect} from 'react-redux'
import {incActivity} from '../actions/'
import BzzboxStateGraph from '../components/bzzboxstategraph'

let mapStateToProps = (state) => {
  return {data: state.bzzboxstategraph};
};

let mapDispatchToProps = (dispatch) => {
  return {
    inc: () => {
      dispatch(incBzzboxStateGraph())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BzzboxStateGraph);
