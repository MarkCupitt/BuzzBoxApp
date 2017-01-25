
import React from 'react'
import {connect} from 'react-redux'
import {incLogin} from '../actions/'
import Home from '../components/home'

let mapStateToProps = (state) => {
  return {data: state.home};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incHome: () => {
      dispatch(incHome())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
